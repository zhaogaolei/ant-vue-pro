/**
 * app打开新页面跳转
 * m站自己路由跳转
 */

import zmDevice from './native'

const gourl = (toUrl, router) => {
  console.log(zmDevice, router, window.location)
  if (zmDevice.isZmApp) {
    console.log(toUrl)

    location.href = 'http://192.168.1.172:8000/m/#/' + toUrl + '?_newpage=1' // _newpage=1  app打开新页面
  } else {
    console.log('M站', toUrl)

    router.push({ path: toUrl })
  }
}

export default gourl
