<template>
  <div>
    <el-main>
      <steps :active="1"></steps>
      <div class="text-center">
        <transition-group name="slide" tag="div" class="questions-slider">
          <div v-for="(question, idx) in questions.list.data.questions" :key="idx"  v-if="question.key === currentQuestionKey">
            <div class="question mt-5">
              <Question :question="question" :answerFormat="getAnswerFormat(question.answer_format)"/>
            </div>
          </div>
        </transition-group>
      </div>
      <el-footer>
        <div class="row">
          <div class="col">
            <a v-show="questions.current.index > 1" class="btn btn-outline-primary btn-block" @click="goPrevious"><i class="fas fa-chevron-left"></i> <span class="d-none d-md-inline-block ml-2">{{ $t("button.previous_question") }} </span> </a>
          </div>
          <div class="col">
            <a v-show="questions.current.index > 1" class="btn btn-outline-primary btn-block" @click="goResults">{{ $t("button.see_results") }} </a>
          </div>
          <div class="col">
            <a v-show="questions.current.index < questions.total" class="btn btn-outline-primary btn-block" @click="goNext"><span class="d-none d-md-inline-block mr-2">{{ $t("button.next_question") }} </span> <i class="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </el-footer>
    </el-main>
  </div>
</template>

<script>
  import Question from '../components/survey/Question'
  import {mapGetters, mapActions} from 'vuex'
  import Steps from '../components/Steps'


  export default {
    components: {
      Question,
      Steps
    },
    computed: {
      ...mapGetters(['questions', 'currentQuestionKey', 'survey'])
    },
    methods: {
      ...mapActions(['getQuestions', 'previousQuestion', 'nextQuestion']),
      getAnswerFormat (answerFormatKey) {
        return this.questions.list.data.answer_formats.filter(f => f.key === answerFormatKey)[0]
      },
      goNext(){
        this.$store.dispatch('nextQuestion', {questionKey: this.currentQuestionKey});
      },
      goPrevious(){
        this.$store.dispatch('previousQuestion', {questionKey: this.currentQuestionKey});
      },
      goResults(){
        this.$router.push({path : '/results'});
      }
    },
    watch: {
      'currentQuestionKey': (value) => {
        if (!value) {
          this.$router.push({path : '/results'});
        }
      }
    },
    created () {
      this.$store.dispatch('setCurrentPoll').then(() => this.$store.dispatch('setCurrentSurvey'));  
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
