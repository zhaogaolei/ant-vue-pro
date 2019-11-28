<template>
  <van-popup
    v-model="isShow"
    safe-area-inset-bottom
    :close-on-popstate="true"
    :close-on-click-overlay="false"
    position="bottom"
    :style="{ height: `88%` }"
  >
    <div class="popupHeader">
      <div class="title">复制规格<van-icon name="cross" class="close" @click="onCancel"/></div>
    </div>
    <van-cell-group>
      <van-checkbox-group class="popupListItem" v-model="result" ref="checkboxGroup" checked-color="#ff4444">
        <van-cell size="large" >
          <van-checkbox shape="square" name="a1">start</van-checkbox>
        </van-cell>
        <van-cell size="large" >
          <van-checkbox shape="square" name="b1">复选框 b</van-checkbox>
        </van-cell>
        <van-cell size="large" >
          <van-checkbox shape="square" name="c1">复选框 c</van-checkbox>
        </van-cell>
        <van-cell size="large" >
          <van-checkbox shape="square" name="a11">复选框 a</van-checkbox>
        </van-cell>
        <van-cell size="large" >
          <van-checkbox shape="square" name="b11">复选框 b</van-checkbox>
        </van-cell>
        <van-cell size="large" >
          <van-checkbox shape="square" name="c11">复选框 c</van-checkbox>
        </van-cell>
        <van-cell size="large" >
          <van-checkbox shape="square" name="a22">复选框 a</van-checkbox>
        </van-cell>
        <van-cell size="large" >
          <van-checkbox shape="square" name="b22">复选框 b</van-checkbox>
        </van-cell>
        <van-cell size="large" >
          <van-checkbox shape="square" name="c22">复选框 c</van-checkbox>
        </van-cell>
        <van-cell size="large" >
          <van-checkbox shape="square" name="a33">复选框 a</van-checkbox>
        </van-cell>
        <van-cell size="large" >
          <van-checkbox shape="square" name="b44">复选框 b</van-checkbox>
        </van-cell>
        <van-cell size="large" >
          <van-checkbox shape="square" name="a33">复选框 a</van-checkbox>
        </van-cell>
        <van-cell size="large" >
          <van-checkbox shape="square" name="b55">复选框 b</van-checkbox>
        </van-cell>
        <van-cell size="large" >
          <van-checkbox shape="square" name="a66">复选框 a</van-checkbox>
        </van-cell>
        <van-cell size="large" >
          <van-checkbox shape="square" name="b66">复选框 b</van-checkbox>
        </van-cell>
        <van-cell size="large" >
          <van-checkbox shape="square" name="a77">复选框 a</van-checkbox>
        </van-cell>
        <van-cell size="large" >
          <van-checkbox shape="square" name="b88">复选框 b</van-checkbox>
        </van-cell>
        <van-cell size="large" >
          <van-checkbox shape="square" name="c99">end</van-checkbox>
        </van-cell>
      </van-checkbox-group>
    </van-cell-group>
    <foot>
      <van-checkbox
        class="checkAll"
        shape="square"
        v-model="allCheck"
        @click="checkAll"
        checked-color="#ff4444">{{ allCheck?'全不选':'全选' }}</van-checkbox>
      <van-button class="sure" color="#ff4444" @click="onSelect">确定</van-button>
    </foot>
  </van-popup>
</template>

<script>
import Foot from '../Foot'
export default {
  name: 'SkuCopy',
  components: { Foot },
  data () {
    return {
      allCheck: false,
      result: [],
      isShow: this.isShowPopup,
      list: this.dataList
    }
  },
  props: {
    isShowPopup: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isShowPopup (value) {
      this.isShow = value
    }
  },
  beforeUpdate () {
  },
  computed: {},
  methods: {
    checkAll () {
      if (!this.allCheck) {
        console.log('全选')
        this.$refs.checkboxGroup.toggleAll(true)
      } else {
        console.log('全不选')
        this.$refs.checkboxGroup.toggleAll()
      }
    },
    toggleAll () {
      this.$refs.checkboxGroup.toggleAll()
    },
    onSelect () {
      console.log('选中完毕', this.result)
      this.$emit('callBackSelect', this.result)
    },
    onCancel () {
      this.$emit('callBackCancel')
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
  }
  .popupListItem{
    margin-top: 54px;
    margin-bottom:54px;
  }
  .checkAll{
    width:30%;
    font-size: 16px;
  }
  .sure{
    width: 70%;
    font-size: 16px;
  }
</style>
