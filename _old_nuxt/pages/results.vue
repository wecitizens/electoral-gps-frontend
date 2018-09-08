<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane v-bind:label="$t('title.candidates')" name="first">
                <h2>{{ $t("results.candatidates_sharing_my_position_the_most") }}</h2>
                [A DEFINIR]
            </el-tab-pane>
            <el-tab-pane v-bind:label="$t('title.parties')" name="second">
                [A DEFINIR]
            </el-tab-pane>
        </el-tabs>
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
