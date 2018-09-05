<template>
  <div>
    <el-main>
      <steps :active="1"></steps>
      <div class="text-center">
        <transition-group name="slide" tag="div" class="questions-slider">
          <div v-for="(question, idx) in questions.questions" :key="idx"  v-if="idx == 0">
            <h3 class="question mt-5">
              <Question :question="question" :answerFormat="getAnswerFormat(question.answer_format)"/>
            </h3>
          </div>
        </transition-group>
      </div>
      <el-footer>
        <div class="row">
          <div class="col">
            <a class="btn btn-outline-primary btn-block"><i class="fas fa-chevron-left"></i>

               {{ $t("Previous") }} </a>
          </div>
          <div class="col">
            <a class="btn btn-outline-primary btn-block">{{ $t("Show my results") }} </a>
          </div>
          <div class="col">
            <a class="btn btn-outline-primary btn-block">{{ $t("Next") }} <i class="fas fa-chevron-right"></i>

            </a>
          </div>
        </div>
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
        return this.questions.answer_formats.find(f => f.key === answerFormatKey)
      }
    },

    created () {
      this.getQuestions();
      let $ = window.jQuery;
      $("html, body").animate({ scrollTop: $(document).height() }, 1000);
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
