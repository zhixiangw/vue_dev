export default [
  { path: '/', redirect: '/login' },
  { path: '/welcome', component: resolve => require(['./common/home-container/PageContainer.vue'], resolve),
    children: [
      { path: '/', component: resolve => require(['./componets/welcome/Welcome.vue'], resolve) },
      { path: '/test1', component: resolve => require(['./componets/test1/Test1.vue'], resolve) },
      { path: '/home', component: resolve => require(['./componets/home/Home.vue'], resolve) }
    ]
  },
  { path: '/login', component: resolve => require(['./componets/login/Login.vue'], resolve) }
]
