<template>
  <div class="flex flex-wrap justify-center gap-5">
    <UiCalendar ref="cal">
      <template #footer>
        <div class="grid grid-cols-2 gap-3 p-4 pt-0">
          <UiButton size="sm" variant="outline" @click="moveToRandomMonth">Random Month</UiButton>
          <UiButton size="sm" effect="ringHover" @click="moveToThisMonth">This Month</UiButton>
        </div>
      </template>
    </UiCalendar>
  </div>
</template>

<script lang="ts" setup>
  import dayjs from "dayjs";

  const cal = useTemplateRef("cal");
  const moveToRandomMonth = () => {
    const randomMonth = dayjs().add(Math.floor(Math.random() * 12), "month");
    cal.value?.calendarRef?.move(randomMonth.toDate());
  };
  const moveToThisMonth = () => {
    cal.value?.calendarRef?.move(new Date());
  };
</script>
