/**
 * Vuex
 *
 * @library
 *
 * https://vuex.vuejs.org/en/
 */

// Lib imports
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import VueLocalStorage from 'vue-localstorage'

import createLogger from 'vuex/dist/logger'


// const logger = createLogger({
//   collapsed: false, // auto-expand logged mutations
//   filter (mutation, stateBefore, stateAfter) {
//     // returns `true` if a mutation should be logged
//     // `mutation` is a `{ type, payload }`
//     return mutation.type !== "aBlacklistedMutation"
//   },
//   transformer (state) {
//     // transform the state before logging it.
//     // for example return only a specific sub-tree
//     return state.subTree
//   },
//   mutationTransformer (mutation) {
//     // mutations are logged in the format of `{ type, payload }`
//     // we can format it any way we want.
//     return mutation.type
//   },
//   logger: console, // implementation of the `console` API, default `console`
// })

// Store functionality
import app from './app'
import monitor from './ams/monitor'
import errors from './ams/errors'
import methods from './ams/methods'
import uvlamp from './ams/uvlamp'
import airflow from './ams/airflow'
import channels from './ams/channels';
Vue.use(Vuex)
Vue.use(VueLocalStorage, {
  name: 'ams-frontend',
  bind: true //created computed members from your variable declarations
})

// Create a new store
const store = new Vuex.Store({
  modules: {
    app,
    monitor,
    errors,
    methods,
    channels,
    uvlamp,
    airflow,
  },
  plugins: [createPersistedState,createLogger]
})

export default store
