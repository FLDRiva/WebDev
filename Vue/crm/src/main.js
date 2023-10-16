import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import './assets/style/main.scss'
import Vuetify from 'vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/dist/vuetify.min.css'


Vue.use(Vuetify)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
