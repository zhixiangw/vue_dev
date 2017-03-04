<template>
  <div id="root">
    <HeadNav />
    <el-row type="flex" class="layout">
      <el-col :span="4" class="left-nav">
        <MenuNav />
      </el-col>
      <el-col :span="20" class="right-content">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MenuNav from '../slide-nav/SlideNav.vue'
import HeadNav from '../head-nav/HeadNav.vue'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  components: {
    HeadNav,
    MenuNav
  },
  methods: {
    showSucc() {
      this.$message('这是一条消息提示')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './index.scss'
</style>
