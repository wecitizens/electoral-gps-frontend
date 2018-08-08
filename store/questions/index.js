import mutationsCreator from '../_helpers/mutationsCreator'
import {GET_QUESTIONS, SET_CURRENT_QUESTION, SET_QUESTION_AGREEMENT, SET_QUESTION_IMPORTANCE} from './constants'
import {questionsService} from './services'
import promiseActionCreator from '../_helpers/promiseActionCreator'

export default {
  state: {
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
  getters: {
    questions: state => state,
    questionsLoading: state => state.list.loading,
    currentQuestionKey: state => state.current === undefined ? null : state.current.key
  },
  mutations: {
    ...mutationsCreator(GET_QUESTIONS),
    [SET_CURRENT_QUESTION] (state, mutation) {
      state.current = mutation.question
    },
    [SET_QUESTION_AGREEMENT] (state, mutation) {
      const questionKey = mutation.questionKey
      state.list.data.questions.filter(q => q.key === questionKey)[0].agreement = mutation.agreement
    },
    [SET_QUESTION_IMPORTANCE] (state, mutation) {
      const questionKey = mutation.questionKey
      state.list.data.questions.filter(q => q.key === questionKey)[0].importance = mutation.importance
    }
  },
  actions: {
    async getQuestions (store) {
      await promiseActionCreator(store, questionsService.getQuestions({}), GET_QUESTIONS)
      const questions = store.state.list.data.questions
      const currentQuestion = questions[0]
      // BUG cannot start on another question than first one, app bugs on refresh
      // .filter(q => q.key === order[0])
      store.commit(SET_CURRENT_QUESTION, {question: currentQuestion})
    },
    setQuestionAgreement ({commit, state}, data) {
      commit(SET_QUESTION_AGREEMENT, data)

      const questionKey = data.questionKey
      const order = state.list.data.question_order
      const previousIndex = order.indexOf(questionKey)

      const currentQuestion = state.list.data.questions.find(q => q.key === order[previousIndex + 1])

      commit(SET_CURRENT_QUESTION, {question: currentQuestion})
    },
    setQuestionImportance ({commit}, data) {
      commit(SET_QUESTION_IMPORTANCE, data)
    }
  }
}
