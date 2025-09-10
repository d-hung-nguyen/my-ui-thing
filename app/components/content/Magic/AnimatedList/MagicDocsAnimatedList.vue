<template>
  <div class="relative flex h-[500px] w-full flex-col overflow-hidden p-2">
    <MagicAnimatedList class="items-start">
      <Motion
        v-for="item in notifications"
        :key="item.name"
        as="figure"
        :while-hover="{ scale: 1.04 }"
        :while-press="{ scale: 0.97 }"
        class="relative mx-auto min-h-fit w-full max-w-[400px] transform-gpu cursor-pointer overflow-hidden rounded-2xl bg-white p-4 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]"
      >
        <div class="flex flex-row items-center gap-3">
          <div
            class="flex size-10 items-center justify-center rounded-2xl"
            :style="{ backgroundColor: item.color }"
          >
            <span class="text-lg">{{ item.icon }}</span>
          </div>
          <div class="flex flex-col overflow-hidden">
            <div
              class="flex flex-row items-center text-lg font-medium whitespace-pre dark:text-white"
            >
              <span class="text-sm capitalize sm:text-lg">{{ item.name }}</span>
              <span class="mx-1">·</span>
              <span class="text-xs text-gray-500">{{ item.time }}</span>
            </div>
            <p class="text-sm font-normal dark:text-white/60">
              {{ item.description }}
            </p>
          </div>
        </div>
      </Motion>
    </MagicAnimatedList>

    <div
      role="presentation"
      aria-label="Gradient overlay to fade out bottom of list"
      class="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"
    />
  </div>
</template>

<script lang="ts" setup>
  import { faker } from "@faker-js/faker";

  const { data: notifications } = await useAsyncData(async () => {
    return Array.from({ length: 12 }).map(() => ({
      name: faker.lorem.words(2),
      description: faker.company.name(),
      time: faker.date.recent().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      icon: faker.internet.emoji(),
      color: faker.color.rgb({ format: "hex", casing: "lower" }),
    }));
  });
</script>
