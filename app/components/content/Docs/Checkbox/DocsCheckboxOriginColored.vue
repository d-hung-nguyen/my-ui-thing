<template>
  <div
    class="flex items-center justify-center [--primary:var(--color-indigo-500)] [--ring:var(--color-indigo-300)] dark:[--ring:var(--color-indigo-900)]"
  >
    <div class="flex items-center gap-2">
      <UiCheckbox :id="id" default-value />
      <UiLabel :for="id">Colored checkbox</UiLabel>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const id = useId();
</script>
