import Vue from 'vue'
import Vuex from 'vuex'
import questions from './questions'
import profile from './profile'
import survey from './gps/survey'
import match from './gps/match'
import vote from './vote'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    questions,
    profile,
    survey,
    vote,
    match  
  }
})
