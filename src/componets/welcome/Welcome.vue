<template>
  <div>
    <img src="../../assets/logo.png" @click="showSucc">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
    showSucc() {
      this.$message('这是一条消息提示')
    }
  }
}
</script>