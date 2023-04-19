import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [],
    currentUser: {
      nome: 'Lael',
      email: 'lael@lael.com',
    }
  },
  getters: {
    getCurrentUser(state) {
      return state.currentUser
    },
    getLetra(state) {
      return state.currentUser.nome.substring(0, 1)
    }
  },
  mutations: {
    async login(state, data) {
      console.log(state);
      const user = await state.users.find((user) => user.email === data.email)[0]
      if (user.email) {
        state.currentUser = user
      } else {
        state.currentUser = {}
      }
      this.$router.push('Inicio')
    },
    ADD_USER(state, data) {
      console.log(state);
      console.log(data);
      state.users.push(data)
    },
    logout(state) {
      state.currentUser = {}
      console.log(state);
    }
  },
})
