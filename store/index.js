import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import profile from './profile'
import questions from './questions'

Vue.use(Vuex)

const plugins = ['development', 'staging'].includes(process.env.NODE_ENV) ? [createLogger()] : []

export default () => {
  return new Vuex.Store({
    // Prevents components to directly mutate Vuex store state.
    // Turn off in production to avoid performance cost due to deep watch on the state tree
    strict: ['development', 'staging'].includes(process.env.NODE_ENV),
    plugins,
    modules: {
      profile,
      questions
    }
  })
}
