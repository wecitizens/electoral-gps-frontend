<template>
    <div>
        <steps :active="1"></steps>
        <div v-if="!vote.current.election.candidates">

        </div>
        <div class="container mt-3 mb-5" v-else>
            <h2>{{ $t('Seuls {number} candidats ont répondu au test dans votre commune', {'number': vote.current.election.candidates.length}) }}</h2>
            <ul class="list-unstyled mt-4">
                <li class="media mb-3" v-for="(item, key) in vote.current.election.candidates"  :key="key">
                    <a :href="'//directory.wecitizens.be/en/politician/profil/'+item.politician_id" target="_blank"><img class="mr-3 align-self-start img-thumbnail" :src="item.img" width="64" alt="" v-if="item.img">
                        <img class="mr-3 align-self-start img-thumbnail" src="http://directory.wecitizens.be/assets/media/politician-thumb/img-no-photo.png" width="64" alt="" v-else></a>
                    <div class="media-body text-left">
                        <h5><a :href="'//directory.wecitizens.be/en/politician/profil/'+item.politician_id" target="_blank">{{ item.full_name }}</a></h5>
                        <h6>
                          {{ item.list }}
                          <span v-if="item.order">#{{item.order}}</span>
                         </h6>
                    </div>
                </li>
            </ul>
            <div class="alert alert-warning">
                {{ $t('insuffisant_number') }}
            </div>
            <router-link :to="'/survey/'+district_key" class="btn btn-block btn-danger mt-3 d-none">{{ $t('Je fais quand même le test!') }}</router-link>
            <div class="row mt-3 d-none"><!-- @TODO => dynamise this -->
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
