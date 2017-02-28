import App from './App.vue'

const Home = { template: '<div>home</div>' }
const Index = { template: '<div>index</div>' }

export default [
  { path: '/index', component: Index },
  { path: '/home', component: Home }
]
