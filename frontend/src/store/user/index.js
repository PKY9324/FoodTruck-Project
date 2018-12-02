import * as firebase from 'firebase'

export default {
  state: {
    user: null,
    isAuth: false
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    LOGIN_SUCCESS(state) {
      state.isAuth = true
    },
    LOGOUT_SUCCESS(state) {
      state.isAuth = false
    }
  },
  actions: {
    signUserInGoogle({ commit }) {
      commit('setLoading', true)
      commit('clearError')
      firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          }
          commit('setUser', newUser)
          commit('LOGIN_SUCCESS')
        })
        .catch(error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        })
    },
    signUserInFacebook({ commit }) {
      commit('setLoading', true)
      commit('clearError')
      firebase
        .auth()
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          }
          commit('setUser', newUser)
          commit('LOGIN_SUCCESS')
        })
        .catch(error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        })
    },
    autoSignIn({ commit }, payload) {
      commit('setUser', {
        id: payload.uid,
        name: payload.displayName,
        email: payload.email,
        photoUrl: payload.photoURL
      })
    },
    logout({ commit }) {
      firebase.auth().signOut()
      commit('setUser', null)
      commit('LOGOUT_SUCCESS')
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  }
}
