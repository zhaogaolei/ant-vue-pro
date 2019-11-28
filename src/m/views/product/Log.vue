<template>
  <div>
    <div class="logBody" v-for="i in 5" :key="i">
      <div class="headerInfo">
        <div class="opName">
          <span>微笑</span>
          <span>2019/11/10 09:12</span>
        </div>
        <div class="opInfo">
          <label>操作：</label><span>修改</span>
          <label>操作项：</label><span>价格</span>
        </div>
      </div>
      <van-cell-group>
        <van-field
          rows="1"
          autosize
          type="textarea"
          readonly
          value="¥59"
        ><div slot="label" class="labelTitle">原值</div></van-field>
        <van-field
          rows="1"
          autosize
          label="新值"
          type="textarea"
          readonly
          value="1晚皇冠高级房 48平米 大床1.8米/2双床1.2米 双人自助早餐 木桶钳鱼套餐一份 (午餐或晚餐二选一，下单时需备注，如无备注默认晚餐) 湿地公园门票2张（前台领取） #【重要提示】 该房券支持（未兑换）随时退/过期自动退 此房券入住有效期从2019.11.14起至2020.12.31 加价政策(每间夜)： 周六加价100元, 2020.1.24加价100元, 2020.1.25加价250元, 2020.1.26--2020.1.28加价350元, 2020.1.29加价100元, 2020.4.5加价100元, 2020.5.2加价100元, 2020.6.26加价100元, 2020.10.1加价100元, 2020.10.2加价250元, 2020.10.3--2020.10.5加价350元, 2020.10.6加价100元,"
        ><span slot="label" class="labelTitle">新值</span></van-field>
      </van-cell-group>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Log',
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.logBody{
  margin-bottom:12px;
}
.headerInfo{
  height: 72px;
  padding:13px 16px;
  background: #ffffff;
  .opName{
    display: flex;
    justify-content: space-between;
    span:nth-child(1){
      font-weight: 800;
      font-size: 16px;
      color: #323233;
      line-height: 20px;
      letter-spacing: 0px;
    }
    span:nth-child(2){
      font-size: 14px;
      color: #969799;
      line-height: 18px;
      letter-spacing: 0px;
    }
  }
  .opInfo{
    margin-top: 8px;
    font-size: 14px;
    font-family: PingFangSC;
    line-height: 18px;
    letter-spacing: 0px;
    label{
      color:#969799;
    }
    span{
      color:#323233;
      margin-right: 30px;
    }
  }
  .labelTitle{
    color: #969799 !important;
  }
}
</style>
