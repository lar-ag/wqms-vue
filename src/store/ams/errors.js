/**
 * Mocking error managment client-server processing
 */

const LATENCY = 100




const _errors = [{
  "id": 1,
  "tolerance": 0,
  "state": 1,
  "description": "IO critical"
},
{
  "id": 2,
  "tolerance": 1,
  "state": 0,
  "description": "backend connection fail"
},
{
  "id": 3,
  "tolerance": 8,
  "state": 0,
  "description": "IO critical"
},
{
  "id": 1835,
  "tolerance":6,
  "state": 0,
  "description": "Air flow"
},{
  "id": 1992,
  "tolerance": 3,
  "state": 1,
  "description": "IO critical"
},
{
  "id": 200,
  "tolerance": 2,
  "state": 0,
  "description": "backend connection fail"
},
{
  "id": 300,
  "tolerance": 7,
  "state": 0,
  "description": "IO critical"
},
{
  "id": 1945,
  "tolerance": 8,
  "state": 0,
  "description": "testing error "
},

];

const checkMosk = (cb) => {
  setTimeout(() => cb(_errors), LATENCY)
};

// initial state
// shape: [{ id, quantity }]
import { set } from '@/utils/vuex'


const state = {
  all: [{
      "id": 1,
      "critical": true,
      "state": 1,
      "description": "IO critical"
    },
    {
      "id": 2,
      "critical": true,
      "state": 0,
      "description": "backend connection fail"
    },
    {
      "id": 3,
      "critical": true,
      "state": 0,
      "description": "IO critical"
    },
    {
      "id": 1835,
      "critical": false,
      "state": 0,
      "description": "Air flow"
    },

  ],
  color: "amber",
  criticals: 0,
  warnings: 0,
};

// getters
const getters = {
  getCriricals: state => {
    return state.all.filter(err => err.critical && err.trigger)
  },
  getWarnings: state => {
    return state.all.filter(err => !err.critical && err.trigger)
  },
  countErrors: (state) => {
    return state.all.length;
  },
}

// mutations
const mutations = {
  // setWarning (state,errors) {
  //   state.warning = errors
  // },
  // addWarning(state,error) {
  //   state.warning.push(error)
  // },
  // setCritical (state,errors) {
  //   state.critical = errors
  // },
  // addCritical(state,error) {
  //   state.critical.push(error)
  // },
  setErrors: set('all'),
  setWarnings: set('warnings'),
  setColor: set('color'),
  setCriticals: set('criticals'),
  //  setSerial (state, serial) {
  //     state.serial= serial
  //   },
  //   setControl (state, control) {
  //     state.control = control
  //   },
  //   setMethods (state, methods) {
  //     state.methods = methods
  //   },
  //   setErrors(state, errors) {
  //     state.errors = errors
  //   },
}

const actions = {
  // getAllMethods ({ commit }) {
  //   monitor.getMethods(methods => {
  //     console.log("test log")
  //     commit('setMethods', methods)
  //   })
  // },err
  check({commit}) {
    checkMosk(err => {
      commit("setErrors",err )
      commit("setWarnings",err.filter(err => err.tolerance > 4 ).length)
      var crits = err.filter(err => err.tolerance < 5 ).length
      commit("setCriticals",crits)
      var color = "amber"
      if(crits) { color = "red" }
      commit("setColor",color)
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
