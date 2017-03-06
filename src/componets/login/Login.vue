<template>
  <div>
    <h2>{{ msg }}</h2>
    <button @click="linkTo">
      click me
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'LOGIN'
    }
  },
  methods: {
    linkTo() {
      console.log('hey, you clicked me!')
      this.$router.push('/welcome')
    }
  }
}
</script>

<style lang="css" scoped>
  h2{
    margin: 0;
  }
</style>

