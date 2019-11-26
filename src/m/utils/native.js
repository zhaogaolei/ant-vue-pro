/**
 * 获取原生app userAgent中追加的信息
 * 定义和zm app追加信息保持一致 【_apptype/ios _appverno/6.5 _appvercode/400 _uid/4514792】
 */
const DEVICETYPE = {
  IOS: 'ios',
  ANDROID: 'android'
}
const getZmInfo = () => {
  console.log(navigator.userAgent)
  const agent = navigator.userAgent
  const zmDeviceStr = agent.substr(agent.indexOf('_apptype'))
  const zmDeviceInfoArr = zmDeviceStr.split(' ')
  const appType = zmDeviceInfoArr[0].split('/')
  const appVerNo = zmDeviceInfoArr[1].split('/')
  const appVerCode = zmDeviceInfoArr[2].split('/')
  const uid = zmDeviceInfoArr[3].split('/')
  return {
    appType, appVerNo, appVerCode, uid
  }
}
const zmDevice = {}

zmDevice.isZmApp = /_apptype/i.test(navigator.userAgent)

zmDevice.isIos = zmDevice.isZmApp ? getZmInfo().appType[1] === DEVICETYPE.IOS : false

zmDevice.isAndroid = zmDevice.isZmApp ? getZmInfo().appType[1] === DEVICETYPE.ANDROID : false

zmDevice.appVerNo = zmDevice.isZmApp ? getZmInfo().appVerNo[1] : ''

zmDevice.appVerCode = zmDevice.isZmApp ? getZmInfo().appVerCode[1] : ''

zmDevice.currentUserId = zmDevice.isZmApp ? getZmInfo().uid[1] : ''

/**
 * ios android 交互
 */
zmDevice.postMessageToApp = (method, param, cbSuccess, cbFail) => {
  if (zmDevice.isIos) {
    const data = {
      method: method,
      param: param,
      success: cbSuccess,
      fail: cbFail
    }
    window.webkit.messageHandlers.whotel.postMessage(data)
  }
  if (zmDevice.isAndroid) {
    window.whotel[method](param, cbSuccess, cbFail)
  }
}

export default zmDevice
