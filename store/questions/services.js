import API from '../_common/services/api'

export const questionsService = {
  getQuestions (data) {
    // https://olivier5741.github.io/wecitizens_api_doc/api/work_in_progress/questions.json
    return API.get('http://localhost:3001/api/gps/survey/2018_be_municipal_wallonia_rural.json').then((request) => {
      // BUG very nasty hack use plugin instead
      let i18n = window.$nuxt.$i18n

      i18n.mergeLocaleMessage('en', { gps: { survey: request.data.i18n.en } })
      i18n.mergeLocaleMessage('fr', { gps: { survey: request.data.i18n.fr } })
      i18n.mergeLocaleMessage('nl', { gps: { survey: request.data.i18n.nl } })

      let e = request.data
      request.data = {}
      request.data.data = e

      request.data.success = true

      return request
    })
  }
}
