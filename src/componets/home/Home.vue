<template>
  <div>
    <h2>{{ msg }}</h2>
    <h2>{{ clickMsgOnHome }}</h2>
    <button @click="getHomeMsg">click me</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      getHomeMsg: 'clickHomeButton'
    })
  },
  computed: {
    ...mapState({
      msg: state => state.home.msg
    }),
    ...mapGetters(['clickMsgOnHome'])
  }
}
</script>

