<template>
  <UiCard title="Pick Date" description="Select a date range for your report.">
    <template #content>
      <UiCardContent>
        <UiDatepicker v-model.range="date" :columns="2">
          <template #default="{ togglePopover }">
            <UiButton
              variant="outline"
              :class="['w-full justify-start text-left font-normal']"
              @click="togglePopover"
            >
              <Icon name="lucide:calendar" class="size-4" />
              {{ useDateFormat(date.start, "MMM DD, YYYY").value }} to
              {{ useDateFormat(date.end, "MMM DD, YYYY") }}
            </UiButton>
          </template>
        </UiDatepicker>
      </UiCardContent>
    </template>
  </UiCard>
</template>

<script lang="ts" setup>
  import dayjs from "dayjs";

  const date = ref({
    start: dayjs().startOf("month").toDate(),
    end: dayjs().add(7, "days").toDate(),
  });
</script>
