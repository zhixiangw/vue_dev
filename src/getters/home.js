export default {
  clickMsgOnHome: (state, getter) => {
    console.log(getter)
    return `you click me ${state.count}`
  }
}
