<template>
  <div>
    <div class="search">
      <van-field
        v-model="searchText"
        class="searchInput"
        placeholder="搜索或新增基础商品"
        left-icon="search"
        clearable
        @input="searchChange"
      />
    </div>
    <!-- 列表 -->
    <van-cell-group>
      <van-cell size="large" v-for="(item,index) in nameList" :key="index" @click="onSelect(item)">
        <van-icon slot="icon" class="listSelectIcon" name="success" v-if="item===selectedItem"/>
        <div slot="title">{{ item }}</div>
      </van-cell>
    </van-cell-group>
    <!-- 新增按钮 -->
    <div class="addBtn" v-if="nameList.length<=0">
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
      searchText: '',
      nameList: [
        '玛雅水上乐园秋季门票',
        '太阳岛海鲜自助餐',
        '宝燕乐园',
        '欢乐谷门票',
        '苏州乐园年卡',
        '杭州西溪湿地旅游度假区'
      ],
      temp: [],
      selectedItem: ''
    }
  },
  mounted () {
    this.temp = [...this.nameList]
  },
  methods: {
    onSelect (item) {
      this.selectedItem = item
    },
    searchChange () {
      if (this.searchText === '') {
        this.nameList = this.temp
      } else {
        this.nameList = this.temp.filter(f => f.indexOf(this.searchText) > -1)
      }
    }
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
.listSelectIcon{
  color: #FF4444;
  font-size: 16px;
  margin-right: 8px;
  padding-top: 5px;
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
