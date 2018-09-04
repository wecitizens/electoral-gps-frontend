import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

/* eslint-disable */

Vue.use(Vuex);

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION';
export const SET_QUESTION_AGREEMENT = 'SET_QUESTION_AGREEMENT';
export const SET_QUESTION_IMPORTANCE = 'SET_QUESTION_IMPORTANCE';


export default new Vuex.Store({
  getters: {
    questions: state => state
  },
  state: {
    questions: []
  },
  mutations: {
    setAnswer() {
      console.log('todo');
    },
    setQuestions(state, data){
      state.questions = data;
    }
  },
  actions: {
    getQuestions({commit, state},data) {
      axios.get('/api/gps/survey/2018_be_municipal_wallonia_rural.json', data).then((res) => {
        console.log('res', res);

        let i18n = Vue.i18n;

        i18n.add('en', { gps: { survey: res.data.i18n.en } })
        i18n.add('fr', { gps: { survey: res.data.i18n.fr } })
        i18n.add('nl', { gps: { survey: res.data.i18n.nl } })

        commit('setQuestions', res.data);
      });
    },
    setQuestionAgreement({commit, state}, data) {
      console.log('TODO');
    },
    setQuestionImportance({commit}, data) {
      console.log('TODO');
    }
  }
})
