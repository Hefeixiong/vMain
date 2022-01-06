<template>
  <div class="navbar rowBC">
    <div class="rowSC">
      <div class="right-menu">
        <el-dropdown>
          div class="avatar-wrapper">
          <img
              src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
              class="user-avatar"
           alt=""/>
        </el-dropdown>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <router-link to="/">
            <el-dropdown-item>Home</el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/jzfai/vue3-admin-ts">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <a target="_blank" href="https://juejin.cn/post/7036302298435289095">
            <el-dropdown-item>Docs</el-dropdown-item>
          </a>
          <!--<el-dropdown-item>修改密码</el-dropdown-item>-->
          <el-dropdown-item divided @click="loginOut">login out</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">


</script>

<style lang="scss" scoped>

</style>
