import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App'
import router from './router'
import store from './store'
import './mock/mockserver'
//  注册全局组件标签
Vue.component(Button.name, Button) //  <mt-button>
let vm = new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
Vue.use({
  vm
})
