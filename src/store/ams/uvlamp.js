/**
 * UV-Lamp API and mosking functions and data
 */

import { set, toggle } from '@/utils/vuex'

const LATENCY = 100


const _statusMosk = {
  "start": 0,
  "lifetime": 100,
  "ligthing": false,
  "state": 0,
}


const readMoskStatus = (cb) => {
  setTimeout(() => cb(_statusMosk), LATENCY)
};



// initial state
// shape: [{ id, quantity }]
const state = {
  status: _statusMosk,
  settings: null,
}

// getters
const getters = {

}

// mutations
const mutations = {
  setStatus: set("status"),
  setSettings: set("settings"),
  toggleSettings: toggle("settings"),
}

const actions = {
  readStatus({
    commit
  }) {
    readMoskStatus(lampe => {
      commit('setStatus', lampe)
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
