<template>
  <div>
    <van-cell-group class="marginBottom">
      <van-field
        v-model="supplyName"
        clearable
        label="名称"
        placeholder="请输入供应商名称"
      />
    </van-cell-group>
    <van-switch-cell v-model="isNeedBank" cell-size="large" :border="false" title="是否需要汇款账户" active-color="#ff4444"/>
    <van-cell-group v-if="isNeedBank">
      <van-field
        v-model="bankName"
        clearable
        label="开户行"
        placeholder="请输入开户行"
      />
      <van-field
        v-model="bankUserName"
        clearable
        label="户主"
        placeholder="请输入户主姓名"
      />
      <van-field
        v-model="bankNum"
        clearable
        label="银行账户"
        placeholder="请输入银行账户号码"
      />
    </van-cell-group>
    <zm-button btnText="确定" @callBack="onSure"></zm-button>
  </div>
</template>

<script>
import ZmButton from '../../components/Button'
export default {
  name: 'SupplyEdit',
  components: { ZmButton },
  data () {
    return {
      supplyName: '',
      isNeedBank: true,
      bankName: '',
      bankUserName: '',
      bankNum: ''
    }
  },
  mounted () {
    this.supplyName = this.$route.params.data.supplyName
    console.log(this.$route.params.data.supplyName)
  },
  methods: {
    onSure () {
      this.$toast.fail('开发中...')
    }
  }
}
</script>

<style lang="less" scoped>
.marginBottom{
  margin-bottom: 12px;
}
</style>
