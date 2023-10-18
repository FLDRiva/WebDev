import Vue from 'vue'
import Vuex from 'vuex'
import information from './modules/user'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    information
  }
})