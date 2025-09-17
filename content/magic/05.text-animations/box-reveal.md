---
title: Box Reveal
description: Box Reveal is a text animation that reveals content with a smooth expanding box effect.
links:
  - title: Magic UI
    href: https://magicui.design/docs/components/box-reveal
    icon: "lucide:wand"
---

::ShowCase

:MagicDocsBoxReveal

#code

<!-- automd:file src="../../../app/components/content/Magic/BoxReveal/MagicDocsBoxReveal.vue" code lang="vue" -->

```vue [MagicDocsBoxReveal.vue]
<template>
  <div class="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
    <MagicBoxReveal :duration="0.5">
      <p class="text-[3.5rem] font-semibold">Magic UI<span class="text-primary">.</span></p>
    </MagicBoxReveal>

    <MagicBoxReveal :duration="0.5">
      <h2 class="mt-[.5rem] text-[1rem]">
        UI library for <span class="text-primary">Design Engineers</span>
      </h2>
    </MagicBoxReveal>

    <MagicBoxReveal :duration="0.5">
      <div class="mt-6">
        <p>
          -&gt; 20+ free and open-source animated components built with
          <span class="font-semibold text-primary">React</span>,
          <span class="font-semibold text-primary">Typescript</span>,
          <span class="font-semibold text-primary">Tailwind CSS</span>, and
          <span class="font-semibold text-primary">Motion</span>

          . <br />

          -&gt; 100% open-source, and customizable. <br />
        </p>
      </div>
    </MagicBoxReveal>

    <MagicBoxReveal :duration="0.5">
      <Motion as-child :while-hover="{ scale: 1.05 }" :while-press="{ scale: 0.95 }">
        <UiButton class="mt-[1.6rem]">Explore</UiButton>
      </Motion>
    </MagicBoxReveal>
  </div>
</template>
```

<!-- /automd -->

::

## Source code

Click :SourceCodeLink{component="BoxReveal.vue" folder="Magic" collection="magic"} to see the source code for this component on GitHub.

Feel free to copy it and adjust it for your own use.

## Usage

### Image

::ShowCase

:MagicDocsBoxRevealImage

#code

<!-- automd:file src="../../../app/components/content/Magic/BoxReveal/MagicDocsBoxRevealImage.vue" code lang="vue" -->

```vue [MagicDocsBoxRevealImage.vue]
<template>
  <div class="@container">
    <div
      class="grid min-h-[500px] gap-4 rounded-xl **:rounded-xl @lg:grid-cols-3 @lg:grid-rows-2 @lg:**:size-full [&_img]:object-cover [&_img]:grayscale [&_img]:transition-all [&_img]:duration-500 [&_img:hover]:scale-105 [&_img:hover]:grayscale-0"
    >
      <magic-box-reveal class="@lg:row-span-2">
        <NuxtImg
          src="https://images.unsplash.com/photo-1754045502217-f4622c7d8d99?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </magic-box-reveal>
      <magic-box-reveal class="@lg:row-span-1">
        <NuxtImg
          src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </magic-box-reveal>
      <magic-box-reveal class="@lg:col-start-2 @lg:row-span-1 @lg:row-start-2">
        <NuxtImg
          src="https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </magic-box-reveal>
      <magic-box-reveal class="@lg:row-span-2">
        <NuxtImg
          src="https://images.unsplash.com/photo-1484406566174-9da000fda645?q=80&w=1289&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </magic-box-reveal>
    </div>
  </div>
</template>
```

<!-- /automd -->

::
