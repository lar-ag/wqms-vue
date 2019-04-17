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
const LATENCY = 100

const readParameters = (cb) => {
  setTimeout(() => cb(_parameters), LATENCY)
};


// initial state
const state = {
  id: "uvtc-only",
  name: "TC Only",
  unit: "ppm",
  sensor: {
    id:"edin2000",
  },
  online: 1200,
  check: 36200,
  remote: false,
  error: {
    number:0,
    message:"" 
  },
  channels: [{
      id: 0,
      method: 1,
      result: 100.0,
      name: "TC",
      analog: 1,
    },
  ]
}


// getters
const getters = {}

// actions
const actions = {
}

// mutations
const mutations = {
  setChannels: set('parameters'),
  setOnline: set('online'),
  setCheck: set('check'),
  setChannels: set('channels'),
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
