<template>
    <div>
        <steps :active="3"></steps>
        <h1 class="text-center">{{$t('stats.anonymous_question_to_improve_service')}}</h1>
        <el-form ref="form" label-position="top" :model="form" label-width="120px">
            <el-form-item v-for="(q, key) in $t('stats.questions')" :key="key" :label="q.title">
                <el-checkbox-group v-if="q.type === 'checkbox'">
                    <el-checkbox v-for="(name, value) in q.options" :v-model="'form.'+form[q.key]" :key="value" v-bind:label="name" :name="q.key"
                                 v-bind:value="value"></el-checkbox>
                </el-checkbox-group>
                <el-radio-group  v-if="q.type === 'radio'">
                    <el-radio v-for="(name, value) in q.options" :v-model="'form.'+form[q.key]" :key="value" v-bind:label="name" :name="q.key"
                              v-bind:value="value"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <router-link tag="el-button" to="results" type="primary">{{$t('button.see_results')}}</router-link>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  import Steps from '../components/Steps'
  import ElRadio from "element-ui/packages/radio/src/radio"


  export default {
    components: {
      ElRadio,
      Steps
    },
    data() {
      return {
        municipality: null,
        type: null,
        form: {

        }
      }
    },
    computed: {
      ...mapGetters(['municipalities']),
      displayNextStepButton() {
        return true
        // return this.municipalities.includes({ value: this.municipality })
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
  }
</script>

<style lang="scss" scoped>

</style>
