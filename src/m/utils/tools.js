const formatDate = (date) => {
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  return `${y}年${m < 10 ? `0${m}` : m}月${d < 10 ? `0${d}` : d}日`
}

export { formatDate }
