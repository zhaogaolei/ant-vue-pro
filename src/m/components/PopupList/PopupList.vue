<template>
  <van-popup
    v-model="isShow"
    safe-area-inset-bottom
    :close-on-popstate="true"
    :close-on-click-overlay="false"
    @click-overlay="onCancel"
    position="bottom"
    :style="{ height: `${height}%` }"
  >
    <div class="popupHeader">
      <div class="title">{{ title }}<van-icon name="cross" class="close" @click="onCancel"/></div>
      <div class="searchInput" v-if="isShowSearch">
        <van-search v-model="searchMsg" placeholder="请输入搜索关键词" @input="onSearchChange()"/>
      </div>
    </div>
    <van-cell-group :class="`${isShowSearch? 'popupListItemWithSearch':'popupListItem'}`">
      <van-cell size="large" v-for="(item,index) in list" :key="index" @click="onSelect(item)">
        <van-icon slot="icon" class="listSelectIcon" name="success" v-if="item.value===selectedItem.value"/>
        <div slot="title">{{ item.label }}</div>
      </van-cell>
    </van-cell-group>
  </van-popup>
</template>

<script>
export default {
  name: 'PopupList',
  data () {
    return {
      searchMsg: '',
      isShow: this.isShowPopup,
      list: this.dataList,
      tmp: []
    }
  },
  watch: {
    isShowPopup (value) {
      this.isShow = value
    },
    dataList (list) {
      console.log(list)
      this.list = list
    }
  },
  props: {
    height: {
      type: Number,
      default: 50,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    isShowSearch: {
      type: Boolean,
      default: false
    },
    dataList: {
      type: Array,
      default: () => []
    },
    isShowPopup: {
      type: Boolean,
      default: false
    },
    selectedItem: {
      type: Object,
      default: () => {}
    }
  },
  beforeUpdate () {
    console.log('beforeUpdate')
    this.tmp = this.dataList
  },
  computed: {},
  methods: {
    onSelect (item) {
      console.log('选中完毕', item)
      this.$emit('callBackSelect', item)
    },
    onCancel () {
      this.$emit('callBackCancel')
    },
    onSearchChange () {
      // search
      console.log('=========', this.searchMsg, this.tmp)
      if (this.searchMsg === '') {
        this.list = this.tmp
      } else {
        this.list = this.tmp.filter((f, i) => f.value.indexOf(this.searchMsg) > -1)
      }

      // this.$emit('callBackSearch', this.searchMsg)
    }
  }
}
</script>

<style lang="less" scoped>
.popupHeader{
    position: fixed;
    background: #ffffff;
    z-index: 999;
    width: 100%;
    .title{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 54px;
      font-size: 16px;
      font-weight: 800;
      color: #323233;
    }
    .close{
      position: absolute;
      right: 20px;
    }
    .searchInput{
      width: 100%;
    }
  }
  .popupListItem{
    margin-top: 54px;
  }
  .popupListItemWithSearch{
     margin-top: 108px;
  }
  .listSelectIcon{
    color: #FF4444;
    font-size: 16px;
    margin-right: 8px;
    padding-top: 5px;
  }
</style>
