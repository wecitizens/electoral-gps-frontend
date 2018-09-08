<template>
    <div>
        <steps :active="3"></steps>
        <h1 class="text-center">{{$t('stats.anonymous_question_to_improve_service')}}</h1>
        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="Activity type">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox v-bind:label="$t('less_than_35')" name="type"></el-checkbox>
                    <el-checkbox v-bind:label="$t('between_35_and_55')" name="type"></el-checkbox>
                    <el-checkbox v-bind:label="$t('over_55')" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item>
                <router-link tag="el-button" v-bind:to="localePath('results')" type="primary" @click="onSubmit">{{$t('button.see_results')}}</router-link>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

import Steps from '../components/Steps'


export default {
  components: {
    Steps
  },
  data () {
    return {
      municipality: null,
      type: null,
      form: {
        type: []
      }
    }
  },
  computed: {
    ...mapGetters(['municipalities']),
    displayNextStepButton () {
      return true
      // return this.municipalities.includes({ value: this.municipality })
    }
  },
  methods: {
    ...mapActions(['setZipCode']),
    querySearch (queryString, cb) {
      const municipalities = this.municipalities
      const results = queryString ? municipalities.filter(this.createFilter(queryString)) : municipalities
      cb(results)
    },
    createFilter (queryString) {
      return (municipality) => {
        return (municipality.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleSelect () {
      //
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
