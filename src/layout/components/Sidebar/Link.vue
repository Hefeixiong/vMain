<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot/>
  </component>
</template>

<script setup lang="ts">

const props = defineProps({
  to: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>

</style>
