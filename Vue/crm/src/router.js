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
    {
      path: '/signup',
      component: () => import('../src/views/SignUp')
    },
    {
      path: '/reset',
      component: () => import('../src/views/ResetPage')
    },
    {
      path: '/profile',
      component: () => import('../src/views/UsersProfile')
    },
    {
      path: '/item',
      component: () => import('../src/views/ProductList')
    },

  ]
}) 