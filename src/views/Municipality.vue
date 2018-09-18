<template>
    <div>
        <steps :active="1"></steps>
        <div class="text-center mt-5">
            <h1>{{ $t("district.what_is_your_postcode") }}</h1>
            <p>{{ $t("district.help_customise_survey") }}</p><br/>
            <el-row>
                <el-autocomplete class="inline-input" v-model="district" :fetch-suggestions="filterDistricts"
                                 v-bind:placeholder="$t('input.place_holder.your_postcode')"
                                 @select="setCurrentDistrict({ district })"></el-autocomplete>
            </el-row>
            <br/>
            <el-row v-if="vote.current.election && vote.current.election.candidates">
                <router-link v-if="vote.current.election.candidates.length > 3" :to="'/survey/'+district_key"
                             tag="el-button">{{ $t("button.lets_go") }}
                </router-link>
                <router-link v-else :to="'/insufficient-candidates/'+district_key" tag="el-button">{{
                    $t("button.lets_go") }}
                </router-link>
            </el-row>
            <el-row v-else-if="district">
                <div>{{ $t('There is no campaign for the moment')}}</div>
            </el-row>
        </div>
    </div>
</template>

<script>

  import {mapState} from 'vuex';
  import Steps from '../components/Steps';

  export default {
    name: 'district',
    components: {Steps},
    data() {
      return {
        district: null,
        zip_code: null,
        district_key: null
      }
    },
    created() {
      this.$store.dispatch('getDistricts');
    },
    computed: {
      displayNextStepButton() {
        return true
      },
      survey() {
        console.log(this.$store.state);
        return this.$store.state.survey.current;
      },
      ...mapState(['vote'])
    },
    methods: {
      setCurrentDistrict(data) {
        const district = this.$store.state.vote.districtSearchResults.find(r => r.value === data.district);
        this.district_key = district.key;
        this.$store.commit("setCurrentDistrict", district);
        this.$store.dispatch("setCurrentElection", district);
      },
      async filterDistricts(data, cb) {
        await this.$store.dispatch('filterDistricts', data);
        cb(this.$store.state.vote.districtSearchResults);
      }
    }
  };
</script>
