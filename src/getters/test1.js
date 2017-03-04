export default {
  clickMsgOnTest1: (state, getter) => {
    console.log(getter)
    return `you click me ${state.count}`
  }
}