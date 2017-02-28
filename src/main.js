import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './App.vue'
import routes from './router'

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
