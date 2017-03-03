<template>
  <div>
    <h2>{{ msg }}</h2>
    <h2>{{ name }}</h2>
    <button @click="getHomeMsg">click me</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { home as homeAction } from '../actions'
export default {
  state: {
    name: 'home!!!'
  },
  data () {
    return {
      msg: 'home page test!',
      name: 'yep!'
    }
  },
  methods: {
    ...mapActions({
      getHomeMsg: homeAction.GET_HOME_MSG
    })
  },
  actions: {
    [homeAction.GET_HOME_MSG](context) {
      homeAction.getHomeMsg(context)
    }
  },
  mutations: {
    [homeAction.GET_HOME_MSG](state) {
      state.name = 'GET_HOME_MSG'
    }
  }
}
</script>

