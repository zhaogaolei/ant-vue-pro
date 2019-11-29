import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../core/lazy_use'
import './utils/nativeMethod'
import './permission' // permission control
import '../assets/m/common.less'
// 引入字体
import '../assets/iconfont/iconfont.css'
import '../utils/setRem'
import gourl from './utils/gourl'

Vue.config.productionTip = false
Vue.prototype.$gourl = gourl
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
