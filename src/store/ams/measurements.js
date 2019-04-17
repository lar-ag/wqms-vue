import monitor from './monitor';

// initial state
const state = {
  measurements: []
}

// getters
const getters = {
  
}

// actions
const actions = {
  getMeasurements ({ commit }) {
    monitor.getMethods(methods => {
      commit('setMethods', methods)
    })
  }
}

// mutations
const mutations = {
  setMeasurements (state, measurements) {
    state.measurements = measurements
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
