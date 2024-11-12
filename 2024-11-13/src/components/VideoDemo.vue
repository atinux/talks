<script setup lang="ts">
defineProps<{
  src: string
}>()
</script>

<template>
  <video
    type="video/mp4"
    class="h-full pb-12"
    :src="src" loop muted controls
    :style="{
      'border-radius': '1% / 1.5%',
    }"
  />
</template>
