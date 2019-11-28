<template>
  <div class="about">
    <div class="aboutTitle">
      <div class="userName">用户名</div>
      <div class="userTel">138****6666</div>
    </div>
    <div class="aboutMe">
      <van-cell title="关于我们" is-link @click="onAboutMe" size="large"/>
    </div>
    <div class="logOut">
      <van-button plain hairline type="danger" @click="logOut">退出登录</van-button>
    </div>
  </div>
</template>

<script>
import { SET_ACTIVE_STATUS } from '../../store/mutation-types'
import zmDevice from '../../utils/native'
import mixin from '../../nativeMixin'
export default {
  name: 'My',
  mixins: [ mixin ],
  methods: {
    onAboutMe () {
      this.$gourl('my/about', this.$router)
    },
    logOut () {
      window.localStorage.removeItem('TOKEN')
      window.localStorage.removeItem(SET_ACTIVE_STATUS)
      if (zmDevice.isZmApp) {
        this.openLogin()
      } else {
        this.$router.push({ path: '/login', replace: true })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.about{
  .aboutTitle{
    height: 84px;
    background: #ffffff;
    padding:21px 0;
    text-align:center;
    .userName{
      height: 20px;
      font-size: 18px;
      font-family: PingFangSC;
      color: #323233;
      line-height: 20px;
      letter-spacing: 0px;
    }
    .userTel{
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC;
      color: #323233;
      line-height: 20px;
      letter-spacing: 0px;
      padding-top: 2px;
    }
  }
  .aboutMe{
    margin-top: 12px;
  }
  .logOut{
    text-align: center;
    position: absolute;
    bottom: 96px;
    width: 100%;
    button{
      width: 311px;
    }
  }
}

</style>
