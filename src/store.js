import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION'
export const SET_QUESTION_AGREEMENT = 'SET_QUESTION_AGREEMENT'
export const SET_QUESTION_IMPORTANCE = 'SET_QUESTION_IMPORTANCE'

export default new Vuex.Store({
  getters: {
    survey: state => state.survey,
    questions: state => state.questions
  },
  state: {
    survey: {},
    questions: []
  },
  mutations: {
    setAnswer () {
      console.log('todo')
    },
    [GET_QUESTIONS] (state, survey) {
      let i18n = Vue.i18n
      i18n.add('en', { survey: survey.i18n.en })
      i18n.add('fr', { survey: survey.i18n.fr })
      i18n.add('nl', { survey: survey.i18n.nl })
      state.survey = survey
    }
  },
  actions: {
    getQuestions ({commit, state}, data) {
      axios.get('https://wecitizens.github.io/wecitizens_api_doc/api/gps/survey/2018_be_municipal_wallonia_rural.json', data).then((res) => {
        commit(GET_QUESTIONS, res.data)
      })
    },
    setQuestionAgreement ({commit, state}, data) {
      console.log('TODO')
    },
    setQuestionImportance ({commit}, data) {
      console.log('TODO')
    }
  }
})
