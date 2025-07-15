<template>
  <div class="mx-auto flex justify-center">
    <div class="w-fit">
      <UiVeeVueFormSlider
        v-model="value"
        :step="5"
        orientation="vertical"
        :format="Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  const value = ref(20);
</script>
