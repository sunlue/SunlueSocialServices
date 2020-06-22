import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      userInfo: {},
    }),
    mutations: {
      SET_USER_INFO: (state, data) => {
        state.userInfo = data
      }
    },
    getters: {

    },
    actions: {

    }
  })
}

export default createStore
