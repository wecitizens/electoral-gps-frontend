<template lang="pug">
div
  el-main
    steps(active=1)
    .text-center
        h1.mt-10 {{ $t("app.title") }}
        transition-group(name="slide" tag="div" class="questions-slider")
          div(v-for="(question, idx) in questions.list.data.questions" :key="idx"  v-if="question.key === currentQuestionKey")
            .question.mt-5
              Question(:question="question" :answerFormat="getAnswerFormat(question.answer_format)")
</template>

<script>

import Question from '@/components/survey/question'
import { mapGetters, mapActions } from 'vuex'
import Steps from '@/components/steps'

export default {
  components: {
    Question,
    Steps
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
