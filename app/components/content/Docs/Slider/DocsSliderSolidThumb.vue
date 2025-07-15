<template>
  <div class="mx-auto max-w-sm">
    <div class="space-y-4">
      <UiLabel>Slider with solid thumb</UiLabel>
      <UiSlider
        v-model="value"
        class="[&_[data-slot=slider-thumb]]:bg-primary [&>:first-child>span]:opacity-70"
        aria-label="Slider with solid thumb"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  const value = ref([50]);
</script>
