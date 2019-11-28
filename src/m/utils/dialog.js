/**
 * 基于vant dialog封装
 */

import Vue from 'vue'
import { Dialog } from 'vant'
import zmDevice from '../utils/native'
Vue.use(Dialog)

/**
 * 确认框
 * @param {*} title
 * @param {*} message
 * @param {*} confirmBtnText
 * @param {*} cancelBtnText
 * @param {*} callback
 */
const DialogConfirm = (title, message, confirmBtnText = '确认', cancelBtnText = '取消', callback) => Dialog.confirm({
  title: title,
  confirmButtonText: confirmBtnText,
  cancelButtonText: cancelBtnText,
  message: message
}).then(() => {
  // on confirm
  callback()
}).catch(() => {
  // on cancel
})

/**
 * 提示框
 * @param {*} title
 * @param {*} message
 * @param {*} confirmBtnText
 * @param {*} isShowTitle
 */
const DialogAlert = (title, message, confirmBtnText = '确认', isShowTitle = true) => Dialog.alert({
  title: isShowTitle ? title : '',
  message: message,
  confirmButtonText: confirmBtnText
}).then(() => {
  // on close
})

/**
 * native app 确认弹框
 * @param {*} method  native api  ../constants 中统一配置
 * @param {*} title   弹框标题
 * @param {*} message 弹框信息
 * @param {*} onfirmBtnText  确认按钮名称 默认 确认
 * @param {*} cancelBtnText  取消按钮名称 默认 取消
 */
const DialogNativeAppConfirm = (method, title = '提示', message, onfirmBtnText = '确认', cancelBtnText = '取消') => {
  const param = {
    title: title,
    message: message,
    confirm: onfirmBtnText,
    cancel: cancelBtnText
  }
  if (zmDevice.isIos) {
    const data = {
      method: method,
      param: param,
      success: '',
      fail: ''
    }
    window.webkit.messageHandlers.whotel.postMessage(data)
  }
  if (zmDevice.isAndroid) {
    window.whotel[method](param, '', '')
  }
}

export { DialogConfirm, DialogAlert, DialogNativeAppConfirm }
