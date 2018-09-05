import Vue from 'vue'
import axios from 'axios'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SET_QUESTIONS = 'SET_QUESTIONS'
export const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION'
export const SET_QUESTION_AGREEMENT = 'SET_QUESTION_AGREEMENT'
export const SET_QUESTION_IMPORTANCE = 'SET_QUESTION_IMPORTANCE'

export default {
  getters: {
    questions: (state) => {
      console.log('Ici dans le getter filtrer par la lanque user')
      return state.questions
    }
  },
  state: {
    questions: []
  },
  mutations: {
    setAnswer () {
      console.log('todo')
    },
    [SET_QUESTIONS] (state, data) {
      let i18n = Vue.i18n
      i18n.add('en', { gps: { survey: data.i18n.en } })
      i18n.add('fr', { gps: { survey: data.i18n.fr } })
      i18n.add('nl', { gps: { survey: data.i18n.nl } })
      state.questions = data
    }
  },
  actions: {
    getQuestions ({commit, state}, data) {
      axios.get('/api/gps/survey/2018_be_municipal_wallonia_rural.json', data).then((res) => {
        commit(SET_QUESTIONS, res.data)
      })
    },
    setQuestionAgreement ({commit, state}, data) {
      console.log('TODO')
    },
    setQuestionImportance ({commit}, data) {
      console.log('TODO')
    }
  }
}
