<template>
  <div class="mx-auto flex w-full max-w-xs flex-col gap-4">
    <p class="text-sm font-medium">Range {{ rangeValue }}</p>
    <UiSlider v-model="rangeValue" :max="250" />
  </div>
</template>

<script lang="ts" setup>
  const rangeValue = ref([25, 75, 150]);
</script>
