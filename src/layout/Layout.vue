<template>
  <div class="layout-wrapper">
  <Sidebar/>
    <div class="main-container">
      <Navbar/>
      <AppMain/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Sidebar, AppMain , Navbar} from './components'

</script>

<style lang="scss" scoped>

</style>
