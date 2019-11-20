
<template>
  <div>
    <van-cell-group class="marginBottom">
      <van-field
        label="名称"
        readonly
        value="文明"
        placeholder="请输入供应商名称"
      />
    </van-cell-group>
    <van-cell-group>
      <van-field
        label="开户行"
        readonly
        value="中国建设银行中江路支行"
      />
      <van-field
        label="户主"
        readonly
        value="上海尚旅网络科技有限公司"
      />
      <van-field
        label="银行账户"
        readonly
        value="2131 3414 1434 1344 24"
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'ProductSku',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.marginBottom{
  margin-bottom: 12px;
}
</style>
