<template>
  <div class="results">
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Candidates" class="col-md-6 tab-center" active>
          <p class="list-legend">Les candidats qui partagent le plus mes convictions sont:</p>
          <div class="row list-item" v-for="(item, idx) in currentCandidateScores.map(extractCandidate)" :key="idx">
            <div class="col-3">
              <img :src="item.img" class="img-thumbnail"/>
            </div>
            <div class="col-9">
              <div class="title">{{ item.name }}</div>
              <div class="subtitle">#{{ item.position }} {{ item.group }}</div>
              <div class="progress">
                <div class="progress-bar" role="progressbar" :style="'width:' + item.score + '%;'"
                :aria-valuenow="item.score"
                aria-valuemin="0" aria-valuemax="100">{{ Math.round(item.score) }}%
                </div>
              </div>
            </div>
          </div>
        </b-tab>
        <b-tab title="Listes" class="col-md-6 tab-center">
          <p class="list-legend">Les listes qui partagent le plus mes convictions sont:</p>
          <div class="row list-item" v-for="(item, idx) in currentElectoralListScores.map(extractList)" :key="idx">
            <div class="col-3">
              <img :src="item.img" class="img-thumbnail"/>
            </div>
            <div class="col-9">
              <div class="title">{{ item.name }}</div>
              <div class="progress">
                <div class="progress-bar" role="progressbar" :style="'width:' + item.score + '%;'"
                :aria-valuenow="item.score"
                aria-valuemin="0" aria-valuemax="100">{{ Math.round(item.score) }}%
                </div>
              </div>
            </div>
          </div>
        </b-tab>
      </b-tabs>
    </b-card>

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
    getElectoralListForScore(score){
      return this.currentElection.electoral_lists.find(e => e.key == score.user_key);
    },
    extractCandidate (score) {
      let group = this.currentElection.electoral_lists
        .filter(e => e.candidates.map(c => c.key).includes(score.user_key))[0]
      return {
        name: this.currentElection.candidates.find(p => p.key == score.user_key).full_name,
        group: this.$t('vote.' + group.name),
        position: group.candidates.find(c => c.key == score.user_key).order,
        score: score.score,
        img: 'http://directory.wecitizens.be/assets/media/vignette_user/2dbd727a0959bff621ae57de378261c4.jpeg'
      } // @TODO fix image src
    },
    extractList (score) {
      return {
        name: this.$t('vote.' + this.getElectoralListForScore(score).name),
        score: score.score,
        img: 'http://directory.wecitizens.be/assets/media/vignette_user/73b0e2fd2a3db4d9da41811ca74507a2.png'
      } // @TODO fix image src
    }
  },
  created() {

    console.log(this.$store);

    const poll = this.$store.state.survey.current.poll;

    const survey = this.$store.state.survey.current.survey;

    // TODO : q.agreement is "Tout à fait d'accord" must change !!
    // TODO : q.importance not set if not defined and same prob as before I suppose ...

    const answers = this.$store.state.questions.list.data.questions
    .map(q => {
      return {
        question_key: q.key,
        answer_format: 'agr_5_scale_tol_3_scale_abs', // TODO survey.questions.find(qu => qu.key === q.key).answer_format,
        value: q.agreement,
        tolerance: q.importance
      }
    }).filter(q => q.value != null);

    console.log("candidates answers");
    console.log(answers);

    poll.segment_keys.forEach(s =>
      this.$store.dispatch('performMatch', {
        segment_key: s,
        answer_formats: survey.answer_formats,
        answers: answers
      }));
    },
    computed: {
      ...mapGetters(['currentElection','currentCandidateScores','currentElectoralListScores'])
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
