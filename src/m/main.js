import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../core/lazy_use'

import './permission' // permission control
// 引入字体
import '../assets/iconfont/iconfont.css'

import '../utils/setRem'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
