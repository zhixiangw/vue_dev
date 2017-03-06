export const CLICK_TEST1_BUTTON = 'CLICK_TEST1_BUTTON'
export function clickTest1Button ({ commit }, payload) {
  console.log('----->this is test1 click')
  console.log(payload)
  commit(CLICK_TEST1_BUTTON, payload)
}
