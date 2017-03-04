<template>
  <div>
    <h2>{{ msg }}</h2>
    <h2>{{ clickMsgOnTest1 }}</h2>
    <button
      @click="getTest1Msg({a: 1, e: $event})">
      click me
    </button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      getTest1Msg: 'clickTest1Button'
    })
  },
  computed: {
    ...mapState({
      msg: (state) => {
        return state.test1.msg
      }
    }),
    ...mapGetters(['clickMsgOnTest1'])
  }
}
</script>

