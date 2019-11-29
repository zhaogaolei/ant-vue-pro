<template>
  <div class="home">
    <van-grid :gutter="24" :column-num="1" :clickable="true">
      <van-grid-item
        v-for="item in itemList"
        :key="item.text"
        @click="onJump(item.to)"
      >
        <div slot="icon">
          <span class="iconfont icon-shangpinguanli picon"></span>
        </div>
        <div slot="text" class="pname">{{ item.text }}</div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import productLogo from '@/assets/m/image/plogo.svg'
import mixin from '@m/nativeMixin'
export default {
  name: 'Home',
  mixins: [ mixin ],
  data () {
    return {
      itemList: [
        { text: '商品管理', to: 'product', icon: productLogo }
      ]
    }
  },
  mounted () {},
  methods: {
    onJump (to) {
      this.$gourl(to, this.$router)
    }
  }
}
</script>

<style scoped lang='less'>
  .home{
    .picon{
      color: #323233;
      font-size: 47px;
    }
    .pname{
      color: #323233;
      font-size: 14px;
    }
    background: #ffffff;
    height: 100vh;
    padding-top: 24px;
  }
</style>
