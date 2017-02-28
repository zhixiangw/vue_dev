<template>
  <div>
    <h2>{{ msg }}</h2>
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      msg: this.$store.state.moduleA.msg
    }
  },
  computed: mapState({
    name: state => {
      return state.moduleA.msg
    }
  })
}
</script>

