<template>
  <div class="flex items-center justify-center">
    <div class="flex items-center gap-2">
      <UiCheckbox :id="id" default-value />
      <UiLabel :for="id" class="peer-data-[state=checked]:line-through">Simple todo item</UiLabel>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const id = useId();
</script>
