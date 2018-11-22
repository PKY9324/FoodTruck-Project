import Vue from 'vue'
import App from './App.vue'
import routes from "./router/index"

import axios from "axios"
import VModal from "vue-js-modal"

Vue.prototype.$http = axios;

Vue.config.productionTip = false

Vue.use(VModal, {
  dynamic: true
});

new Vue({
  router: routes,
  render: h => h(App)
}).$mount('#app')