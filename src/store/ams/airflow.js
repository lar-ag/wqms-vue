import { set, toggle } from '@/utils/vuex'
// import monitor from '../../api/monitor'

const LATENCY = 100

const _input = {
  'signal': 29.4,
  'corr': 1.0,
  'tolerance': 10.0,
  'errorTolerance': 5,
  'limits': [{
    'min': 25,
    'max': 32
  }],  
}
const _output = {
  'signal': 29.7,
  'corr': 1.0,
  'tolerance': 5.0,
  'errorTolerance': 5,
  'limits': [{
    'min': 25,
    'max': 32
  }],  
}
const checkInputMosk = (cb) => {
  setTimeout( () => cb(_input), LATENCY)
};
const checkOutputMosk = (cb) => {
  setTimeout( () => cb(_output), LATENCY)
};
// const _MAX_SIGNAL_LEN = 20
// initial state
// shape: [{ id, quantity }]
const state = { 
  settings: null,
  error:0,
  input:{
    signal: 29.4,
    corr: 1.0,
    tolerance: 10.0,
    errorTolerance: 5,
    limits: [{
      min: 25,
      max: 32
    }],
  },
  output:{
    signal: 29.7,
    corr: 1.0,
    tolerance: 10.0,
    errorTolerance: 5,
    limits: [{
      min: 25,
      max: 32
    }],
  }
}

// getters
const getters = {

}

// mutations
const mutations = {
  
  setInput: set('input'),
  setOutput: set('output'),
  setSettings: set('settings'),
  toggleSettings: toggle('settings'),
  // testSignalAdd(state, in_value, out_value) {
  //   state.in.signal.push(in_value);
  //   state.out.signal.push(out_value);
  //   if (state.in.signal.lenght > _MAX_SIGNAL_LEN) {
  //     state.in.signal.shift()
  //   }
  //   if (state.out.signal.lenght > _MAX_SIGNAL_LEN) {
  //     state.out.signal.shift()
  //   }
  // }
}

const actions = {
  readInput ({ commit }) {
    checkInputMosk(input=> {
      commit('setInput', input)
    })
  },
  readOutput ({ commit }) {
    checkOutputMosk(output=> {
      commit('setOutput', output)
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
