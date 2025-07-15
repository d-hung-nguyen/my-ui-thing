<template>
  <div class="flex flex-wrap justify-center gap-5">
    <UiCalendar :disabled-dates />
  </div>
</template>

<script lang="ts" setup>
  import dayjs from "dayjs";

  const disabledDates = ref([
    // disable today
    dayjs().toDate(),
    // disable the next 8 days
    dayjs().add(8, "day").toDate(),
    // disable the 22nd of the month
    dayjs().date(22).toDate(),
  ]);
</script>
