import API from '../_common/services/api'

export const smurfsService = {
  getSmurfs (data) {
    return API.get('https://smurfs.com')
  }
}
