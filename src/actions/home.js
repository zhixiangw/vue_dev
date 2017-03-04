export const CLICK_HOME_BUTTON = 'CLICK_HOME_BUTTON'
export function clickHomeButton({ commit }, payload) {
  console.log('----->this is home click')
  console.log(payload)
  commit(CLICK_HOME_BUTTON, payload)
}