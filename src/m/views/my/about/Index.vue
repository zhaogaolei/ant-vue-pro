<template>
  <div>
    <div class="logoTitle">
      <img :src="zmLogo" alt="" srcset="">
      <span>周末酒店商户版</span>
    </div>
    <van-cell-group>
      <van-cell v-if="deviceType" title="版本号" :value="appVerNo" size="large" />
      <van-cell title="官网" value="www.zmjiudian.com" url="http://www.zmjiudian.com" size="large"/>
    </van-cell-group>
  </div>
</template>

<script>
import zmLogo from '@/assets/m/image/Mask.svg'
import zmDevice from '../../../utils/native'
export default {
  name: 'About',
  data () {
    return {
      zmLogo: zmLogo,
      deviceType: zmDevice.isZmApp,
      appVerNo: zmDevice.appVerNo
    }
  }
}
</script>

<style lang="less" scoped>
 .logoTitle{
    height: 212px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img{
      width: 60px;
      height: 60px;
    }
    span{
      height: 20px;
      opacity: 1;
      font-size: 14px;
      font-family: PingFangSC;
      color: #323233;
      line-height: 20px;
      letter-spacing: 0px;
      margin-top: 12px;
    }
 }
</style>
