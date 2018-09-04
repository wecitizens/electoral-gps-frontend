import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    questions: state => state
  },
  state: {
    questions : []
  },
  mutations: {
    setAnswer(){
      console.log('todo');
    }
  },
  actions: {
    getQuestions (data) {
      axios.get('https://wecitizens.github.io/wecitizens_api_doc/api/gps/survey/2018_be_municipal_wallonia_rural.json', data).then((res) => {
        console.log(res);
      });
    },
    setQuestionAgreement ({commit, state}, data) {
      console.log('TODO');
    },
    setQuestionImportance ({commit}, data) {
      console.log('TODO');
    }
  }
})
