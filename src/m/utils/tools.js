/**
 * 格式化日期年月日
 * @param {*} date
 */
const formatDate = (date) => {
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  return `${y}年${m < 10 ? `0${m}` : m}月${d < 10 ? `0${d}` : d}日`
}
// 获取url参数
const getParams = link => {
  const obj = {}
  let name, value
  let str = link || location.href // 取得整个地址栏
  let num = str.indexOf('?')
  str = str.substr(num + 1) // 取得所有参数   stringvar.substr(start [, length ]
  const arr = str.split('&') // 各个参数放到数组里
  for (let i = 0; i < arr.length; i++) {
    num = arr[i].indexOf('=')
    if (num > 0) {
      name = arr[i].substring(0, num)
      value = arr[i].substr(num + 1)
      obj[name] = value
    }
  }
  return obj
}
export { formatDate, getParams }
