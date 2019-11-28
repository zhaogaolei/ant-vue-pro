<template class="login">
  <div class="login">
    <img class="logo" :src="zmLogo"/>
    <div class="logoName">周末酒店商户版</div>
    <div class="inputOut">
      <van-tabs
        class="zm-vanTabs"
        @click="onClick"
        :border="false"
        :line-width="35"
        :line-height="3"
        title-active-color="#323233"
        title-inactive-color="#969799">
        <van-tab title="密码登录" class="inputArea">
          <van-field
            class="input"
            v-model="username"
            placeholder="请输入账号"
          />
          <van-field
            class="input"
            v-model="password"
            type="password"
            right-icon="closed-eye"
            placeholder="请输入密码"
          />
        </van-tab>
        <van-tab title="验证码登录" class="inputArea">
          <van-field
            class="input"
            v-model="username"
            placeholder="请输入手机号"
          />
          <div class="captchaOut">
            <van-field
              class="inputCaptcha"
              v-model="password"
              type="password"
              placeholder="请输入验证码"
            /><van-button class="getCaptcha" type="danger">获取验证码</van-button>
          </div>
        </van-tab>
      </van-tabs>
      <van-button class="btn" type="danger" @click="this.onLogin">登录</van-button>
    </div>
  </div>
</template>
<script>
import md5 from 'md5'
import { mapActions } from 'vuex'
import zmLogo from '@/assets/m/image/Mask.svg'
import { zmLogin } from '@/api/login'
import zmDevice from '../../utils/native'
import constants from '../../constants'
const { nativeApi } = constants

export default {
  name: 'MLogin',
  data () {
    return {
      zmLogo: zmLogo,
      username: '',
      password: ''
    }
  },
  mounted () {
    // eslint-disable-next-line no-undef
    console.log(navigator.userAgent)
  },
  methods: {
    ...mapActions(['Login', 'Logout']),
    onClick (name, title) {
      // this.$toast(title)
    },
    onLogin () {
      // const postData = new FormData()
      // postData.append('username', 'tom')
      // postData.append('client_id', 'ZMJDBiz')
      // postData.append('client_secret', 'zmjdClient01!')
      // postData.append('grant_type', 'password')
      // postData.append('password', '1q2w3E*')
      // postData.append('scope', 'Author  Product Operation_Log')
      // // postData.append('scope','Author  Product Supplier Operation_Log')
      // zmLogin(postData).then(res => {
      //   console.log(res)
      // }).catch(error => {
      //   console.log(error)
      // })
      // // console.log(`用户名：${this.username},密码：${this.password}`)
      window.localStorage.setItem('TOKEN', '测试路由拦截')
      // 登录操作成功
      this.loginSuccess({ code: 0, result: {} })
    },
    loginSuccess (res) {
      console.log(res)
      // 处理重定向
      if (zmDevice.isZmApp) {
        zmDevice.postMessageToApp(nativeApi.refreshAllView, '', '', '')
        zmDevice.postMessageToApp(nativeApi.closeFullWindow, '', '', '')
      } else {
        const redirect = this.$router.currentRoute.query.redirect
        if (this.$router.currentRoute.query.redirect) {
          this.$router.push(redirect)
        } else {
          this.$router.push({ path: '/home' })
        }
      }
    },
    requestFailed (err) {
      this.isLoginError = true
      this.$notification['error']({
        message: '错误',
        description: ((err.response || {}).data || {}).message || '请求出现错误，请稍后再试',
        duration: 4
      })
    }
  }
}
</script>

<style scoped lang='less'>
 .login{
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo{
      margin-top: 96px;
      width: 60px;
      height: 60px;
    }
    .logoName{
      height: 20px;
      opacity: 1;
      font-size: 14px;
      font-weight: Regular;
      font-family: PingFangSC;
      color: #323233;
      line-height: 20px;
      letter-spacing: 0px;
      margin: 12px 0 49px 0;
    }
   .inputOut{
      width: 327px;
      height: 285px;
      opacity: 1;
      background: #ffffff;
      box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.12);
      text-align: center;
      border-radius: 8px;
      .zm-vanTabs{
        padding-top: 5px;
      }
      .inputArea{
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .input{
          width: 279px;
          height: 44px;
          background: #F7F8FA;
          margin-bottom: 12px;
        }
        .captchaOut {
          width: 279px;
          display: flex;
          margin-bottom: 12px;
          .inputCaptcha{
            width: 167px;
            height: 44px;
            opacity: 1;
            background: rgba(247,248,250,1);
          }
          .getCaptcha{
            width: 104px;
            margin-left: 8px;
          }
        }
      }
      .btn{
        width: 279px;
        height: 44px;
        opacity: 1;
        margin-top: 24px;
      }
   }
 }
</style>
