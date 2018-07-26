<template lang="pug">
div
  el-main
    h1 {{ $t("district.what_is_your_postcode") }}
    p {{ $t("district.help_customise_survey") }}
    br
    el-row
      el-autocomplete(
        class="inline-input"
        v-model="municipality"
        :fetch-suggestions="querySearch"
        v-bind:placeholder="$t('input.place_holder.your_postcode')"
        @select="setZipCode({ municipality })"
      )
    br
    el-row
      router-link(
        v-bind:to="localePath('survey')"
        tag="el-button"
      ) {{ $t("button.lets_go") }}
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
