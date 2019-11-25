/**
 * 基于vant toast封装
 */
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast)

Toast.setDefaultOptions('loading', { forbidClick: true })

const toast = {}

// 加载中
toast.loading = (msg) => Toast.loading({
  message: msg,
  loadingType: 'circular', // 可选值spinner
  duration: 0 // 需要手动关闭
})
// 成功
toast.success = (msg, duration = 3000) => {
  Toast({
    type: 'success',
    message: msg,
    icon: 'passed',
    duration: duration
  })
}
// 失败
toast.fail = (msg, duration = 3000) => {
  Toast({
    message: msg,
    icon: 'warning-o',
    duration: duration
  })
}
// 轻提示
toast.info = (msg, duration = 3000) => {
  Toast({
    message: msg,
    position: 'middle', // top bottom
    duration: duration
  })
}

// 关闭
toast.hide = () => {
  console.log(1)
  Toast.clear()
}

export default toast
