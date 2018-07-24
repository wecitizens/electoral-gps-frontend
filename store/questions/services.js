import API from '../_common/services/api'

export const questionsService = {
  getQuestions (data) {
    return API.get('http://wecitizens.s3-website.eu-central-1.amazonaws.com/questions.json')
  }
}
