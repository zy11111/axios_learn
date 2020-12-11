import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import Http from './service/api'
Vue.prototype.$Http = Http;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
