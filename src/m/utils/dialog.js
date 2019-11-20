/**
 * 基于vant dialog封装
 */

import Vue from 'vue'
import { Dialog } from 'vant'
Vue.use(Dialog)
// 确认框
const DialogConfirm = (title, message, confirmBtnText, cancelBtnText, callback) => Dialog.confirm({
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
// 可以配置是否带标题
const DialogAlert = (title, message, confirmBtnText, isShowTitle = true) => Dialog.alert({
  title: isShowTitle ? title : '',
  message: message,
  confirmButtonText: confirmBtnText
}).then(() => {
  // on close
})

export { DialogConfirm, DialogAlert }
