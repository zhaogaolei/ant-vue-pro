<template>
  <div>
    <div class="search">
      <van-field
        v-model="searchText"
        class="searchInput"
        placeholder="搜索供应商"
        left-icon="search"
        clearable
      />
    </div>
    <!-- <div class="addBtn">
      <van-button plain hairline color="#FF4444" to="supplyedit">
        <van-icon name="add-o" />新增供应商
      </van-button>
    </div> -->
    <van-cell size="large" :border="false" class="marginBottom">
      <van-icon slot="icon" class="listSelectIcon" name="success" v-if="0===selectedSupply.id"/>
      <div slot="title" @click="selectItem({id:0,supplyName:'右顺商贸'})">右顺商贸</div>
      <span
        slot="default"
        @click="()=>this.$router.push({
          name:'mSupplyEdit', // params 不能和path一起使用
          params:{
            data:{
              id:0,supplyName:'右顺商贸'
            }
          }
        })">
        <van-icon slot="right-icon" name="edit" class="editIcon"/>
      </span>
    </van-cell>
    <van-cell-group>
      <van-cell size="large" is-link v-for="(item) in supplyList" :key="item.id">
        <van-icon slot="icon" class="listSelectIcon" v-if="item.id===selectedSupply.id" name="success" />
        <div slot="title" @click="selectItem(item)">{{ item.supplyName }}</div>
        <span slot="default" @click="view(item)">查看</span>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'Supply',
  data () {
    return {
      searchText: '',
      selectedSupply: { id: 0, supplyName: '右顺商贸' },
      supplyList: [
        { id: 1, supplyName: '如家酒店' },
        { id: 2, supplyName: '携程旅游' },
        { id: 3, supplyName: '汉庭' }
      ]
    }
  },
  methods: {
    selectItem (selectItem) {
      this.isAddSelect = false
      this.selectedSupply = selectItem
      //
      console.log('选中', selectItem)
    },
    view (item) {
      console.log('查看', item)
      this.$router.push('supplyview')
    }
  }
}
</script>

<style lang="less" scoped>
.marginBottom{
  margin-bottom: 12px;
}
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
  height:68px;
  padding: 12px 16px;
  font-size: 16px;
  background: #ffffff;
  button{
    width: 100%;
  }
  i{
    top: 2px;
    right: 5px;
  }
}
.editIcon{
  font-size: 19px;
}
</style>
