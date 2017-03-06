import Home from './componets/home/Home.vue'
import Test1 from './componets/test1/Test1.vue'
import Welcome from './componets/welcome/Welcome.vue'
import Login from './componets/login/Login.vue'

import HomeContainer from './common/home-container/PageContainer.vue'

export default [
  { path: '/', redirect: '/login' },
  { path: '/welcome', component: HomeContainer,
    children: [{
      path: '/', component: Welcome
    }, {
      path: '/test1', component: Test1
    }, {
      path: '/home', component: Home
    }]
  },
  { path: '/login', component: Login }
]
