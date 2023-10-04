import Vue from 'vue'
import Router from 'vue-router'
import OnePage from '../src/views/OnePage'
import LoadingPage from '../src/views/LoadingPage'

Vue.use(Router) 

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: OnePage
    },
    {
      path: '/login',
      component: LoadingPage
    },
  ]
}) 