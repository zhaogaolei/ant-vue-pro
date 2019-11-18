<template>
  <!-- <van-list
    v-model="loading"
    :finished="finished"
    loading-text="加载中..."
    @load="onLoad"
  > -->
  <div class=" productList">
    <div class="productItem" v-for="(item,i) in productList" :key="i">
      <van-panel class="productPanel">
        <div slot="header" class="header">
          <div class="id">ID:{{ item.id }}</div>
          <div class="status">{{ item.status }}</div>
        </div>
        <div class="content">
          <div class="productName">{{ item.productName }}</div>
          <div class="supplyName">供应商：{{ item.supplyName }}</div>
          <div class="productTag">
            <span>{{ item.productTag }}</span>
          </div>
        </div>
        <div slot="footer" class="btn">
          <van-button size="small" plain hairline >删除</van-button>
          <van-button size="small" plain hairline >复制</van-button>
          <van-button size="small" plain hairline type="danger">提审</van-button>
        </div>
      </van-panel>
    </div>
  </div>
  <!-- </van-list> -->
</template>

<script>
export default {
  name: 'ProductList',
  data () {
    return {
      loading: false,
      finished: false
    }
  },
  props: {
    productList: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: []
    }
  },
  mounted () {
    console.log(this.productList)
  },
  methods: {
    onLoad () {
      // 异步更新数据
      const oneData = { id: '2323566', status: '待提审', productName: '自助海鲜', supplyName: '东方', productTag: '美食' }
      setTimeout(() => {
        this.productList.push(oneData)
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.productList.length >= 15) {
          this.finished = true
        }
      }, 800)
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
