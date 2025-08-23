---
title: Marquee
description: An infinite scrolling component that can be used to display text, images, or videos.
links:
  - title: Magic UI
    href: https://magicui.design/docs/components/marquee
    icon: "lucide:wand"
---

## Source code

Click :SourceCodeLink{component="Marquee.vue" folder="Magic" collection="magic"} to see the source code for this component on GitHub.

Feel free to copy it and adjust it for your own use.

## Installation

:::Steps

::Step

### Add the Marquee component

```bash
npx ui-thing@latest magic marquee
```

::

::Step

### Add CSS for Animation

Paste the following CSS into your `tailwind.css` file

```css
@theme inline {
  --animate-marquee: marquee var(--duration) infinite linear;
  --animate-marquee-vertical: marquee-vertical var(--duration) linear infinite;

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - var(--gap)));
    }
  }
  @keyframes marquee-vertical {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - var(--gap)));
    }
  }
}
```

::
:::

## Usage

### Basic

::ShowCase

:MagicDocsMarquee

#code

<!-- automd:file src="../../../app/components/content/Magic/Marquee/MagicDocsMarquee.vue" code lang="vue" -->

```vue [MagicDocsMarquee.vue]
<template>
  <DefineReviewCard v-slot="{ body, img, name, username }">
    <figure class="relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4">
      <div class="flex flex-row items-center gap-2">
        <!-- eslint-disable-next-line vue/html-self-closing -->
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
```

<!-- /automd -->

::

### Vertical

::ShowCase

:MagicDocsMarqueeVertical

#code

<!-- automd:file src="../../../app/components/content/Magic/Marquee/MagicDocsMarqueeVertical.vue" code lang="vue" -->

```vue [MagicDocsMarqueeVertical.vue]
<template>
  <DefineReviewCard v-slot="{ body, img, name, username }">
    <figure
      class="relative h-full w-fit cursor-pointer overflow-hidden rounded-xl border p-4 sm:w-36"
    >
      <div class="flex flex-row items-center gap-2">
        <!-- eslint-disable-next-line vue/html-self-closing -->
        <img class="rounded-full" width="32" height="32" alt="" :src="img" />
        <div class="flex flex-col">
          <span class="text-sm font-medium">
            {{ name }}
          </span>
          <p class="text-xs font-medium text-muted-foreground">{{ username }}</p>
        </div>
      </div>
      <blockquote class="mt-2 text-sm">{{ body }}</blockquote>
    </figure>
  </DefineReviewCard>
  <div class="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
    <MagicMarquee pause-on-hover vertical class="[--duration:20s]">
      <template v-for="(review, i) in firstRow" :key="i">
        <ReviewCard v-bind="review" />
      </template>
    </MagicMarquee>
    <MagicMarquee reverse pause-on-hover vertical class="[--duration:20s]">
      <template v-for="(review, i) in secondRow" :key="i">
        <ReviewCard v-bind="review" />
      </template>
    </MagicMarquee>
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"
    />
    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"
    />
  </div>
</template>

<script lang="ts" setup>
  import { faker } from "@faker-js/faker";

  const length = 5;

  const { data: reviews } = await useAsyncData(
    "magic-marquee-3d",
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
```

<!-- /automd -->

::

### 3D

::ShowCase

:MagicDocsMarqueeThreeD

#code

<!-- automd:file src="../../../app/components/content/Magic/Marquee/MagicDocsMarqueeThreeD.vue" code lang="vue" -->

```vue [MagicDocsMarqueeThreeD.vue]
<template>
  <DefineReviewCard v-slot="{ body, img, name, username }">
    <figure
      class="relative h-full w-fit cursor-pointer overflow-hidden rounded-xl border p-4 sm:w-36"
    >
      <div class="flex flex-row items-center gap-2">
        <!-- eslint-disable-next-line vue/html-self-closing -->
        <img class="rounded-full" width="32" height="32" alt="" :src="img" />
        <div class="flex flex-col">
          <span class="text-sm font-medium">
            {{ name }}
          </span>
          <p class="text-xs font-medium text-muted-foreground">{{ username }}</p>
        </div>
      </div>
      <blockquote class="mt-2 text-sm">{{ body }}</blockquote>
    </figure>
  </DefineReviewCard>
  <div
    class="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]"
  >
    <div
      class="flex flex-row items-center gap-4"
      style="
        transform: translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg)
          rotateY(-10deg) rotateZ(20deg);
      "
    >
      <MagicMarquee pause-on-hover vertical class="[--duration:20s]">
        <template v-for="(review, i) in firstRow" :key="i">
          <ReviewCard v-bind="review" />
        </template>
      </MagicMarquee>
      <MagicMarquee reverse pause-on-hover class="[--duration:20s]" vertical>
        <template v-for="(review, i) in secondRow" :key="i">
          <ReviewCard v-bind="review" />
        </template>
      </MagicMarquee>
      <MagicMarquee reverse pause-on-hover class="[--duration:20s]" vertical>
        <template v-for="(review, i) in thirdRow" :key="i">
          <ReviewCard v-bind="review" />
        </template>
      </MagicMarquee>
      <MagicMarquee pause-on-hover class="[--duration:20s]" vertical>
        <template v-for="(review, i) in fourthRow" :key="i">
          <ReviewCard v-bind="review" />
        </template>
      </MagicMarquee>
    </div>

    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"
    />
    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"
    />
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

  const length = 5;

  const { data: reviews } = await useAsyncData(
    "magic-marquee-3d",
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
  const thirdRow = reviews.value.slice(0, length / 2);
  const fourthRow = reviews.value.slice(length / 2);

  const [DefineReviewCard, ReviewCard] = createReusableTemplate<{
    name: string;
    username: string;
    body: string;
    img: string;
  }>();
</script>
```

<!-- /automd -->

::
