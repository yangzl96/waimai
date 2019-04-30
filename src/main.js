import Vue from 'vue'
import App from './App'
import router from './router'
let vm = new Vue({
  el: '#app',
  render: h => h(App),
  router
})
Vue.use({
  vm
})
