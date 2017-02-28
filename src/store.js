import createLogger from '../node_modules/vuex/src/plugins/logger.js'

const moduleA = {
  state: {
    msg: 'Welcome to Your INDEX PAGE on Vue.js App'
  }
}

const moduleB = {
  state: {
    msg: 'Welcome to Your HOME PAGE on Vue.js App'
  }
}

export default (Vuex) => {
  return new Vuex.Store({
    modules: {
      moduleA,
      moduleB
    },
    plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : []
  })
}