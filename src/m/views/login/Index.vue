<template class="login">
  <div class="login">
    <h2>登录</h2>
    <van-cell-group>
      <van-field
        v-model="username"
        required
        label="用户名"
        placeholder="请输入用户名"
      />

      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>
    <van-button type="primary" @click="this.onLogin">登录</van-button>
  </div>
</template>
<script>

import Vue from 'vue'
import { CellGroup, Button } from 'vant'
Vue.use(Button).use(CellGroup)

export default {
  name: 'MLogin',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onLogin () {
      console.log(`用户名：${this.username},密码：${this.password}`)
    }
  }
}
</script>

<style scoped>
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
    flex-direction: column;
}
</style>
