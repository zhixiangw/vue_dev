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
      this.$axios.post('http://zhixiang.nblogger.cn/api/v1/sd_manage/list', {
        status: 0,
        name: null
      }).then((res) => {
        console.log(res)
        this.$message('这是一条消息提示')
      })
    }
  }
}
</script>