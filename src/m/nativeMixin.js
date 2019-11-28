/**
 * 针对嵌入app，在页面之前执行
 * 是否登录判断，无登录调用app api弹起登录
 */
import zmDevice from './utils/native'
import constants from './constants'
const { nativeApi } = constants
const host = window.location.href.split('#')[0]
const mixin = {
  beforeCreate () {},
  created () {
    if (zmDevice.isZmApp) {
      if (window.localStorage.getItem('TOKEN')) {
      } else {
        zmDevice.postMessageToApp(nativeApi.openFullWindow, host + '#/login', '', '')
      }
    }
  },
  watch: {},
  mounted () {},
  methods: {
    openLogin () {
      zmDevice.postMessageToApp(nativeApi.openFullWindow, host + '#/login', '', '')
    }
  }
}

export default mixin
