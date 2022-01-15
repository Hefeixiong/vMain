<template>
  <div class="scroll-y">
    <div class="dashboard-container">
      <div class="dashboard-text">name: {{username}}</div>
    </div>
    <div>update element-plus to 1.2.+, add svg icon, icon-front is abandoned</div>

    <div>
      <el-icon>
<!--        <Svg.Edit></Svg.Edit>-->
      </el-icon>
    </div>
    <div class="mt-2">this is var from vite.config.js define</div>
<!--    <div>{{ showObj }},{{ showObjString }}</div>-->
  </div>
</template>

<script setup lang="ts">

import {computed, ref} from 'vue';

const username = computed(() => {
  return 'ssss'
})

// const showObj = ref(GLOBAL_VAR)
// const showObjString = ref(GLOBAL_STRING)

</script>

<style lang="scss" scoped>
.dashboard {
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
