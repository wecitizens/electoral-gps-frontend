import axios from 'axios'
const ServerUrl = process.env.VUE_APP_BACKEND_ENDPOINT

function handleError (response) {
  if (response.statusText !== 'OK') throw new Error(response.statusText)
  return response
}

class API {
  static init () {
    this.headers = []
    this.init = {
      cache: 'default',
      headers: this.headers
    }
  }

  static setToken (token) {
    return this.init.headers.append('Authorization', `Bearer ${token}`)
  }

  static get (endPoint, params = {}) {
    const init = {...this.init, method: 'GET', ...params}
    return axios.get(endPoint, init)
  }

  static post (endPoint, data = {}) {
    const headers = {
      'Content-type': 'application/json'
    }
    const init = {url: endPoint, method: 'post', headers, data}

    return axios(init)
  }

  static put (endPoint, body = {}) {
    const init = {...this.init, method: 'PUT', body: JSON.stringify(body)}

    return fetch(`${ServerUrl}${endPoint}`, init)
      .then(response => handleError(response))
      .then(response => response.json())
  }
}

API.init()

export default API
