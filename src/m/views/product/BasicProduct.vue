<template>
  <div>
    <div class="search">
      <van-field
        v-model="searchText"
        class="searchInput"
        placeholder="搜索或新增基础商品"
        left-icon="search"
        clearable
      />
    </div>
    <!-- 列表 -->
    <van-cell-group>
      <van-cell title="玛雅水上乐园秋季门票"/>
      <van-cell title="太阳岛海鲜自助餐"/>
      <van-cell title="宝燕乐园"/>
      <van-cell title="欢乐谷门票"/>
      <van-cell title="苏州乐园年卡"/>
      <van-cell title="杭州西溪湿地旅游度假区"/>
    </van-cell-group>
    <!-- 新增按钮 -->
    <div class="addBtn">
      <div class="desc">数据库暂无您输入的基础商品，是否新增？</div>
      <van-button class="btn" color="#FF4444">
        <van-icon name="add-o" />新增
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductName',
  data () {
    return {
      searchText: ''
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.search{
  height: 54px;
  padding: 10px 16px;
  background: #ffffff;
  .searchInput{
    background: #F7F8FA;
    height: 34px;
    padding: 7px 16px;
  }
}
.addBtn{
  margin-top: 60px;
  text-align: center;
  .desc{
    height: 20px;
    opacity: 0.89;
    font-size: 14px;
    color: #323233;
    line-height: 20px;
    margin-bottom: 18px;
  }
  .btn{
    width: 168px;
    opacity: 1;
    font-size: 16px;
    i{
      top: 2px;
      right: 5px;
    }
  }
}
</style>
