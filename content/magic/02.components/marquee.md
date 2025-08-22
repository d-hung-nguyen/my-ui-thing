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
        <img class="rounded-full" width="32" height="32" alt="" :src="img" />
        <div class="flex flex-col">
          <span role="figcaption" class="text-sm font-medium dark:text-white">
            {{ name }}
          </span>
          <p class="text-xs font-medium dark:text-white/40">{{ username }}</p>
        </div>
      </div>
      <blockquote class="mt-2 text-sm">{{ body }}</blockquote>
    </figure>
  </DefineReviewCard>
  <div class="relative flex w-full flex-col items-center justify-center overflow-hidden">
    <MagicMarquee pause-on-hover class="[--duration:20s]">
      <template v-for="(review, i) in firstRow" :key="i">
        <ReviewCard v-bind="review" />
      </template>
    </MagicMarquee>
    <MagicMarquee reverse pause-on-hover class="[--duration:20s]">
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
  const reviews = [
    {
      name: "Jack",
      username: "@jack",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Jill",
      username: "@jill",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "John",
      username: "@john",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Jane",
      username: "@jane",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      name: "Jenny",
      username: "@jenny",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jenny",
    },
    {
      name: "James",
      username: "@james",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/james",
    },
  ];

  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

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
