<template>
  <div class="productBody">
    <div class="search">
      <van-field
        v-model="searchText"
        class="searchInput"
        placeholder="搜索产品"
        left-icon="search"
        @input="onSearch"
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
      class="vantabs"
      :productList="productList"
      @viewProduct="viewProduct"
      @productDelete="onDelete"
      @productCopy="onPopSkuShow"
      @productAudit="onAudit"/>
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
// eslint-disable-next-line import/no-duplicates
import ProductList from '../../components/ProductList'
// eslint-disable-next-line import/no-duplicates
import ProductAuditList from '../../components/ProductList'

import SkuCopy from '../../components/SkuCopy'
import { DialogConfirm, DialogAlert } from '../../utils/dialog'
const list = [
  { id: '2323566', status: '待提审', productName: '自助海鲜', supplyName: '东方', productTag: '美食' },
  { id: '2323567', status: '驳回', productName: '玛雅水上公园秋季门票', supplyName: '东方', productTag: '玩乐' },
  { id: '2323568', status: '待审核', productName: '上海植物园单日游', supplyName: '东方', productTag: '玩乐' },
  { id: '2323569', status: '通过', productName: '东方明珠一日游', supplyName: '东方', productTag: '玩乐' },
  { id: '2323570', status: '审核中', productName: '欢乐谷3日游', supplyName: '东方', productTag: '玩乐' }
]
export default {
  name: 'MProduct',
  components: {
    ProductList, ProductAuditList, SkuCopy
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
      productList: list,
      arraignmentList: [
        { id: '2323566', status: '待提审', productName: '自助海鲜', supplyName: '东方', productTag: '美食' }
      ],
      auditList: [
        { id: '2323568', status: '待审核', productName: '上海植物园单日游', supplyName: '东方', productTag: '玩乐' }
      ],
      passList: [
        { id: '2323569', status: '通过', productName: '东方明珠一日游', supplyName: '东方', productTag: '玩乐' }
      ],
      rejectList: [
        { id: '2323567', status: '驳回', productName: '玛雅水上公园秋季门票', supplyName: '东方', productTag: '玩乐' }
      ],
      selectedProduct: {},
      searchText: '',
      tmpList: list
    }
  },
  mounted () {
  },
  methods: {
    onTabClick (name, title) {
      console.log(name, title)
      this.searchText = ''
      if (name === 'all') {
        this.productList = list
      }
      if (name === 'arraignment') {
        this.productList = this.arraignmentList
      }
      if (name === 'audit') {
        this.productList = this.auditList
      }
      if (name === 'pass') {
        this.productList = this.passList
      }
      if (name === 'reject') {
        this.productList = this.rejectList
      }
      this.tmpList = this.productList
      this.tabType = name
    },
    onSearch () {
      console.log('查询', this.productList, this.tmpList)
      if (this.searchText === '') {
        this.productList = this.tmpList
      } else {
        this.productList = this.tmpList.filter((f, i) => f.productName.indexOf(this.searchText) > -1)
      }
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
