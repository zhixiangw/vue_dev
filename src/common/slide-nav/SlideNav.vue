<template>
  <el-menu :router="true" theme="dark" :default-active="active">
    <el-submenu index="1">
    <template slot="title">菜单一</template>
        <el-menu-item index="/test1" :route="{ path: '/test1' }">
          TEST1
        </el-menu-item>
        <el-menu-item index="/home" :route="{ path: '/home' }">
          HOME
        </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
  export default {
    data () {
      return {
        active: this.$route.path
      }
    }
  }
</script>