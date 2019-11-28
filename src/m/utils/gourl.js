/**
 * app打开新页面跳转
 * m站自己路由跳转
 */
import zmDevice from './native'
import constants from '../constants'
import qs from 'qs'
const { nativeApi } = constants
const blackList = ['productadd'] // 关闭返回手势黑名单
/**
 * @param {*} toUrl 跳转地址
 * @param {*} router 当前路由
 * @param {*} queryData 查询参数，默认为空
 */
const gourl = (toUrl, router, queryData = {}) => {
  // 转为qs
  const queryString = qs.stringify(queryData)
  const host = window.location.href.split('#')[0]
  if (zmDevice.isZmApp) {
    console.log('app内部', toUrl, queryString)
    // _newpage=1  app打开新页面
    let params = queryString !== '' ? `?${queryString}&_newpage=1` : '?_newpage=1'
    // 添加商品/编辑商品页面关闭返回手势
    // _noslide=1的时候关闭页面返回手势   _noslide=0的时候，以及没有该参数的时候，不做任何处理
    if (blackList.includes(toUrl)) {
      params = params + '&_noslide=1'
    }
    const redirectUrl = `${host}#/${toUrl + params}`
    // 为了兼容android location.href 不能打开新页面的问题
    if (zmDevice.isAndroid) {
      window.whotel[nativeApi.openWindow](redirectUrl, '', '')
    }
    if (zmDevice.isIos) {
      location.href = redirectUrl
    }
  } else {
    console.log('m站自己路由跳转')
    router.push({ path: `${toUrl}?${queryString}` })
  }
}

export default gourl
