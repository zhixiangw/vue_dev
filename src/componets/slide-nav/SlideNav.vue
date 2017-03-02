<template>
  <el-menu :router="true" theme="dark" default-active="1-1">
    <el-submenu index="1">
    <template slot="title">菜单一</template>
        <el-menu-item index="1-1" :route="{ path: '/index' }">
          INDEX
        </el-menu-item>
        <el-menu-item index="1-2" :route="{ path: '/home' }">
          HOME
        </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {}
</script>