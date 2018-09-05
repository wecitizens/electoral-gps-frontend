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
      return state.questions
    },
    questionsLoading: state => state.list.loading,
    currentQuestionKey: state => state.current === undefined ? null : state.current.key
  },
  state: {
    questions: [],
    list: {
      data: {
        question_order: [],
        questions: [
          {
            key: null,
            text: null,
            notice: null
          }
        ],
        answer_formats: [
          {
            items: [
              {
                key: null,
                name: null
              }
            ]
          }
        ]
      },
      actions: {},
      loading: false,
      success: false,
      error: ''
    },
    current: {
      key: null,
      text: null,
      notice: null
    }
  },
  mutations: {
    [SET_QUESTIONS] (state, data) {
      let i18n = Vue.i18n
      i18n.add('en', { gps: { survey: data.i18n.en } })
      i18n.add('fr', { gps: { survey: data.i18n.fr } })
      i18n.add('nl', { gps: { survey: data.i18n.nl } })
      state.questions = data
    },
    [SET_CURRENT_QUESTION] (state, mutation) {
      state.current = mutation.question
    },
    [SET_QUESTION_AGREEMENT] (state, mutation) {
      const questionKey = mutation.questionKey
      state.questions.questions.filter(q => q.key === questionKey)[0].agreement = mutation.agreement
    },
    [SET_QUESTION_IMPORTANCE] (state, mutation) {
      const questionKey = mutation.questionKey
      state.questions.questions.filter(q => q.key === questionKey)[0].importance = mutation.importance
    }
  },
  actions: {
    getQuestions({commit}, data) {
      axios.get('/api/gps/survey/2018_be_municipal_wallonia_rural.json', data).then((res) => {
        const questions = res.data;
        const currentQuestion = res.data.questions[0]

        commit(SET_CURRENT_QUESTION, {question: currentQuestion})
        commit(SET_CURRENT_QUESTION, {question: currentQuestion})
        commit(SET_QUESTIONS, questions)
      })
    },
    setQuestionAgreement({commit, state}, data) {
      commit(SET_QUESTION_AGREEMENT, data)

      const questionKey = data.questionKey
      const order = state.list.data.question_order
      const previousIndex = order.indexOf(questionKey)

      const currentQuestion = state.list.data.questions.find(q => q.key === order[previousIndex + 1]);

      commit(SET_CURRENT_QUESTION, {question: currentQuestion})
    },
    setQuestionImportance({commit}, data) {
      commit(SET_QUESTION_IMPORTANCE, data)
    }
  }
}
