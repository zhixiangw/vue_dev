<template>
  <div>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      msg: 'index page test!'
    }
  }
}
</script>

