import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [],
    currentUser: null,
    token: null,
  },
  getters: {
    getCurrentUser(state) {
      return state.currentUser
    },
    getLetra(state) {
      return state.currentUser.username.substring(0, 1)
    }
  },
  mutations: {
    async login(state, data) {
      state.currentUser = data.form
      state.token = data.token
    },
    ADD_USER(state, data) {
      state.users.push(data)
    },
    logout(state) {
      state.currentUser = null
      state.token = null
      console.log(state);
    }
  },
})
