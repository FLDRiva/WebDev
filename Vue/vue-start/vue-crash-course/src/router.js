import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import Todos from './views/Todos.vue'


export default createRouter({
    history: createWebHashHistory(),
    routes: [
    {
      name: 'Home',
      path: '/home',
      component: Home,
    },
    {
      name: 'Todos',
      path: '/todos',
      // lazy импорт страницы с помощью callback функции () => import('./views/Todos.vue')
      component: Todos
    }
  ]
})


