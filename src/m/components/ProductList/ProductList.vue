<template>
  <van-list
    class="vantabs"
    v-model="loading"
    :finished="finished"
    loading-text="加载中..."
    :immediate-check="false"
    @load="onLoad"
    ref="vanListDom"
  >
    <div class=" productList">
      <div class="productItem" v-for="(item,i) in getList" :key="i">
        <van-panel class="productPanel">
          <div slot="header" class="header">
            <div class="id">ID:{{ item.id }}</div>
            <div class="status">{{ item.status }}</div>
          </div>
          <div class="content" @click="viewProduct(item)">
            <div class="productName">{{ item.productName }}</div>
            <div class="supplyName">供应商：{{ item.supplyName }}</div>
            <div class="productTag">
              <span>{{ item.productTag }}</span>
            </div>
          </div>
          <div slot="footer" class="btn">
            <van-button size="small" plain hairline @click="productDelete(item)">删除</van-button>
            <van-button size="small" plain hairline @click="productCopy(item)">复制</van-button>
            <van-button size="small" plain hairline type="danger" @click="productAudit(item)">提审</van-button>
          </div>
        </van-panel>
      </div>
    </div>
  </van-list>
</template>

<script>
const list = [
  { id: '2323566', status: '待提审', productName: '自助海鲜', supplyName: '东方', productTag: '美食' },
  { id: '2323567', status: '驳回', productName: '玛雅水上公园秋季门票', supplyName: '东方', productTag: '玩乐' },
  { id: '2323568', status: '待审核', productName: '上海植物园单日游', supplyName: '东方', productTag: '玩乐' },
  { id: '2323569', status: '通过', productName: '东方明珠一日游', supplyName: '东方', productTag: '玩乐' },
  { id: '2323570', status: '审核中', productName: '欢乐谷3日游', supplyName: '东方', productTag: '玩乐' }
]
export default {
  name: 'ProductList',
  data () {
    return {
      timer: null,
      loading: false,
      finished: false,
      productList: list,
      arraignmentList: [
        { id: '2323566', status: '待提审', productName: '自助海鲜', supplyName: '东方', productTag: '美食' },
        { id: '2323566', status: '待提审', productName: '自助海鲜', supplyName: '东方', productTag: '美食' },
        { id: '2323566', status: '待提审', productName: '自助海鲜', supplyName: '东方', productTag: '美食' },
        { id: '2323566', status: '待提审', productName: '自助海鲜', supplyName: '东方', productTag: '美食' },
        { id: '2323566', status: '待提审', productName: '自助海鲜', supplyName: '东方', productTag: '美食' },
        { id: '2323566', status: '待提审', productName: '自助海鲜', supplyName: '东方', productTag: '美食' },
        { id: '2323566', status: '待提审', productName: '自助海鲜222', supplyName: '东方', productTag: '美食' }
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
      tempList: list // 测试用
    }
  },
  props: {
    tabType: {
      type: String,
      default: 'all'
    },
    searchText: {
      type: String,
      default: ''
    }
  },
  updated () { },
  watch: {
    tabType: function (value) {
      const { tabType } = this
      this.loading = false
      this.finished = false
      console.log(this.$refs.vanListDom.$el.getBoundingClientRect(), value)
      // this.$refs.vanListDom.check()
      // this.$nextTick(() => {
      //   console.log(this.$refs.vanListDom.$el)
      this.$refs.vanListDom.$el.scrollTop = 0
      // })

      if (tabType === 'all') {
        this.productList = list
      }
      if (tabType === 'arraignment') {
        this.productList = this.arraignmentList
      }
      if (tabType === 'audit') {
        this.productList = this.auditList
      }
      if (tabType === 'pass') {
        this.productList = this.passList
      }
      if (tabType === 'reject') {
        this.productList = this.rejectList
      }
      this.tempList = this.productList
    },
    searchText: function (value) {
      console.log('查询', this.productList, this.tmpList)
      if (this.searchText === '') {
        this.productList = this.tempList
      } else {
        this.productList = this.tempList.filter((f, i) => f.productName.indexOf(this.searchText) > -1)
      }
    }
  },
  mounted () {
    console.log(this.finished)
  },
  computed: {
    getList: function () {
      return this.productList
    }
  },
  methods: {
    onLoad () {
      // 异步更新数据
      const oneData = { id: '2323566', status: '待提审', productName: '自助海鲜', supplyName: '东方', productTag: '美食' }
      this.timer = setTimeout(() => {
        this.productList.push(oneData)
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.productList.length >= 10) {
          this.finished = true
        } else {
          this.finished = false
        }
      }, 800)
    },
    viewProduct (item) {
      this.$emit('viewProduct', item)
    },
    productDelete (item) {
      this.$emit('productDelete', item)
    },
    productCopy (item) {
      this.$emit('productCopy', item)
    },
    productAudit (item) {
      this.$emit('productAudit', item)
    }
  }
}
</script>
<style lang="less" scoped>
.productList{
  padding:0px 18px 18px 18px;
  .productItem{
    margin-top:18px;
    border-radius: 8px;
    padding-left: 12px;
    padding-right: 12px;
    background: #ffffff;
    .productPanel::after{
        position: absolute;
        box-sizing: border-box;
        content: ' ';
        pointer-events: none;
        top: -50%;
        right: -50%;
        bottom: -50%;
        left: -50%;
        border: 0 solid #ebedf0;
        -webkit-transform: scale(.5);
        transform: scale(.5);
    }
    .header{
      display: flex;
      height: 44px;
      align-items: center;
      justify-content: space-between;
      .id{
        color: #323233;
        font-size: 14px;
      }
      .status{
        color: #969799;
        font-size: 14px;
      }
    }
    .header::after{
      content: '';
      position: absolute;
      top: 44px;
      width: 100%;
      border-bottom: 0.02667rem solid #EBEDF0;
      transform: scaleY(0.5);
    }
    .content{
      height: 97px;
      padding-top: 13px;
      padding-bottom: 13px;
      .productName{
        font-size: 16px;
        font-family: PingFangSC;
        color:#323233;
        font-weight: 800;
        line-height: 22px;
        letter-spacing: 0px;
      }
      .supplyName{
        font-size: 14px;
        font-family: PingFangSC;
        color: #969799;
        line-height: 20px;
        letter-spacing: 0px;
        padding: 6px 0;
      }
      .productTag{
        span{
          background:#FF4444;
          width: 32px;
          height: 18px;
          font-size: 12px;
          font-family: PingFangSC;
          color: #ffffff;
          line-height: 16px;
          letter-spacing: 0px;
          padding: 1px 4px;
        }
      }
    }
    .btn{
      text-align: right;
      margin-right: -16px;
      button{
        width: 72px;
        height: 32px;
        margin-left: 8px;
        border-radius: 2px;
        font-size: 16px;
      }
    }
  }
}
</style>
