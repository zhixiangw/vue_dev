import createLogger from '../node_modules/vuex/src/plugins/logger.js'
import index from './componets/Index.vue'
import home from './componets/Home.vue'

export default (Vuex) => {
  return new Vuex.Store({
    modules: {
      index,
      home
    },
    plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : []
  })
}