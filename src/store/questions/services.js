import API from '../_helpers/api';
import Vue from 'vue';

const questionsService = {
  getQuestions (data = {}) {

    return API.get('/api/gps/survey/2018_be_municipal_wallonia_rural.json', data).then((request) => {

      Vue.i18n.add('en', { gps: { survey: request.data.i18n.en } })
      Vue.i18n.add('fr', { gps: { survey: request.data.i18n.fr } })
      Vue.i18n.add('nl', { gps: { survey: request.data.i18n.nl } })

      let e = request.data
      request.data = {}
      request.data.data = e

      request.data.success = true

      return request
    })
  }
};

export default questionsService;