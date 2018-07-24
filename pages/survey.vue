<template lang="pug">
div
  el-main
    h1 Electoral GPS
    transition-group(name="slide" tag="div" class="questions-slider")
      div(v-for="(question, idx) in questions.list.data" :key="idx"  v-if="question.id === currentQuestionId")
        .question
          Question(:question="question")
</template>

<script>
import Question from '@/components/survey/question'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Question
  },
  computed: {
    ...mapGetters(['questions', 'currentQuestionId'])
  },
  methods: {
    ...mapActions(['getQuestions'])
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
