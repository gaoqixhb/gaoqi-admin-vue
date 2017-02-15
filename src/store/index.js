/**
 * store index
 * @authors yanjixiong 
 * @date    2017-02-15 20:48:19
 */

import Vue from 'vue'
import Vuex from 'vuex'

import home from './Home'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home,
  }
})

export default store