<template>
    <div>
        <steps :active="1"></steps>
        <div v-if="!vote.current.election.candidates">

        </div>
        <div v-else>
            <p>Seuls {{ vote.current.election.candidates.length }} candidats ont répondu au test dans votre commune</p>
            <ul class="list-group">
                <li class="list-group-item" v-for="(item) in vote.current.election.candidates">
                    <h4>{{ item.full_name }}</h4>
                    <h6>Liste du Bourgmestre</h6>
                </li>
            </ul>
            <router-link :to="'/survey/'+district_key" class="btn btn-block btn-outline-primary">Je fais quand même le test!</router-link>
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