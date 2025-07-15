<template>
  <div class="flex w-full flex-col items-center justify-center gap-5">
    <UiCard>
      <UiCardContent class="flex gap-x-3 max-sm:flex-col">
        <div class="relative py-4 max-sm:order-1 max-sm:border-t sm:w-32">
          <div class="h-full sm:border-e">
            <div class="flex flex-col gap-1 px-2">
              <UiButton
                size="sm"
                variant="ghost"
                class="w-full justify-start"
                @click="date = new Date()"
                >Today</UiButton
              >
              <UiButton
                size="sm"
                variant="ghost"
                class="w-full justify-start"
                @click="date = dayjs().subtract(1, 'day').toDate()"
                >Yesterday</UiButton
              >
              <UiButton
                size="sm"
                variant="ghost"
                class="w-full justify-start"
                @click="date = dayjs().add(1, 'week').toDate()"
                >Next Week</UiButton
              >
              <UiButton
                size="sm"
                variant="ghost"
                class="w-full justify-start"
                @click="date = dayjs().subtract(1, 'week').toDate()"
                >Last Week</UiButton
              >
              <UiButton
                size="sm"
                variant="ghost"
                class="w-full justify-start"
                @click="date = dayjs().subtract(1, 'month').toDate()"
                >Last Month</UiButton
              >
              <UiButton
                size="sm"
                variant="ghost"
                class="w-full justify-start"
                @click="date = dayjs().add(1, 'month').toDate()"
                >Next Month</UiButton
              >
              <UiButton
                size="sm"
                variant="ghost"
                class="w-full justify-start"
                @click="date = dayjs().add(1, 'y').toDate()"
                >Next Year</UiButton
              >
            </div>
          </div>
        </div>
        <UiDatepicker ref="datepicker" v-model="date" borderless transparent />
      </UiCardContent>
    </UiCard>
  </div>
</template>

<script lang="ts" setup>
  import dayjs from "dayjs";

  const date = ref(new Date());
  const datepicker = useTemplateRef("datepicker");

  watch(date, (newDate) => {
    datepicker.value?.datepickerRef?.move(newDate);
  });
</script>
