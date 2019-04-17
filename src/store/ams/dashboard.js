const _initialChannels = [{
    "id": 1,
    "method": 1,
    "result": 100.0,
    "name": "TC-Result1"
  },
  {
    "id": 2,
    "method": 1,
    "result": 100.0,
    "name": "TC-Result2"
  },
  ];
  
  
// initial state
const state = {
}

// getters
const getters = {
  
}

// actions
const actions = {
  // getAllMethods ({ commit }) {
  //   monitor.getMethods(methods => {
  //     console.log("test log")
  //     commit('setMethods', methods)
  //   })
  // },
  // getAllChannels ({ commit }) {
  //   monitor.getAllChannels(channels => {
  //     commit('setChannels',channels)
  //   })
  // }
}

// mutations
const mutations = {
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}