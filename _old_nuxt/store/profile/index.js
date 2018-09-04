import { SET_ZIP_CODE } from './constants'
import municipalities from './municipalities.json'

export default {
  state: {
    zipCode: null,
    municipalities: municipalities
  },
  getters: {
    municipalities: state => state.municipalities
  },
  mutations: {
    [SET_ZIP_CODE] (state, mutation) {
      state.zipCode = mutation.zipCode
    }
  },
  actions: {
    setZipCode ({ commit }, data) {
      const municipality = data.municipality
      const zipCode = municipality.substr(0, 4)
      commit(SET_ZIP_CODE, { zipCode })
    }
  }
}
