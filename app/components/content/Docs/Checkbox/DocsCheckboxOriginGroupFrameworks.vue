<template>
  <div class="flex items-center justify-center">
    <UiCheckboxGroup v-model="selectedFrameworks" class="flex items-center gap-6">
      <div v-for="item in frameworks" :key="item.value" class="flex items-center gap-2">
        <UiCheckbox :id="item.value" :value="item.value" />
        <UiLabel :for="item.value">
          {{ item.name }}
        </UiLabel>
      </div>
    </UiCheckboxGroup>
  </div>
</template>

<script lang="ts" setup>
  const id = useId();

  const frameworks = [
    {
      name: "Vue",
      value: `${id}-vue`,
    },
    {
      name: "Nuxt",
      value: `${id}-nuxt`,
    },
    {
      name: "React",
      value: `${id}-react`,
    },
  ];
  const selectedFrameworks = ref([`${id}-vue`, `${id}-nuxt`]);
</script>
