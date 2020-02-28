interface State {
  drawer: boolean
}

const state: State = {
  drawer: true
}

const mutations = {
  toggleDrawer(state: State) {
    state.drawer = !state.drawer
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
