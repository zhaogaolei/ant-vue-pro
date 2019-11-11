<template>
  <div>
    <h2>移动首页</h2>

    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="hotel-o" to="/m/product" url="http://www.baidu.com">商品</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/m/supply">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mixin, mixinDevice } from '@/utils/mixin'
export default {
  name: 'Product',
  mixins: [mixin, mixinDevice],
  data () {
    return {
      active: 0
    }
  },
  mounted () {
    console.log('this.isDesktop()======', this.isDesktop())
    if (this.isDesktop()) {
      this.$router.push('/index')
    }
  }
}
</script>

<style scoped>

</style>
