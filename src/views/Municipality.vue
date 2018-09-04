<template>
    <div class="h-screen">
        <el-main>
            <steps :active="1"></steps>
            <div class="text-center mt-5">
                <h1>{{ $t("district.what_is_your_postcode") }}</h1>
                <p>{{ $t("district.help_customise_survey") }}</p><br/>
                <el-row>
                    <el-autocomplete class="inline-input" v-model="municipality" :fetch-suggestions="querySearch"
                                     v-bind:placeholder="$t('input.place_holder.your_postcode')"
                                     @select="setZipCode({ municipality })"></el-autocomplete>
                </el-row>
                <br/>
                <el-row>
                    <router-link to="/survey" tag="el-button">{{ $t("button.lets_go") }}
                    </router-link>
                </el-row>
            </div>
        </el-main>
    </div>
</template>

<script>

  import {mapGetters, mapActions} from 'vuex';
  import Steps from '../components/Steps';

  export default {
    name: 'municipality',
    components: {Steps},
    data() {
      return {
        municipality: null
      }
    },
    computed: {
      ...mapGetters(['municipalities']),
      displayNextStepButton() {
        return true
      }
    },
    methods: {
      ...mapActions(['setZipCode']),
      querySearch(queryString, cb) {
        const municipalities = this.municipalities
        const results = queryString ? municipalities.filter(this.createFilter(queryString)) : municipalities
        cb(results)
      },
      createFilter(queryString) {
        return (municipality) => {
          return (municipality.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
        }
      },
      handleSelect() {
        //
      }
    }
  };
</script>
