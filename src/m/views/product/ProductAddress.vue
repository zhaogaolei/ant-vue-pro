<template>
  <div>
    <van-cell-group class="marginBottom">
      <van-field
        v-model="name"
        clearable
        label="名称"
        placeholder="请输入商家名称"
      />
      <van-field
        v-model="tel"
        label="电话"
        type="tel"
        placeholder="请输入商家电话"
      />
    </van-cell-group>
    <van-cell-group>
      <van-field
        v-model="businessTime"
        clearable
        label="营业时间"
        placeholder="例“上午 8:30-11:30”(手输)"
      />
      <van-field
        v-model="address"
        label="地区"
        placeholder="请选择省 / 市 / 区"
        readonly
        @click="show=true"
      />
      <van-field
        v-model="detailAddress"
        type="textarea"
        autosize
        clearable=""
        maxlength="100"
        label="详细地址"
        placeholder="无需重复填写省市信息"
        show-word-limit
      />
    </van-cell-group>
    <zm-button btnText="确定" @callBack="onSure"></zm-button>
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '50%' }"
    >
      <van-area title="选择地区" :area-list="areaList" @confirm="addressConfirm" @cancel="addressCancel"/>
    </van-popup>
  </div>
</template>

<script>
import arealist from './area'
import ZmButton from '../../components/Button'
export default {
  name: 'ProductAddress',
  components: { ZmButton },
  data () {
    return {
      show: false,
      areaList: arealist,
      name: '',
      tel: '',
      businessTime: '',
      address: '',
      detailAddress: ''
    }
  },
  mounted () {
    console.log(arealist)
  },
  methods: {
    addressConfirm (areaObj) {
      console.log(areaObj)
      this.address = `${areaObj[0].name}${areaObj[1].name}${areaObj[2].name}`
      this.show = false
    },
    addressCancel () {
      this.show = false
    },

    onSure () {
      const data = {
        name: this.name,
        tel: this.tel,
        businessTime: this.businessTime,
        address: this.address,
        detailAddress: this.detailAddress
      }
      console.log('输入数据=', data)
    }
  }
}
</script>

<style lang="less" scoped>
.marginBottom{
  margin-bottom: 12px;
}
</style>
