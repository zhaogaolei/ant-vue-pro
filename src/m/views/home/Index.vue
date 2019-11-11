<template>
  <div>
    <h2>移动首页</h2>

    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="hotel-o" to="/mobile/product" url="http://www.baidu.com">商品</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/mobile/supply">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'MobileProduct',
  data () {
    return {
      active: 0
    }
  },
  mounted () {

  }
}
</script>

<style scoped>

</style>
