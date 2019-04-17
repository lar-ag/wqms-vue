import { set, toggle } from '@/utils/vuex'
// initial state
// shape: [{ id, quantity }]
const state = {
  drawer: null,
  airflow: null,
  sensor: null,
  uvlamp: null,
  device: 'desktop',
  touchkeyboard: {
    visible: false,
    layout: "normal"
  },
  theme: '',
  layout: '',
  contentWidth: '',
  fixedHeader: false,
  fixSiderbar: false,
  autoHideHeader: false,
  color: null,
  weak: false
}

// getters
const getters = {}

// mutations
const mutations = {
  setDrawer: set('drawer'),
  toggleDrawer: toggle('drawer'),
  // hideKeyboard(state)  {
  //   state.touchkeyboard = false
  // },
  // showKeyboard(state,layout)  {
  //   if ( layout === "normal"){
  //     state.touchkeyboard.layout = "normal"
  //   } else if(layout === "")

  //   state.touchkeyboard = true
  // }, 
}

const actions = {
 closeTouchKeyboard ({ commit }) {
    commit('hideKeyboaed')
  },
  openTouchKeyboard ({ commit }) {
    commit('showKeyboaed')
  },
  open
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
