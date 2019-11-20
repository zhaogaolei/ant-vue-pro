// 类似添加地址，添加供应商页面的长按钮，参数：btnText:按钮名称，callBack:回调函数

<template>
  <div class="btn">
    <van-button color="#FF4444" @click="onClick">{{ this.btnText }}</van-button>
  </div>
</template>

<script>

export default {
  name: 'ZmButton',
  props: {
    btnText: {
      type: String,
      default: '确定'
    }
  },
  methods: {
    onClick () {
      this.$emit('callBack')
    }
  }

}
</script>

<style lang="less" scoped>
.btn{
  padding: 18px 16px;
  button{
    width: 100%;
  }
}
</style>
