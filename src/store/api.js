/**
 * api 
 * @authors yanjixiong 
 * @date    2017-02-15 20:58:38
 */

import axios from 'axios'
import { API_HOST, API_PREFIX } from '../config'

/**
 * get请求
 * @param  {[type]} childPath [description]
 * @return {[type]}           [description]
 */
function get(childPath) {
  const options = {};

  if (localStorage.token) {
    options.headers = {
      'x-access-token': localStorage.token,
    }
  }

  return axios.get(`${API_HOST}${API_PREFIX}${childPath}`, options)
    .then((res) => {
      return res;
    })
}

/**
 * post 请求
 * @param  {[type]} childPath [description]
 * @param  {[type]} params    [description]
 * @return {[type]}           [description]
 */
function post(childPath, params) {
  const options = { data: params };

  if (localStorage.token) {
    options.headers = {
      'x-access-token': localStorage.token,
    }
  }

  return axios
    .post(`${API_HOST}${API_PREFIX}${childPath}`, options)
    .then((res) => {
      return res;
    })
}

/**
 * 通过token
 * @param  {[type]} accessToken [description]
 * @return {[type]}             [description]
 */
export function findUserByToken(accessToken) {
  return axios.get(`${API_HOST}${API_PREFIX}/user?conditions={"accessToken":"${accessToken}"}`, { headers: { 'x-access-token': accessToken } })
    .then((res) => {
      return Promise.resolve(res);
    });
}

