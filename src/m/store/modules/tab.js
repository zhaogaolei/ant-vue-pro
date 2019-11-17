import Vue from 'vue'
import { SET_ACTIVE_STATUS } from '../mutation-types'
import { local } from '../../utils/storage'

const tab = {
  state: {
    activeStatus: 0
  },

  mutations: {
    [SET_ACTIVE_STATUS]: (state, activeStatus) => {
      local.setItem(SET_ACTIVE_STATUS, activeStatus)
      // state.activeStatus = activeStatus
    }
  },

  actions: {
    // tab切换
    SwitchTab ({ commit }, activeStatus) {
      commit(SET_ACTIVE_STATUS, activeStatus)
    }
  }
}

export default tab
