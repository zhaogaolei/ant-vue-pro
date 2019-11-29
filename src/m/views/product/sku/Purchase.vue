<template>
  <div class="purchaseBody">
    <div class="headerTitle">购买数量限制</div>
    <van-cell-group>
      <van-field label="最少" type="number" placeholder="1"></van-field>
      <van-field label="最多" type="number" placeholder="10"></van-field>
      <van-field
        label="加减增量"
        type="number"
        placeholder="1"
        right-icon="info-o"
        @click-right-icon="showTips"></van-field>
    </van-cell-group>
    <div class="headerTitle">预约信息</div>
    <div class="tabTag">
      <van-button
        v-for="(item,index) in ['无需预约', '买前预约', '买后预约']"
        :key="index"
        class="bookButton"
        :plain="bookingButtonSelect !== item"
        hairline
        size="small"
        square
        @click="bookingButtonSelect = item"
        color="#FF4444">{{ item }}</van-button>
    </div>
    <van-cell-group v-if="bookingButtonSelect === '买前预约'|| bookingButtonSelect === '买后预约'">
      <van-field type="textarea" rows="3" v-model="bookingMethod" autosize placeholder="请输入预约方式"></van-field>
    </van-cell-group>
    <van-switch-cell
      class="marginTop"
      v-model="isAdditionalInformation"
      :border="bookingButtonSelect!=='买后预约'"
      cell-size="large"
      title="额外信息"
      active-color="#ff4444"/>
    <div v-if="isAdditionalInformation">
      <div class="tabTag" v-if="bookingButtonSelect==='买后预约'">
        <van-button
          class="ewButton"
          v-for="(item,index) in ['下单时','预约时']"
          :key="index"
          hairline
          square
          size="small"
          :plain="afterBuyButtonSelect !== item"
          @click="afterBuyButtonSelect = item"
          color="#FF4444">{{ item }}</van-button>
      </div>
      <van-cell-group :border="false">
        <van-switch-cell v-model="isNeedCertificateInfo" :border="!isNeedCertificateInfo" cell-size="large" title="证件信息" active-color="#ff4444"/>
        <template v-if="isNeedCertificateInfo">
          <div class="titleDesc">请选择所需证件？</div>
          <van-checkbox-group v-model="certificateChecked" class="checkGroup">
            <van-checkbox
              class="checkbox"
              shape="square"
              checked-color="#ff4444"
              v-for="(item,index) in ['身份证','护照','户口簿','港澳通行证','台胞证','其他']"
              :key="index"
              :name="item">{{ item }}</van-checkbox>
          </van-checkbox-group>
        </template>
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell v-model="isNeedAddress" cell-size="large" title="收货地址" active-color="#ff4444"/>
        <template v-if="!isNeedAddress">
          <van-switch-cell v-model="isNeedContact" cell-size="large" :border="false" title="联系方式" active-color="#ff4444"/>
          <template v-if="isNeedContact">
            <div class="titleDesc">请选择联系途径？</div>
            <van-checkbox-group v-model="contactChecked" class="checkGroup">
              <van-checkbox
                class="checkbox"
                shape="square"
                checked-color="#ff4444"
                v-for="(item,index) in ['联系人','电话','地址']"
                :key="index"
                :name="item">{{ item }}</van-checkbox>
            </van-checkbox-group>
          </template>
        </template>
      </van-cell-group>
    </div>
    <van-switch-cell
      class="marginTop"
      v-model="isNeedCustomer"
      :border="false"
      cell-size="large"
      title="客服干预"
      active-color="#ff4444"/>
    <van-field
      v-if="isNeedCustomer"
      type="textarea"
      rows="2"
      v-model="customerIntervene"
      autosize
      placeholder="预设内容"
      maxlength="100"
      show-word-limit/>
  </div>
</template>

<script>
import { DialogConfirm, DialogAlert } from '@m/utils/dialog'
export default {
  name: 'Purchase',
  data () {
    return {
      bookingButtonSelect: '无需预约', // 默认选中 无需预约
      afterBuyButtonSelect: '下单时', // 默认选中下单时
      isAdditionalInformation: false, // 默认不展示额外信息
      isNeedCertificateInfo: false, // 默认不展示证件信息
      isNeedAddress: true, // 默认需收货地址
      isNeedContact: true, // 默认需要联系方式
      isNeedCustomer: true, // 默认需要客服干预
      bookingMethod: '', // 预约方式
      customerIntervene: '', // 客服干预内容
      certificateChecked: ['身份证', '护照'],
      contactChecked: ['联系人']
    }
  },
  methods: {
    showTips () {
      DialogAlert('加减增量', '每按一次加号或减号购买数量的变化', '确定')
    }
  }

}
</script>

<style lang="less" scoped>
.purchaseBody{
  padding-bottom: 66px;
  .headerTitle{
    height: 50px;
    padding: 16px;
    font-size: 14px;
    font-family: PingFangSC;
    color: #999999;
  }
  .tabTag{
    height: 44px;
    background:#ffffff;
    padding: 6px 16px;
    .bookButton{
      width: 33.3333%
    }
    .ewButton{
      width: 50%;
    }
  }
  .titleDesc{
    height: 32px;
    background: #ffffff;
    padding: 7px 16px;
    font-size: 14px;
    color: #999999;
    line-height: 18px;
  }
  .checkGroup{
    background: #fff;
    padding: 0 16px;
    display: flex;
    flex-flow: wrap;
    .checkbox{
      height: 44px;
      flex-basis: 33.3333%;
    }
  }
  .marginTop{
    margin-top: 12px;
  }
}
</style>
