<template lang="pug">
div
  h3 {{ question.text }}
  p {{ question.notice }}
  el-radio-group.hidden-xs-only(v-model="agreement")
    el-radio-button(label="Strongly agree")
    el-radio-button(label="Agree")
    el-radio-button(label="No opinion")
    el-radio-button(label="Disagree")
    el-radio-button(label="Strongly disagree")

  el-radio-group.hidden-sm-and-up(v-model="agreement")
    el-row
      el-col(:xs="24")
        el-radio-button.el-radio-button--custom(label="Strongly agree")
    el-row
      el-col(:xs="24")
        el-radio-button.el-radio-button--custom(label="Agree")
    el-row
      el-col(:xs="24")
        el-radio-button.el-radio-button--custom(label="No opinion")
    el-row
      el-col(:xs="24")
        el-radio-button.el-radio-button--custom(label="Disagree")
    el-row
      el-col(:xs="24")
        el-radio-button.el-radio-button--custom(label="Strongly disagree")
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
