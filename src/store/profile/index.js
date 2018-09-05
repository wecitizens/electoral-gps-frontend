import municipalities from './municipalities.json'

export const SET_ZIP_CODE = 'SET_ZIP_CODE'

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
