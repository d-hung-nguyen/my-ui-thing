<template>
  <div class="mx-auto w-full max-w-xs">
    <UiVeeMultiSelect
      v-model="value"
      mode="tags"
      :close-on-select="false"
      :searchable="true"
      :create-option="true"
      :options="[
        { value: 'batman', label: 'Batman' },
        { value: 'robin', label: 'Robin' },
        { value: 'joker', label: 'Joker' },
      ]"
    />
  </div>
</template>

<script lang="ts" setup>
  const value = ref(["batman", "robin"]);
</script>
