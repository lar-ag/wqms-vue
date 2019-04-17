// import Vue from 'vue'

// import Vuetify from 'vuetify/lib'
// import 'vuetify/src/stylus/app.styl'

import '../assets/css/all.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify'
import theme from './theme'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify, {
 iconfont: 'fa',
 theme:theme,
})


// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { fas } from '@fortawesome/free-solid-svg-icons'

// Vue.component('font-awesome-icon', FontAwesomeIcon) // Register component globally
// library.add(fas ) // Include needed icons.


// const LAR_ICONS = {
//   'complete': '',
//   'cancel': '',
//   'close': '',
//   'delete': '', // delete (e.g. v-chip close)
//   'clear': '',
//   'success': '',
//   'info': '',
//   'warning': '',
//   'error': '',
//   'prev': '',
//   'next': '',
//   'checkboxOn': '',
//   'checkboxOff': '',
//   'checkboxIndeterminate': '',
//   'delimiter': '', // for carousel
//   'sort': '',
//   'expand': '',
//   'menu': '',
//   'subgroup': '',
//   'dropdown': '',
//   'radioOn': '',
//   'radioOff': '',
//   'edit': ''
// }

