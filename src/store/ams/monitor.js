
const _uv_monitor = {
  "serial": "UV1900001",
  "model": "QuickTOCuv",
  "control": {
    "state": 0,
    "text": "Stop"
  }
  //   {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
  //   {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
  //   {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
}

const LATENCY = 100

const getMonitor = (cb) => {
  setTimeout(() => cb(_uv_monitor), LATENCY)
}

// const setSerial = (serial, cb) => {
//   setTimeout(() => {
//     // simulate random checkout failure.
//     _uv_monitor.serial = serial;
//     cb()
//   }, LATENCY)
// }

const state = {
  serial: "UV19000001",
  model: "QuickTOCuv",
  control: {
    state: 0,
    name: "stop"
  },
}

// getters
const getters = {}

// mutations
const mutations = {
  setSerial(state, serial) {
    state.serial = serial
  },
  setControl(state, control) {
    state.control = control
  },
  setMethods(state, methods) {
    state.methods = methods
  },
  setErrors(state, errors) {
    state.errors = errors
  },
}

const actions = {
  getMonitorInfo({
    commit
  }) {
    getMonitor(monitor => {
      commit('setSerial', monitor.serial)
      commit('setControl', monitor.control)
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
