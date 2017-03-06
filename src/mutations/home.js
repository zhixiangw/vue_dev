import { home as homeAction } from '../actions'
export default {
  [homeAction.CLICK_HOME_BUTTON] (state, payload) {
    console.log('mutation_state----mutation_payload')
    console.log(state, payload)
    state.count += 1
  }
}
