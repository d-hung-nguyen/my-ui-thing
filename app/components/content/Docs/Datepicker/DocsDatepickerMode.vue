<template>
  <div class="flex w-full items-center justify-center">
    <UiDatepicker
      v-model="today"
      is-required
      :select-attribute="{ dot: true }"
      mode="dateTime"
      title-position="right"
    />
  </div>
</template>

<script lang="ts" setup>
  import dayjs from "dayjs";

  const today = ref(dayjs().add(3, "days").toDate());
</script>
