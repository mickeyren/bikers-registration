import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

import usersData from './api/users.json'

const store = new Vuex.Store({
  plugins: [],
  state: {
    users: usersData.users,
  },
  getters: {
    user: state => state.user,
    users: state => state.users,
  },
  mutations: {
    users: (state, data) => {
      state.users = data
    },
    addUser: (state, user) => {
      state.users.push(user)
    }
  },
  actions : {
    fetchUsers({state, commit}) {
      commit('users', state.users )
    },
    createUser({commit}, user) {
      commit('addUser', user)
    }
  }
})

export default store
