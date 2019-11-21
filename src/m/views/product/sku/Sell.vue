<template>
  <div>
    <van-cell-group class="marginTop">
      <van-field label="价格" placeholder="请输入价格"></van-field>
      <van-field label="结算价" placeholder="请输入结算价"></van-field>
      <van-field label="库存" placeholder="请输入库存"></van-field>
    </van-cell-group>
    <van-cell-group :border="false" class="marginTop">
      <div class="selectTime">
        <div class="label">售卖时间</div>
        <div class="inputArea">
          <van-field
            v-model="sellStartDate"
            class="inputDate"
            :border="false"
            readonly
            placeholder="请选择开始时间"
            @click="onShowPopup('sellStartDate')" />
          <div class="divider">/</div>
          <van-field
            v-model="sellEndDate"
            class="inputDate"
            :border="false"
            readonly
            placeholder="请选择结束时间"
            @click="onShowPopup('sellEndDate')" />
        </div>
      </div>
    </van-cell-group>
    <van-cell-group>
      <div class="selectTime">
        <div class="label">使用时间</div>
        <div class="inputArea">
          <van-field
            v-model="useStartDate"
            class="inputDate"
            :border="false"
            readonly
            placeholder="请选择开始时间"
            @click="onShowPopup('useStartDate')" />
          <div class="divider">/</div>
          <van-field
            v-model="useEndDate"
            class="inputDate"
            :border="false"
            readonly
            placeholder="请选择结束时间"
            @click="onShowPopup('useEndDate')" />
        </div>
      </div>
    </van-cell-group>
    <div class="switchTab marginTop">
      <van-button square :plain="isRefund" @click="isRefund=!isRefund" size="small" color="#FF4444">不可退</van-button>
      <van-button square :plain="!isRefund" @click="isRefund=!isRefund" size="small" color="#FF4444">可退</van-button>
    </div>
    <van-field
      v-if="isRefund"
      v-model="refundMsg"
      rows="3"
      type="textarea"
      autosize
      placeholder="请说明退款政策"/>

    <van-popup
      v-model="showPopup"
      position="bottom"
      :style="{ height: '40%' }"
    >
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择时间"
        confirm-button-text="完成"
        cancel-button-text="取消"
        :min-date="minDate"
        :formatter="formatter"
        @confirm="onSelectedDate"
        @cancel="onShowPopup"
      />
    </van-popup>
  </div>
</template>

<script>
import { formatDate } from '../../../utils/tools'
export default {
  data () {
    return {
      showPopup: false,
      currentDate: new Date(),
      minDate: new Date(),
      dateType: '', // 区分选择的是那个时间输入框 type：[sellStartDate,sellEndDate,useStartDate,useEndDate]
      sellStartDate: '',
      sellEndDate: '',
      useStartDate: '',
      useEndDate: '',
      isRefund: false,
      refundMsg: ''
    }
  },
  mounted () {
    this.isRefund = true
  },
  methods: {
    onShowPopup (type) {
      this.showPopup = !this.showPopup
      this.currentDate = new Date() // 每次打开重置当前日期
      this.dateType = type
    },
    onSelectedDate (date) {
      console.log('选中日期========>', formatDate(date))
      this[this.dateType] = formatDate(date)
      this.onShowPopup('')
    },
    formatter (type, value) {
      if (type === 'year') {
        return `${value}年`
      } else if (type === 'month') {
        return `${value}月`
      } else if (type === 'day') {
        return `${value}日`
      }
      return value
    },
    saveInfo () {
      console.log(this)
    }
  }
}
</script>

<style lang="less" scoped>
.marginTop{
  margin-top:12px;
}
.selectTime{
  padding: 10px 16px;
  height: 44px;
  display:flex;
  align-items: center;
  .label{
    width:90px;
    height: 18px;
    font-size: 14px;
    color: #323233;
    line-height: 18px;
    letter-spacing: 0px;
  }
  .inputArea{
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    .inputDate{
      padding-left: 0;
      padding-right: 0;
    }
    .divider{
      position: relative;
      left: -10px;
    }
  }
}
.switchTab{
  height: 44px;
  background:#ffffff;
  padding: 6px 16px;
  button{
    width: 50%;
  }
}
</style>
