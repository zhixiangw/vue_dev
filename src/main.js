import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ElementUI)
import Store from './store'

import App from './App.vue'
import routes from './router'

const router = new VueRouter({
  routes
})
const store = Store(Vuex)

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})
