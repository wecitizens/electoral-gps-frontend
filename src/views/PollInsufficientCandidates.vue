<template>
    <div>
        <steps :active="1"></steps>
        <div v-if="!vote.current.election.candidates">

        </div>
        <div class="container mt-3 mb-5" v-else>
            <h2>Seuls {{ vote.current.election.candidates.length }} candidats ont répondu au test dans votre commune</h2>
            <ul class="list-unstyled mt-4">
                <li class="media mb-3" v-for="(key, item) in vote.current.election.candidates" :key="key">
                    <img class="mr-3 align-self-start img-thumbnail" src="https://cediv.travel/wp-content/uploads/2017/09/no-avatar-9.png" width="64" alt="Generic placeholder image">
                    <div class="media-body text-left">
                        <h5>{{ item.full_name }}</h5>
                        <h6>Liste du Bourgmestre</h6>
                    </div>
                </li>
            </ul>
            <router-link :to="'/survey/'+district_key" class="btn btn-block btn-danger mt-3">Je fais quand même le test!</router-link>
            <div class="row mt-3">
                <div class="col">
                    <a href="" class="btn btn-outline-danger btn-block">{{ $t('Partager le gps')}}</a>
                </div>
                <div class="col">
                    <a href="" class="btn btn-outline-danger btn-block">{{ $t('Faire un don')}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

  import {mapActions, mapGetters, mapState} from 'vuex';
  import Steps from '../components/Steps';

  export default {
    name: "poll-insufficient-candidates",
    components: {
      Steps
    },
    data(){
      return {
        district_key : null
      }
    },
    computed: {
      ...mapGetters(['questions', 'currentQuestionKey', 'survey']),
      ...mapState(['vote'])
    },
    methods: {
      ...mapActions(['getQuestions', 'previousQuestion', 'nextQuestion']),
    },
    created() {
      this.$store.dispatch('getDistricts').then(() => {

        this.district_key = this.$route.params.key;

        const district = this.$store.state.vote.districts.find(r => r.key === this.district_key);

        this.$store.commit("setCurrentDistrict", district);
        this.$store.dispatch("setCurrentElection", district);
        this.$store.dispatch('setCurrentPoll', district)
          .then(() => this.$store.dispatch('setCurrentSurvey'))
          .then(() => this.getQuestions())
          .then(() => {
            this.loading = false;
            let $ = window.jQuery;
            $("html, body").animate({scrollTop: $(document).height()}, 1000);
          });
      });
    }
  }
</script>

<style scoped>
    .list-scroll {
        height: 70vh;
        overflow-y: scroll;
    }
</style>