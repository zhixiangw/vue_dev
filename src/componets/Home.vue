<template>
  <div>
    <h2>{{ msg }}</h2>
    <button @click="getHomeMsg">click me</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { home as homeAction } from '../actions'
export default {
  data () {
    return {
      msg: this.$store.state.moduleB.msg
    }
  },
  methods: {
    getHomeMsg({ dispatch }) {
      dispatch(homeAction.GET_HOME_MSG)
    }
  },
  actions: {
    [homeAction.GET_HOME_MSG](context) {
      homeAction.getHomeMsg(context)
    }
  }
}
</script>

