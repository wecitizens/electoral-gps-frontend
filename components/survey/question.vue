<template lang="pug">
div
  h3 {{ question }}
  el-button-group
    el-button(type="primary" @click="setQuestionAgreement({ questionId: question.id, agreement: 'strongly_agree' })") Strongly agree
    el-button(type="success") Agree
    el-button(type="info") No opinion
    el-button(type="warning") Disagree
    el-button(type="danger") Strongly disagree
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: [
    'question'
  ],
  methods: {
    ...mapActions(['setQuestionAgreement', 'setQuestionImportance'])
  }
}
</script>

<style>
</style>
