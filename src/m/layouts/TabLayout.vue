<template>
  <div>
    <router-view />
    <van-tabbar
      v-model="active"
      active-color="#ea5144"
      inactive-color="#323233">
      <van-tabbar-item to="/home" @click="switchTab(active)">
        <span>主页</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.homeActive : icon.homeInactive"
        >
      </van-tabbar-item>
      <van-tabbar-item to="/my" @click="switchTab(active)">
        <span>我的</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.mineActive : icon.mineInactive"
        >
      </van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
import Vue from 'vue'
import homeIconActive from '../../assets/m/image/home@1x.png'
import homeIconInActive from '../../assets/m/image/home@1x-2.png'
import mineIconActive from '../../assets/m/image/mine@1x.png'
import minehomeIconActiveIcon from '../../assets/m/image/mine@1x-2.png'
import { mapState, mapGetters, mapActions } from 'vuex'
import { SET_ACTIVE_STATUS } from '../store/mutation-types'
import { local } from '../utils/storage'
import { ContactsOutline } from '@ant-design/icons/lib/dist'

export default {
  name: 'TabLayoutView',
  data () {
    return {
      active: Number(local.getItem(SET_ACTIVE_STATUS)),
      icon: {
        homeActive: homeIconActive,
        homeInactive: homeIconInActive,
        mineActive: mineIconActive,
        mineInactive: minehomeIconActiveIcon
      }
    }
  },
  computed: {
    ...mapState({
      activeStatus: state => {
        return state.tab.activeStatus
      }
    })
  },
  methods: {
    switchTab (active) {
      this.$store.dispatch('SwitchTab', active)
    }
  },
  created () {
    const { current } = this.$router.history
    if (current.path === '/home') {
      this.active = 0
    } else {
      this.active = 1
    }
  }
}
</script>

<style scoped>

</style>
