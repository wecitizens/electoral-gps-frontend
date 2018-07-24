<template lang="pug">
div
  el-steps(:active="1" align-center)
    el-step(title="Your district")
    el-step(title="Your opinions")
    el-step(title="Your results")
    el-step(title="Suggestions")
  h1 Electoral GPS
  br
  transition-group(name="slide" tag="div" class="questions-slider")
    div(v-for="question in questions.list.data" :key="question.id"  v-if="question.id === currentQuestionId")
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
    ...mapActions(['getQuestions', 'setCurrentQuestion'])
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
  height: 200px;
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
