<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  src: string
}>()

const controls = ref(false)
</script>

<template>
  <video
    type="video/mp4"
    h-full pb-12
    :src="src" loop muted autoplay :controls="controls"
    :style="{
      'border-radius': '1% / 1.5%',
    }"
    @click="controls = !controls"
  />
</template>
