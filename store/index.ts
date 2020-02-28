import Vue from 'vue'
import Vuex from 'vuex'
import DrawerModule from './modules/drawer'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    DrawerModule
  }
})

export default store
