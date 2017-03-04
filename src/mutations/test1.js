import { test1 as test1Action } from '../actions'
export default {
  [test1Action.CLICK_TEST1_BUTTON] (state, payload) {
    console.log('mutation_state----mutation_payload')
    console.log(state, payload)
    state.count += 2
  }
}