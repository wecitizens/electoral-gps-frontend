import initialState from '../_helpers/initialState'
import mutationsCreator from '../_helpers/mutationsCreator'
import { GET_SMURFS } from './constants'
import { smurfsService } from './services'
import promiseActionCreator from '../_helpers/promiseActionCreator'

export default {
  state: {
    list: {
      ...initialState
    }
  },
  getters: {
    smurfs: state => state,
    smurfsLoading: state => state.list.loading
  },
  mutations: {
    ...mutationsCreator(GET_SMURFS)
  },
  actions: {
    getSMurfs (store) {
      return promiseActionCreator(store, smurfsService.getSMurfs({}), GET_SMURFS)
    }
  }
}
