import createLogger from '../node_modules/vuex/src/plugins/logger.js'
import modules from './modules'

console.log(modules)
export default (Vuex) => {
  return new Vuex.Store({
    modules,
    plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : []
  })
}