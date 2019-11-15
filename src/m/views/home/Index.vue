<template>
  <div class="home">
    <van-grid :gutter="10" :column-num="1" :clickable="true">
      <van-grid-item
        v-for="item in itemList"
        :key="item.text"
        :text="item.text"
        :to="item.to"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      itemList: [
        { text: '商品管理', to: '/product' },
        { text: '供应商管理', to: '/supply' }
      ]
    }
  },
  mounted () {

  }
}
</script>

<style scoped>
  .home{
    background: #ffffff;
    height: 100vh;
    padding-top: 24px;
  }
</style>
