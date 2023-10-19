import Vue from 'vue'
import Vuex from 'vuex'
import information from './modules/user'
import item from './modules/items'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    information,
    item
  }
})