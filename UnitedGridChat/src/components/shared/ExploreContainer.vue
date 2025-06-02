<template>
  <div id="container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: String,
});
</script>

<style scoped>
#container {
  height: 100%;
  width: 100%;
}
</style>
