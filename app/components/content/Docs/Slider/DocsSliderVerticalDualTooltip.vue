<template>
  <div class="mx-auto max-w-sm">
    <div class="*:not-first:mt-4">
      <UiLabel>Vertical dual range slider and tooltip</UiLabel>
      <div class="flex h-40 justify-center">
        <UiSlider
          v-model="value"
          :max="10"
          orientation="vertical"
          aria-label="Vertical slider"
          show-tooltip
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const value = ref([2, 7]);
</script>
