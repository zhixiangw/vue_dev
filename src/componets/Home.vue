<template>
    <h2>{{ msg }}</h2>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      msg: this.$store.state.moduleB.msg
    }
  }
}
</script>

