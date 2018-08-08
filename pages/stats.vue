<template>
    <div>
        <steps :active="3"></steps>
        <h1 class="text-center">Ces dernières questions restent anonymes et nous permettent d’améliorer notre
            service</h1>
        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="Activity type">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="-35 ans" name="type"></el-checkbox>
                    <el-checkbox label="35 à 55" name="type"></el-checkbox>
                    <el-checkbox label="+ 55 ans" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item>
                <router-link tag="el-button" v-bind:to="localePath('results')" type="primary" @click="onSubmit">Voir les résultats</router-link>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

import Steps from '@/components/steps'

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
