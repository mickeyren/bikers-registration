import Vue from 'vue'
import App from './App.vue'
import router from './router'
import _ from 'underscore'
import Notifications from 'vue-notification'

Vue.use(Notifications)
Vue.set(Vue.prototype, '_', _)

import styles from '../assets/css/main.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  mounted() {
  }
})