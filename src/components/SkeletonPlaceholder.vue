<template>
  <div class="placeholder">&nbsp;</div>
</template>

<script setup>
defineProps({
  width: { type: String },
  height: { type: String },
  borderRadius: { type: String }
})
</script>

<style lang="scss" scoped>
.placeholder {
  width: v-bind(width);
  height: v-bind(height);
  border-radius: v-bind(borderRadius);
  background-image: linear-gradient(to right, #f7ddea 0%, #f1d3e2 10%, #f3cfe1 20%, #f7ddea 100%);
  background-size: 200% 100%;
  box-shadow: 0 4px 6px -1px rgb(0, 0, 0, 0.1),
    0 2px 4px -2px rgb(0, 0, 0, 0.1);
  animation: bgAnimate 1.2s linear infinite;
}

@keyframes bgAnimate {
  0% {
    background-position: 50% 0;
  }

  100% {
    background-position: -150% 0;
  }
}
</style>
