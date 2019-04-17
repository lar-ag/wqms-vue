/**
 * Mocking client-server processing
 */

import {
  set
} from '@/utils/vuex'

// const _channels = [
// {
//   "method": "uvtc-only",
//   "result": 100.0,
//   "name": "TC-user",
//   "analog": 1,
// },
// ]
// Mosk methods _parameters.
const _initialState = {
}
const LATENCY = 100

const readStatus = (cb) => {
  setTimeout(() => cb(_parameters), LATENCY)
};


// initial state
const state = {
  activated: true,
  id: "edin2000",
  name:"NDir1"
}


// getters
const getters = {}

// actions
const actions = {
  read({
    commit
  }) {
    readParameters(methods => {
      commit('setParameters', methods)
    })
  },
  saveIntervals({
    commit
  }, intervals) {
    return new Promise((resolve, reject) => {
      if (browser.runtime.lastError) return reject(browser.runtime.lastError);
      setTimeout(() => {
        commit('setIntervals', intervals)
        resolve()
      }, 1000)
    })
  },
  saveIntervals({
    commit
  }, intervals) {
    return new Promise((resolve, reject) => {
      if (browser.runtime.lastError) return reject(browser.runtime.lastError);
      setTimeout(() => {

        commit('setIntervals', intervals)
        resolve()
      }, 1000)
    })
  }
}

// mutations
const mutations = {
  setParameters: set('parameters'),
  setChannels: set('parameters'),
  setIntervals: set('intervals'),
  updateTime: set('timestamp'),
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
