import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import { store } from './store/index'

//firebase
import * as firebase from 'firebase'
import '../config/firebaseInit'

import axios from 'axios'
import VModal from 'vue-js-modal'

Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.use(VModal, {
  dynamic: true
})

new Vue({
  router,
  store,
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        //this.$router.push('/search')
        const app = firebase.auth().currentUser
        console.log(app.uid, app.email, app.displayName, app.photoURL)
      } else {
        //this.$router.push('/')
      }
    })
  },
  render: h => h(App)
}).$mount('#app')
