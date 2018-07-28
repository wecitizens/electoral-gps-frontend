<template lang="pug">
div
  el-main
    button(v-for="locale in $i18n.locales" v-on:click="$i18n.locale = locale.code") {{ locale.name }}
    h1 {{ $t("app.title") }}
    transition-group(name="slide" tag="div" class="questions-slider")
      div(v-for="(question, idx) in questions.list.data.questions" :key="idx"  v-if="question.key === currentQuestionKey")
        .question
          Question(:question="question" :answerFormat="getAnswerFormat(question.answer_format)")
</template>

<script>

import Question from '@/components/survey/question'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Question
  },
  computed: {
    ...mapGetters(['questions', 'currentQuestionKey'])
  },
  methods: {
    ...mapActions(['getQuestions']),
    getAnswerFormat (answerFormatKey) {
      // Bug should get this from the store but from data directly ...
      return this.$store.state.questions.list.data.answer_formats.filter(f => f.key === answerFormatKey)[0]
    }
  },
  created () {
    this.getQuestions()
  }
}
</script>

<style lang="scss" scoped>
div {
  text-align: center;
}
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}

.questions-slider {
  overflow: hidden;
  position: relative;
  min-height: 800px;
  width: 100%;
}

.questions-slider .question {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right:0;
}
</style>
