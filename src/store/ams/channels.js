import {
  set
} from '@/utils/vuex'

// initial state
const _initialState = [{
  "method": "uvtconly",
  "result": 100.0,
  "name": "TC",
  "analogout": 13,
}, {
  "method": "uvtconly",
  "result": 100.0,
  "name": "TC-test",
  "analogout": 14,
},{
  "method": "uvtoc",
  "result": 100.0,
  "name": "TC",
  "analogout": 13,
}, {
  "method": "uvtoc",
  "result": 100.0,
  "name": "TIC",
  "analogout": 14,
}, {
  "method": "uvtoc",
  "result": 100.0,
  "name": "TOC",
  "analogout": 15,
},
]

const LATENCY = 100
const readParameters = (cb) => {
  setTimeout(() => cb(_initialState), LATENCY)
};


const state = {
  all: _initialState,
  dashboard: []
}

// getters
const getters = {
  methodChannels: (state,method) => {
    return state.all.filter(ch => ch.method==method)
  }
}

// actions
const actions = {
  read({
    commit
  }) {
    readParameters(channels => {
      commit('setAll',channels)
    })
  }
}

// mutations
const mutations = {
  setAll : set("channels"),
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
