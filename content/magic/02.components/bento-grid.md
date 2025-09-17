---
title: Bento Grid
description: Bento grid is a layout used to showcase the features of a product in a simple and elegant way.
links:
  - title: Magic UI
    href: https://magicui.design/docs/components/bento-grid
    icon: "lucide:wand"
---

::ShowCase

:MagicDocsBentoGrid

#code

<!-- automd:file src="../../../app/components/content/Magic/BentoGrid/MagicDocsBentoGrid.vue" code lang="vue" -->

```vue [MagicDocsBentoGrid.vue]
<template>
  <MagicBentoGrid class="lg:grid-rows-3">
    <MagicBentoCard v-for="item in features" :key="item.name" v-bind="item" />
  </MagicBentoGrid>
</template>

<script lang="ts" setup>
  const bgImage = h("img", { class: "absolute -right-20 -top-20 opacity-60" });
  const features = [
    {
      icon: "lucide:file-text",
      name: "Save your files",
      description: "We automatically save your files as you type.",
      href: "/",
      cta: "Learn more",
      background: bgImage,
      class: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      icon: "lucide:text-cursor-input",
      name: "Full text search",
      description: "Search through all your files in one place.",
      href: "/",
      cta: "Learn more",
      background: bgImage,
      class: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      icon: "lucide:globe",
      name: "Multilingual",
      description: "Supports 100+ languages and counting.",
      href: "/",
      cta: "Learn more",
      background: bgImage,
      class: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      icon: "lucide:calendar",
      name: "Calendar",
      description: "Use the calendar to filter your files by date.",
      href: "/",
      cta: "Learn more",
      background: bgImage,
      class: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      icon: "lucide:bell",
      name: "Notifications",
      description: "Get notified when someone shares a file or mentions you in a comment.",
      href: "/",
      cta: "Learn more",
      background: bgImage,
      class: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];
</script>
```

<!-- /automd -->

::

## Source code

Click :SourceCodeLink{component="Bento" folder="Magic" collection="magic"} to see the source code for this component on GitHub.

Feel free to copy it and adjust it for your own use.
