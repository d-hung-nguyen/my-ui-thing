<template>
  <DefineReviewCard v-slot="{ body, img, name, username }">
    <figure class="relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4">
      <div class="flex flex-row items-center gap-2">
        <img class="rounded-full" width="32" height="32" alt="" :src="img" />
        <div class="flex flex-col">
          <span role="figcaption" class="text-sm font-medium dark:text-white">
            {{ name }}
          </span>
          <p class="text-xs font-medium dark:text-white/40">{{ username }}</p>
        </div>
      </div>
      <blockquote class="mt-2 line-clamp-2 text-sm">{{ body }}</blockquote>
    </figure>
  </DefineReviewCard>
  <div class="relative flex w-full flex-col items-center justify-center overflow-hidden">
    <MagicMarquee pause-on-hover wrapper-class="[--duration:20s]">
      <template v-for="(review, i) in firstRow" :key="i">
        <ReviewCard v-bind="review" />
      </template>
    </MagicMarquee>
    <MagicMarquee reverse pause-on-hover wrapper-class="[--duration:20s]">
      <template v-for="(review, i) in secondRow" :key="i">
        <ReviewCard v-bind="review" />
      </template>
    </MagicMarquee>
    <div
      class="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"
    />
    <div
      class="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"
    />
  </div>
</template>

<script lang="ts" setup>
  import { faker } from "@faker-js/faker";

  const length = 7;

  const { data: reviews } = await useAsyncData(
    "magic-marquee",
    async () => {
      return Array.from({ length }, () => ({
        name: faker.person.firstName(),
        username: faker.internet.username().toLowerCase(),
        body: faker.lorem.sentence({ min: 6, max: 8 }),
        img: faker.image.avatar(),
      }));
    },
    { default: () => [] }
  );

  const firstRow = reviews.value.slice(0, length / 2);
  const secondRow = reviews.value.slice(length / 2);

  const [DefineReviewCard, ReviewCard] = createReusableTemplate<{
    name: string;
    username: string;
    body: string;
    img: string;
  }>();
</script>
