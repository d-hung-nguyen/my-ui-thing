<template>
  <div class="text-center">
    <UiRating v-model="rating" show-value editable />
  </div>
</template>

<script lang="ts" setup>
  const rating = ref(2.5);
</script>
