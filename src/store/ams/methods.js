/**
 * Mocking client-server processing
 */

import {
  set
} from '@/utils/vuex'

// Mosk methods _parameters.
const _initialState = [
  {
    "id": "uvtconly",
    "name": "TC Only",
    "unit": "ppm",
    "online": null,
    "remote": false,
    "check": null,
    "autocal": null,
    "sensor": {
      "id": "edinburght2000",
    },
  },
  {
    "id": "uvtoc",
    "name": "TOC",
    "unit": "ppm",
    "online": null,
    "remote": false,
    "check": null,
    "autocal": null,
    "sensor": {
      // "signal": [0.1, 0.1032],
      "id": "edinburght2000"
    },
  }
];

const LATENCY = 100

const readParameters = (cb) => {
  setTimeout(() => cb(_initialState), LATENCY)
};


// initial state
const state = {
  all: null,
}


// getters
const getters = {
  // // currentMessages : state => {
  // //   return thread.messages
  // //     ? thread.messages.map(id => state.messages[id])
  //     : []
}

// actions
const actions = {
  read({
    commit
  }) {
    readParameters(methods => {
      commit('setAll', methods)
    })
  },
  save({
    commit
  }) {
    return new Promise((resolve) => {
      commit("")
      setTimeout(() => {
        resolve()
      }, 1000)
    })
  },
}

// mutations
const mutations = {
  setAll: set('all'),
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
