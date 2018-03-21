// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App.vue'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import router from './router'
import Axios from 'axios'
 
Vue.use(Vuetify)
Axios.defaults.headers.common.Accept = 'application/json'
Vue.$http = Axios

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components:{ App },
  render: h => h(App)
}).$mount('#app')