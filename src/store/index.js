import Vue from 'vue'
import Vuex from 'vuex'
import questions from './questions'
import profile from './profile'
import survey from './gps/survey'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    questions,
    profile,
    survey  
  }
})
