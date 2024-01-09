<template>
  <div class="sandbox" :style="{ height }">
    <iframe :src="src" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
  </div>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue'

withDefaults(defineProps<{ src: string, height: string }>(), {
  height: '700px',
})
</script>

<style scoped>
.sandbox {
  overflow: hidden;
  width: 100%;
  background-color: var(--vp-c-default-soft);
  border: 1px solid var(--vp-input-border-color);
  border-radius: 20px;
  margin: 16px 0;
}
.sandbox iframe {
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
