<template>
  <div class="contentBody">
    <van-cell-group class="marginBottom">
      <van-cell value="套餐内容"></van-cell>
      <van-field
        v-model="mealContent"
        autosize
        rows="3"
        type="textarea"
        placeholder="请输入套餐内容"></van-field>
    </van-cell-group>
    <van-cell-group class="marginBottom">
      <van-cell value="适用对象"></van-cell>
      <van-field
        v-model="applyObjContent"
        autosize
        rows="3"
        type="textarea"
        placeholder="请输入适用对象"></van-field>
    </van-cell-group>
    <van-cell-group class="marginBottom">
      <van-cell value="使用流程"></van-cell>
      <van-field
        readonly
        type="textarea"
        rows="3"
        value="【使用流程】 购买成功----收到券码----免预约----游玩当天，核销后使用"></van-field>
    </van-cell-group>
    <van-cell-group class="marginBottom">
      <van-cell value="重要提示"></van-cell>
      <van-field
        v-model="importantTip"
        autosize
        rows="3"
        type="textarea"
        placeholder="请输入重要提示（选填）"></van-field>
    </van-cell-group>
    <van-cell-group>
      <van-field
        v-model="recommendLink"
        type="text"
        label="推荐链接"
        placeholder="请输入推荐链接（选填）"></van-field>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'SkuContent',
  data () {
    return {
      mealContent: '',
      applyObjContent: '',
      importantTip: '',
      recommendLink: ''
    }
  }

}
</script>

<style lang="less" scoped>
.contentBody{
  padding: 12px 0 66px 0;
  .marginBottom{
    margin-bottom: 12px;
  }
}
</style>
