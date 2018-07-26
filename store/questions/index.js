import mutationsCreator from '../_helpers/mutationsCreator'
import {GET_QUESTIONS, SET_CURRENT_QUESTION, SET_QUESTION_AGREEMENT, SET_QUESTION_IMPORTANCE} from './constants'
import {questionsService} from './services'
import promiseActionCreator from '../_helpers/promiseActionCreator'

export default {
  state: {
    list: {
      data: {
        questions: [
          {
            id: null,
            text: null,
            notice: null
          }
        ]
      },
      actions: {},
      loading: false,
      success: false,
      error: ''
    },
    current: {
      id: null,
      text: null,
      notice: null
    }
  },
  getters: {
    questions: state => state,
    questionsLoading: state => state.list.loading,
    currentQuestionId: state => state.current.id
  },
  mutations: {
    ...mutationsCreator(GET_QUESTIONS),
    [SET_CURRENT_QUESTION] (state, mutation) {
      state.current = mutation.question
    },
    [SET_QUESTION_AGREEMENT] (state, mutation) {
      const questionId = mutation.questionId
      state.list.data[questionId].agreement = mutation.agreement
    },
    [SET_QUESTION_IMPORTANCE] (state, mutation) {
      const questionId = mutation.questionId
      state.list.data[questionId].importance = mutation.importance
    }
  },
  actions: {
    async getQuestions (store) {
      await promiseActionCreator(store, questionsService.getQuestions({}), GET_QUESTIONS)
      store.commit(SET_CURRENT_QUESTION, {question: store.state.list.data.questions[0]})
    },
    setQuestionAgreement ({commit, state}, data) {
      commit(SET_QUESTION_AGREEMENT, data)
      const questionId = data.questionId
      commit(SET_CURRENT_QUESTION, {question: state.list.data.questions[questionId + 1]})
    },
    setQuestionImportance ({commit}, data) {
      commit(SET_QUESTION_IMPORTANCE, data)
    }
  }
}
