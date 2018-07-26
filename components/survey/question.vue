<template lang="pug">
div
  h3 {{ $t("gps.survey." + question.text,{defaultValue:""}) }}
  el-radio-group.hidden-xs-only(v-model="agreement")
    el-radio-button(v-bind:label="$t('gps.survey.answer_format.item.strongly_agree')")
    el-radio-button(v-bind:label="$t('gps.survey.answer_format.item.agree')")
    el-radio-button(v-bind:label="$t('gps.survey.answer_format.item.no_opinion')")
    el-radio-button(v-bind:label="$t('gps.survey.answer_format.item.disagree')")
    el-radio-button(v-bind:label="$t('gps.survey.answer_format.item.strongly_disagree')")

  el-radio-group.hidden-sm-and-up(v-model="agreement")
    el-row
      el-col(:xs="24")
        el-radio-button.el-radio-button--custom(v-bind:label="$t('gps.survey.answer_format.item.strongly_agree')")
    el-row
      el-col(:xs="24")
        el-radio-button.el-radio-button--custom(v-bind:label="$t('gps.survey.answer_format.item.agree')")
    el-row
      el-col(:xs="24")
        el-radio-button.el-radio-button--custom(v-bind:label="$t('gps.survey.answer_format.item.no_opinion')")
    el-row
      el-col(:xs="24")
        el-radio-button.el-radio-button--custom(v-bind:label="$t('gps.survey.answer_format.item.disagree')")
    el-row
      el-col(:xs="24")
        el-radio-button.el-radio-button--custom(v-bind:label="$t('gps.survey.answer_format.item.strongly_disagree')")
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: [
    'question'
  ],
  data () {
    return {
      agreement: null
    }
  },
  watch: {
    agreement: function (agreement) {
      setTimeout(() => {
        this.setQuestionAgreement({ questionId: this.question.id, agreement })
      }, 1000)
    }
  },
  methods: {
    ...mapActions(['setQuestionAgreement', 'setQuestionImportance'])
  }
}
</script>

<style lang="scss">
@import '@/assets/style/main.scss';

.el-radio-button--custom {
  margin: 10px 0 10px 0;

  .el-radio-button__inner {
    width: 250px !important;
  }

  &.is-active {
    .el-radio-button__inner {
      animation: blink-animation 0.4s steps(5, start) 2;
      -webkit-animation: blink-animation 0.4s steps(5, start) 2;
    }
  }
}

@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
@-webkit-keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
</style>
