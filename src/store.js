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
    addUser: (state, user) => {
      state.users.push(user)
    },
    removeUser: (state, id) => {
      state.users = state.users.filter(function(user) {
        return user.id != id;
      })
    },
  },
  actions : {
    deleteUser({commit}, id) {
      commit('removeUser', id)
    },
    createUser({commit}, user) {
      commit('addUser', user)
    }
  }
})

export default store
