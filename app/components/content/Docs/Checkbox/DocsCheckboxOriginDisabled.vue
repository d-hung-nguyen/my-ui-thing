<template>
  <div class="flex items-center justify-center">
    <div class="flex items-center gap-2">
      <UiCheckbox :id="id" disabled />
      <UiLabel :for="id">Disabled checkbox</UiLabel>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const id = useId();
</script>
