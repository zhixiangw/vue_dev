<template>

  <div id="root">
    <el-row type="flex" class="layout">
      <el-col :span="4" class="left-nav">
        <MenuNav />
      </el-col>
      <el-col :span="20" class="right-content">
        <img src="./assets/logo.png">
        <h2>{{ msg }}</h2>
        <img src="./assets/logo.png">
        <h2>{{ msg }}</h2>
        <img src="./assets/logo.png">
        <h2>{{ msg }}</h2>
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MenuNav from './componets/slide-nav/SlideNav.vue'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  components: {
    MenuNav
  }
}
</script>

<style lang="scss">
  html, body {
    height: 100%;
    width: 100%;
  }
  body {
      font-family: Helvetica Neue,Helvetica,Arial,Microsoft YaHei,sans-serif;
      font-size: 14px;
      line-height: 1.5;
      color: #666;
      background-color: #f6f6f6;
      margin: 0;
      padding: 0;
  }
  #root {
    position: relative;
    height: 100%;
    overflow: auto;
  }
  .layout {
    min-width: 1300px;
    min-height: 100%;
  }
  .left-nav {
    background: #324157;
  }
</style>
