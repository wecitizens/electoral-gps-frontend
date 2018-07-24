<template lang="pug">
div
  el-main
    h1 Quel est votre code postal ?
    p Ceci nous aidera à personnaliser votre questionnaire
    br
    el-row
      el-autocomplete(
        class="inline-input"
        v-model="municipality"
        :fetch-suggestions="querySearch"
        placeholder="Votre code postal"
        @select="setZipCode({ municipality })"
      )
    br
    el-row
      router-link(
        to="/survey"
        tag="el-button"
      ) C'est parti
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      municipality: null
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
div {
  text-align: center;
}
</style>
