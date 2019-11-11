<template>
  <div id="app">
    <div>
      <a href="/index">跳转PC页面</a>
    </div>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="hotel-o" to="/mobile/product" url="http://www.baidu.com">商品</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/mobile/supply">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  data () {
    return {
      locale: 'zhCN'
    }
  },
  mounted () {
    console.log('移动端页面======================')
  }
}
</script>
<style>

  #app {

    height: 100%;
  }
</style>
