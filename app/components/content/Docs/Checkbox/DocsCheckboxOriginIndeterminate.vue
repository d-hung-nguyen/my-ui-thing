<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex items-center gap-2">
      <UiCheckbox :id="id" default-value="indeterminate" />
      <UiLabel :for="id">Indeterminate checkbox</UiLabel>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const id = useId();
</script>
