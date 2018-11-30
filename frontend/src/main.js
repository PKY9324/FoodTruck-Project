import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import { store } from './store/index'

//firebase
import firebase from 'firebase/app'
import '../config/firebaseInit'

import axios from 'axios'
import VModal from 'vue-js-modal'
import VueFire from 'vuefire'
import InstantSearch from 'vue-instantsearch'
import Toolbar from 'vue-js-toolbar'

Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.use(InstantSearch)
Vue.use(VueFire)
Vue.use(Toolbar)

// Vue.use(require('vue-script2'))

// Vue.use(Ads.Adsense)
// Vue.use(Ads.InArticleAdsense)
// Vue.use(Ads.InFeedAdsense)

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
      } else {
        //this.$router.push('/')
      }
    })
  },
  render: h => h(App)
}).$mount('#app')
