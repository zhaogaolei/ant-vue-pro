<template>
  <div class="productBody">
    <div class="search">
      <van-field
        class="searchInput"
        placeholder="搜索产品"
        left-icon="search"
      />
      <van-icon class="searchIcon" name="todo-list-o" @click="onShowActionSheet"/>
    </div>
    <van-tabs
      :border="false"
      :line-width="40"
      :line-height="3"
      :swipe-threshold="5"
      title-active-color="#323233"
      title-inactive-color="#969799"
    >
      <van-tab title="全部"></van-tab>
      <van-tab title="待提审"></van-tab>
      <van-tab title="待审核"></van-tab>
      <van-tab title="通过"></van-tab>
      <van-tab title="驳回"></van-tab>
    </van-tabs>
    <product-list class="vantabs" :productList="productList"></product-list>
    <!-- <product-list1 class="vantabs" :productList="productList"></product-list1>
    <product-list2 class="vantabs" :productList="productList"></product-list2>
    <product-list3 class="vantabs" :productList="productList"></product-list3>
    <product-list4 class="vantabs" :productList="productList"></product-list4> -->

    <van-action-sheet
      v-model="show"
      :round="false"
      :close-on-click-action="true"
      :actions="actions"
      cancel-text="取消"
      @cancel="onCancel"
      @select="onSelect"
    />
  </div>
</template>

<script>
// eslint-disable-next-line import/no-duplicates
import ProductList from '../../components/ProductList'
// eslint-disable-next-line import/no-duplicates
import ProductList1 from '../../components/ProductList'
// eslint-disable-next-line import/no-duplicates
import ProductList2 from '../../components/ProductList'
// eslint-disable-next-line import/no-duplicates
import ProductList3 from '../../components/ProductList'
// eslint-disable-next-line import/no-duplicates
import ProductList4 from '../../components/ProductList'

export default {
  name: 'MProduct',
  components: {
    ProductList,
    ProductList1,
    ProductList2,
    ProductList3,
    ProductList4
  },
  data () {
    return {
      show: false,
      actions: [
        { name: '美食', key: 'ms' },
        { name: '玩乐' }
      ],
      productList: [
        { id: '2323566', status: '待提审', productName: '自助海鲜', supplyName: '东方', productTag: '美食' },
        { id: '2323567', status: '驳回', productName: '玛雅水上公园秋季门票', supplyName: '东方', productTag: '玩乐' },
        { id: '2323568', status: '待审核', productName: '上海植物园单日游', supplyName: '东方', productTag: '玩乐' },
        { id: '2323569', status: '通过', productName: '东方明珠一日游', supplyName: '东方', productTag: '玩乐' },
        { id: '2323570', status: '审核中', productName: '欢乐谷3日游', supplyName: '东方', productTag: '玩乐' }
      ]
    }
  },
  mounted () {
  },
  methods: {
    // actionsheet 操作方法
    onShowActionSheet () {
      this.show = true
    },
    onSelect (data) {
      console.log(data.key, data.name)
      this.$toast('选中了：' + data.name)
      // this.$router.push({ path: '/productadd' })
      this.$gourl('productadd', this.$router)
    },
    onCancel () {
      this.show = false
      this.$toast('cancel')
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
