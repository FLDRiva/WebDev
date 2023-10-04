import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import './assets/style/main.scss'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
