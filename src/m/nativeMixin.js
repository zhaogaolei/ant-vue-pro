/**
 * 针对嵌入app，在页面之前执行
 * 是否登录判断，无登录调用app api弹起登录
 */
import zmDevice from './utils/native'
import constants from './constants'
const { nativeApi } = constants
const mixin = {
  beforeCreate () {},
  created () {
    if (zmDevice.isZmApp) {
      if (window.localStorage.getItem('TOKEN')) {
      } else {
        zmDevice.postMessageToApp(nativeApi.openFullWindow, 'http://192.168.1.172:8000/m/#/login', '', '')
      }
    }
  },
  watch: {},
  mounted () {},
  methods: {
    openLogin () {
      zmDevice.postMessageToApp(nativeApi.openFullWindow, 'http://192.168.1.172:8000/m/#/login', '', '')
    }
  }
}

export default mixin
