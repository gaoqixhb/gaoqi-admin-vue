/**
 * auth
 * @authors yanjixiong 
 * @date    2017-02-15 22:02:26
 */

import { findUserByToken } from './store/api'

export default {
  login (acceccToken) {
    return findUserByToken(acceccToken)
      .then(function(res) {
        if (res.data && res.data[0]) {
          localStorage.token = res.data[0].accessToken
          return Promise.resolve(true);
        }
        return Promise.resolve(false);
      })
      .catch((err) => {
        return Promise.resolve(false);
      });
    
  },

  getToken () {
    return localStorage.token
  },

  logout () {
    delete localStorage.token
    this.onChange(false)
  },

  loggedIn () {
    return !!localStorage.token
  },

  onChange () {}
}