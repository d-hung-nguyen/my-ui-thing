<template>
  <div class="flex w-full items-center justify-center">
    <UiDatepicker
      v-model.range="dates"
      :columns="isMobileScreen ? 1 : 2"
      :rows="isMobileScreen ? 2 : 1"
      :expanded="isMobileScreen"
    />
  </div>
</template>

<script lang="ts" setup>
  import dayjs from "dayjs";

  const isMobileScreen = useMediaQuery("(max-width: 640px)", { ssrWidth: 640 });
  const dates = ref({
    start: dayjs().toDate(),
    end: dayjs().add(2, "w").toDate(),
  });
</script>
