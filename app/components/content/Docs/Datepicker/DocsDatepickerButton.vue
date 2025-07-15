<template>
  <div class="flex w-full items-center justify-center">
    <UiDatepicker v-model="date">
      <template #default="{ togglePopover }">
        <UiButton
          variant="outline"
          :class="[!date && 'text-muted-foreground', 'w-[260px] justify-start text-left']"
          @click="togglePopover"
        >
          <Icon name="lucide:calendar" class="size-4" />
          {{ date ? dayjs(date).format("MMMM DD, YYYY") : "Select a date" }}
        </UiButton>
      </template>
    </UiDatepicker>
  </div>
</template>

<script lang="ts" setup>
  import dayjs from "dayjs";

  const date = ref();
</script>
