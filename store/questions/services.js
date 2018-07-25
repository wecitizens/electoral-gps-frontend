import API from '../_common/services/api'

export const questionsService = {
  getQuestions (data) {
    return API.get('https://olivier5741.github.io/wecitizens_api_doc/api/work_in_progress/questions-without-i18n.json')
  }
}
