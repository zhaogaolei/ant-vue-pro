<template>
  <div class="skuBody">
    <van-tabs
      v-model="active"
      :border="false"
      :line-width="40"
      :line-height="3"
      title-active-color="#323233"
      title-inactive-color="#969799"
      :sticky="true"
    >
      <van-tab title="基础信息"><sku-base-info></sku-base-info></van-tab>
      <van-tab title="售卖"><sku-sell></sku-sell></van-tab>
      <van-tab title="内容"><sku-content></sku-content></van-tab>
      <van-tab title="购买"><sku-purchase></sku-purchase></van-tab>
    </van-tabs>

    <!-- 底部按钮 编辑只有[删除+保存]  新增只有[保存]-->
    <foot class="footBtn">
      <van-button plain color="#ff4444">删除</van-button>
      <van-button color="#ff4444">保存</van-button>
    </foot>
  </div>
</template>

<script>
import Foot from '../../../components/Foot'
import SkuBaseInfo from './BaseInfo'
import SkuSell from './Sell'
import SkuContent from './Content'
import SkuPurchase from './Purchase'
export default {
  name: 'ProductSku',
  components: { SkuBaseInfo, SkuSell, SkuContent, SkuPurchase, Foot },
  data () {
    return {
      active: 0 // 默认选中那个tab标签
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.skuBody{
  .footBtn{
    display: flex;
    justify-content: space-between;
    button{
      width: 49%;
    }
 }
}
</style>
