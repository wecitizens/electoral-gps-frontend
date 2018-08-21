<template lang="pug">
div
  h3 {{ $t("gps.survey." + question.text,{defaultValue:""}) }}
  div.mt-3
    el-slider.importance.mt-5.mb-5(v-model="importance" :step="1" :min=1 :max=5 show-stops :format-tooltip="showStepLabel" show-tooltip)
    a.btn() {{ $t('+ more infos') }}
  el-radio-group.mt-5.hidden-xs-only(v-model="agreement")
    el-radio-button(
      v-for="(item, idx) in answerFormat.items"
      :key="idx"
      v-bind:label="$t('gps.survey.' + item.name)")
  el-radio-group.hidden-sm-and-up(v-model="agreement")
    el-row(
      v-for="item in answerFormat.items"
      :key="item.id"
      )
      el-col(:xs="24")
        el-radio-button.el-radio-button--custom(v-bind:label="$t('gps.survey.' + item.name)")
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: [
    'question',
    'answerFormat'
  ],
  data () {
    return {
      agreement: null,
      importance: 3
    }
  },
  watch: {
    agreement: function (agreement) {
      setTimeout(() => {
        this.setQuestionAgreement({ questionKey: this.question.key, agreement })
      }, 1000)
    },
    importance: function (importance) {
      setTimeout(() => {
        this.setQuestionImportance({ questionKey: this.question.key, importance })
      }, 1000)
    }
  },
  methods: {
    ...mapActions(['setQuestionAgreement', 'setQuestionImportance']),
    showStepLabel: (index) => {
      const key = 'importance.' + index
      return key
    }
  }
}
</script>

<style lang="scss">

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

.importance{
  width: 500px;
  text-align: center;
  margin: auto;
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
