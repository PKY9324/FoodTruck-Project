import Vue from 'vue'
import Vuex from 'vuex'
import { firebase } from '@firebase/app'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null,
    isAuth: false
  },
  getters: {
    user(state) {
      return state.user
    }
  },
  mutations: {
    LOGIN_SUCCESS(state) {
      state.isAuth = true
    },
    LOGOUT_SUCCESS(state) {
      state.isAuth = false
    }
  },
  actions: {
    signUserInFacebook({ commit }) {
      firebase
        .auth()
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(user => {
          commit('LOGIN_SUCCESS')
        })
        .catch(error => {
          console.log(error)
        })
    },
    signUserInGoogle({ commit }) {
      firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(user => {
          commit('LOGIN_SUCCESS')
        })
        .catch(error => {
          console.log(error)
        })
    },
    logout({ commit }) {
      firebase.auth().signOut()
      commit('LOGOUT_SUCCESS')
    }
  },
  plugins: [createPersistedState()]
})
