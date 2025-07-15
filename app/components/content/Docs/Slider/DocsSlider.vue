<template>
  <div class="mx-auto flex w-full max-w-xs flex-col gap-4">
    <p class="text-sm font-medium">Value {{ sliderValue }}</p>
    <UiSlider v-model="sliderValue" />
  </div>
</template>

<script lang="ts" setup>
  const sliderValue = ref([50]);
</script>
