<template>
  <div class="grid gap-2">
    <ui-heading>{{ text }}</ui-heading>
    <ui-heading :level="2">{{ text }}</ui-heading>
    <ui-heading :level="3">{{ text }}</ui-heading>
    <ui-heading :level="4">{{ text }}</ui-heading>
    <ui-heading :level="5">{{ text }}</ui-heading>
    <ui-heading :level="6">{{ text }}</ui-heading>
  </div>
</template>

<script lang="ts" setup>
  const text = "The quick brown fox jumps over the lazy dog.";
</script>
