<template>
  <div>
    <el-main>
      <steps :active="2"/>
        <div class="text-center">
          <transition-group name="slide" tag="div" class="questions-slider">
            <div v-for="(question, idx) in questions.list.data.questions" :key="idx"  v-if="question.key === currentQuestionKey">
              <h3 class="question mt-5">
                <Question :question="question" :answerFormat="getAnswerFormat(question.answer_format)"/>
              </h3>
            </div>
          </transition-group>
        </div>
      <el-footer>
        <el-button-group>
          <el-button type="primary" icon="el-icon-arrow-left">Previous</el-button>
          <el-button type="primary">
            Next
            <i class="el-icon-arrow-right el-icon-right"></i>
          </el-button>
        </el-button-group>
      </el-footer>
    </el-main>
  </div>
</template>

<script>

import Question from '@/components/survey/Question'
import {mapGetters, mapActions} from 'vuex'
import Steps from '@/components/Steps'

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
  watch: {
    'currentQuestionKey': (value) => {
      console.log('route', this.$router)

      // BUG : could not get this.$router to work ...
      if (!value) { window.$nuxt.$router.push({ path: '/stats' }) }
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
        min-height: 80vh;
        width: 100%;
    }

    .questions-slider .question {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
</style>
