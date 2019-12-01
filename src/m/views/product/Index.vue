<template>
  <div class="productBody">
    <div class="search">
      <van-field
        v-model="searchText"
        class="searchInput"
        placeholder="搜索产品"
        left-icon="search"
      />
      <van-icon class="searchIcon" name="icon iconfont icon-tianjiashangpin" @click="onShowActionSheet"/>
    </div>
    <van-tabs
      :border="false"
      :line-width="40"
      :line-height="3"
      :swipe-threshold="5"
      title-active-color="#323233"
      title-inactive-color="#969799"
      @click="onTabClick"
    >
      <van-tab title="全部" name="all"></van-tab>
      <van-tab title="待提审" name="arraignment"></van-tab>
      <van-tab title="待审核" name="audit"></van-tab>
      <van-tab title="通过" name="pass"></van-tab>
      <van-tab title="驳回" name="reject"></van-tab>
    </van-tabs>

    <product-list
      :tabType="this.tabType"
      :searchText="this.searchText"
      @viewProduct="viewProduct"
      @productDelete="onDelete"
      @productCopy="onPopSkuShow"
      @productAudit="onAudit" />

    <van-action-sheet
      v-model="show"
      :round="false"
      :close-on-click-action="true"
      :actions="actions"
      cancel-text="取消"
      @cancel="onCancel"
      @select="onSelect"
    />

    <sku-copy
      :isShowPopup="isShowSkuCopy"
      @callBackCancel="()=>{this.isShowSkuCopy=false}"
      @callBackSelect="onCopy">
    </sku-copy>
  </div>
</template>

<script>
import ProductList from '@m/components/ProductList'

import SkuCopy from '@m/components/SkuCopy'
import { DialogConfirm, DialogAlert } from '@m/utils/dialog'
import { getOpLog } from '@/api/log'

export default {
  name: 'MProduct',
  components: {
    ProductList, SkuCopy
  },
  data () {
    return {
      tabType: 'all',
      show: false,
      isShowSkuCopy: false,
      actions: [
        { name: '美食', key: 'ms' },
        { name: '玩乐' }
      ],

      selectedProduct: {},
      searchText: ''
    }
  },
  mounted () {
    getOpLog().then(res => {
      console.log(res)
    })
  },
  methods: {
    onTabClick (name, title) {
      console.log(name, title)
      this.searchText = ''
      this.tabType = name
    },
    // actionsheet 操作方法
    onShowActionSheet () {
      this.show = true
    },
    onSelect (data) {
      console.log(data.key, data.name)
      this.$toast('选中了：' + data.name)
      // this.$router.push({ path: '/productadd' })
      this.$gourl('productadd', this.$router, { opType: 'add' })
    },
    onCancel () {
      this.show = false
      this.$toast('cancel')
    },
    // 查看商品详情
    viewProduct (item) {
      this.$gourl('productadd', this.$router, { opType: 'edit' })
    },
    // 删除   复制   提审
    onDelete (item) {
      DialogConfirm('删除商品', '商品删除后不可恢复，是否确认删除？', '确认删除', '取消删除', () => {
        console.log('确认删除', item)
      })
    },
    onCopy (skuList) {
      console.log('产品=', this.selectedProduct)
      console.log('规格=', skuList)
      this.isShowSkuCopy = false
    },
    onAudit (item) {
      console.log('提审', item)
    },
    onPopSkuShow (item) {
      console.log('复制111', item)
      this.selectedProduct = item
      this.isShowSkuCopy = true
    }
  }
}
</script>

<style scoped lang='less'>
.productBody{
  display: flex;
  flex-direction: column;
  height: 100%;
  .vantabs{
    overflow-y: scroll;
    -webkit-overflow-scrolling:touch;
  }
}
.search{
  height:64px;
  padding: 10px 16px;
  background: #ffffff;
  .searchInput{
    background: #F7F8FA;
    margin-right: 42px;
    width: auto;
    height: 34px;
    padding: 7px 16px;
  }
  .searchIcon{
    margin-left: 18px;
    font-size: 26px;
    top: -30px;
    float: right;
  }
}
</style>
