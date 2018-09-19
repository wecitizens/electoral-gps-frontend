import LA from 'look-alike';
import LAUtil from '../../../node_modules/look-alike/lib/util';
import API from "../_helpers/api";

// TODO : handle more (or less) than two segment for each poll

export default {
  state: {
    current: {
      candidateSegmentAnswers: null,
      electoralListSegmentAnswers: null,
      candidateScores: [],
      electoralListScores: []
    }
  },
  getters: {
    currentCandidateScores: state => state.current.candidateScores,
    currentElectoralListScores: state => state.current.electoralListScores
  },
  mutations: {
    setCurrentCandidateScores(state, payload) {
      state.current.candidateScores = payload;
    },
    setCurrentElectoralListScores(state, payload) {
      state.current.electoralListScores = payload;
    },
    setCurrentCandidateSegmentAnswers(state, payload) {
      state.current.candidateSegmentAnswers = payload;
    },
    setCurrentElectoralListSegmentAnswers(state, payload) {
      state.current.electoralListSegmentAnswers = payload;
    }
  },
  actions: {
    async performMatch({commit}, matchRequest) {

      const segmentAnswers = await API.get('gps/answer/segment/' + matchRequest.segment_key + '.json').then((request) => {
        return request.data.data;
      });

      if (matchRequest.segment_key.includes("electoral_list")) {
        commit('setCurrentElectoralListSegmentAnswers', segmentAnswers)
      }

      if (matchRequest.segment_key.includes("candidate")) {
        commit('setCurrentCandidateSegmentAnswers', segmentAnswers)
      }

      const answer_formats = matchRequest.answer_formats;
      const a = matchRequest.answers;

      console.log('Answers', answer_formats, matchRequest.answers);

      const subject = matchRequest.answers.reduce(
        (accumulator, target) => {
          const currentAnswerFormat = answer_formats.find(x => x.key === target.answer_format);

          if(currentAnswerFormat) {
            const currentItem = currentAnswerFormat.items.find(x => x.key === target.value);

            if(currentItem) {
              return {...accumulator,
                [target.question_key]:currentItem.weight
              }
            } else {
              console.log('currentItemNotFound', currentAnswerFormat.items, target.value);
            }
          } else {
            console.log('currentAnswerFormatNotFound', target.answer_format, answer_formats);
          }
        }, {});

      console.log('answers', matchRequest.answers, answer_formats);

      const weights = matchRequest.answers.reduce(
        (accumulator, target) => {
          const currentAnswerFormat = answer_formats.find(x => x.key === target.answer_format);

          if(currentAnswerFormat) {
            const currentItem = currentAnswerFormat.tolerance.items.find(x => x.key === target.tolerance);

            if(currentItem) {
              return {
                ...accumulator,
                [target.question_key]:currentItem.weight
              }
            } else {
              console.log('currentItemNotFound', currentAnswerFormat.items, target.value);
            }
          } else {
            console.log('currentAnswerFormatNotFound', target.answer_format, answer_formats);
          }
        }, {});

      const t = segmentAnswers.reduce(
        function (acc, t) {

          let u = {};

          if (acc.hasOwnProperty(t.user_key))
            u = acc[t.user_key];

          const q = a.find(aa => aa.question_key == t.question_key);

          if (q == null) // otherwise when question answer not found in segment, there might be a question_id mismatch
            return acc;

          u[t.question_key] = answer_formats.find(x => x.key == q.answer_format).items.find(x => x.key == t.value).weight;
          acc[t.user_key] = u;
          return acc;

        }
        , {});


      console.log("My choice : ");
      console.log(subject);

      console.log("My tolerance : ");
      console.log(weights);

      const answers = Object.keys(t).map(k => {
        return {key: k, answers: t[k]}
      });
      console.log("Segment answers : ");
      console.log(answers);

      const tree = new LA(answers,
        null,
        function (r) {
          return r.answers;
        }
      );

      const results = tree.query({key: "subject", answers: subject}, {
        k: answers.length, // number of match
        normalize: false,
        weights: weights
      });

// works for one format only
      const itemWeightMax = answer_formats[0].items.map(i => i.weight).reduce((p, c) => {
        return c > p ? c : p;
      }, 0);

      const distanceMax = Math.sqrt(
        Object.values(weights).reduce((p, c) => {
          return p + Math.pow(c * itemWeightMax, 2)
        }, 0));

      console.log("Max weight : ");
      console.log(itemWeightMax);

      console.log("Max distance : ");
      console.log(distanceMax);

      const scores = results.map(r => {

        const distance = LAUtil.distance(r.answers, subject, {weights: weights});
        const match = 100 * (1 - distance / distanceMax);

        return {
          user_key: r.key,
          score: match
        }
      });

      console.log("My scores : ");
      console.log(scores);

      const viewScores = scores
        .sort((a, b) => a.score < b.score)
        .map(s => {
          s.score = s.score.toFixed(2);
          return s;
        });

      if (matchRequest.segment_key.includes("electoral_list")) {
        commit('setCurrentElectoralListScores', viewScores)
      }

      if (matchRequest.segment_key.includes("candidate")) {
        commit('setCurrentCandidateScores', viewScores)
      }
    }
  }
};