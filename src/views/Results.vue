<template>
    <div class="results">

        {{ currentCandidateScores }}
        {{ currentElectoralListScores }}

        <div>
            <button type="button" class="btn btn-default">Corriger mes réponses</button>
            <button type="button" class="btn btn-default">Faire un don</button>
        </div>
    </div>
</template>

<script>

  import CandidateLists from '@/components/CandidateList';
  import {mapGetters} from 'vuex'

  export default {
    name: 'results',
    components: {
      CandidateLists
    },
    methods: {
      getElectoralListForScore(score) {
        return this.currentElection.electoral_lists.find(e => e.key == score.user_key);
      },
      extractCandidate(score) {

        console.log("Extract", score.user_key);

        if (!score.user && score.user_key) {
          const rest = axios.get('/politician/' + score.user_key + '.json').then((err, data) => {
            console.log('rest', rest);
          });
        } else if (score.user) {
          let group = this.currentElection.electoral_lists
            .filter(e => e.candidates.map(c => c.key).includes(score.user_key))[0]

          console.log('Extract candidate', score.user.key, this.currentElection.candidate);

          return {
            name: this.currentElection.candidates.find(p => p.key == score.user_key).full_name,
            group: this.$t('vote.' + group.name),
            position: group.candidates.find(c => c.key == score.user_key).order,
            score: score.score,
            img: 'http://directory.wecitizens.be/assets/media/vignette_user/2dbd727a0959bff621ae57de378261c4.jpeg'
          } // @TODO fix image src
        } else {
          console.log('User not found', score);
          return {
            name: "user_key",
            group: "user_key",
            position: "user_key",
            score: "user_key",
            img: "user"
          };
        }
      },
      extractList(score) {
        return {
          name: this.$t('vote.' + this.getElectoralListForScore(score).name),
          score: score.score,
          img: 'http://directory.wecitizens.be/assets/media/vignette_user/73b0e2fd2a3db4d9da41811ca74507a2.png'
        } // @TODO fix image src
      }
    },
    created() {

      console.log('Store', this.$store);

      const poll = this.$store.state.survey.current.poll;

      const survey = this.$store.state.survey.current.survey;

      if (survey) {
        // TODO : q.agreement is "Tout à fait d'accord" must change !!
        // TODO : q.importance not set if not defined and same prob as before I suppose ...

        const answers = this.$store.state.questions.list.data.questions
          .map(q => {

            console.log('Q', q);

            return {
              question_key: q.key,
              answer_format: 'agr_5_scale_tol_3_scale_abs', // TODO survey.questions.find(qu => qu.key === q.key).answer_format,
              value: q.agreement,
              tolerance: q.importance
            }
          }).filter(q => q.value != null);

        if (typeof poll.segment_keys !== 'undefined') {
          poll.segment_keys.forEach(s =>
            this.$store.dispatch('performMatch', {
              segment_key: s,
              answer_formats: survey.answer_formats,
              answers: answers
            }));
        }
      }
    },
    mounted() {

      // Redirect to homepage if no survey defined !
      if (!this.$store.state.survey.current.poll) {
        this.$router.push('/');
      }
    },
    computed: {
      ...mapGetters(['currentElection', 'currentCandidateScores', 'currentElectoralListScores'])
    }
  }
</script>

<style scoped>
    .tab-center {
        margin: auto;
    }

    .list-legend {
        font-weight: bold;
        font-style: italic;
        font-size: 120%;
        padding: 1em;
    }

    .list-item {
        padding: .6em 0;
        text-align: left;
    }

    .list-item img {
        border-radius: 100%;
    }

    .list-item .title {
        margin-top: .4em;
        font-size: 150%;
        font-weight: bold;
    }

    .list-item .subtitle {
        font-size: 120%;
    }

    .list-item .progress {
        margin-top: .6em;
        border-radius: 10px;
    }

    .list-scroll {
        height: 70vh;
        overflow-y: scroll;
    }
</style>
