<template>
  <div>
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item icon="hotel-o" to="/m/product" url="http://www.baidu.com">商品</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/m/supply">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  name: 'TabLayoutView',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style scoped>

</style>
