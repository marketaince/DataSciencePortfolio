// Imports
import Vue from 'vue'
import Vuex from 'vuex'

import * as dogAppView from '@/store/modules/dogAppView'

Vue.use(Vuex)

// Export Vuex Store
export default new Vuex.Store({
  modules: {
    dogAppView
  },
  state: {}
})