import Vue from 'vue'
import './cube-ui'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './api'
import md5 from 'js-md5'
import './assets/css/icon.css'

// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'

// Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

Vue.prototype.$md5 = md5

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
