<template>
  <div>
    <h2>{{ msg }}</h2>
    <button @click="linkTo"><router-link to="/welcome">click me</router-link></button>
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
    }
  }
}
</script>

<style lang="css" scoped>
  h2{
    margin: 0;
  }
</style>

