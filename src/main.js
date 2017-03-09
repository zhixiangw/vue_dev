import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-default/index.css'
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ElementUI)
import Store from './store'

import PageContainer from './common/page-container/PageContainer.vue'
import routes from './router'

const router = new VueRouter({
  routes,
  mode: 'history' // 依赖 HTML5 History API 和服务器配置,路由呈现url形式，而非锚点模式
})
const store = Store(Vuex)

Vue.prototype.$axios = axios

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(PageContainer)
})

