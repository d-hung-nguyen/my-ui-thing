---
title: Scroll Progress
description: A component that displays the user's scroll progress on the page.
links:
  - title: Magic UI
    href: https://magicui.design/docs/components/scroll-progress
    icon: "lucide:wand"
---

## Source code

Click :SourceCodeLink{component="ScrollProgress.vue" folder="Magic" collection="magic"} to see the source code for this component on GitHub.

Feel free to copy it and adjust it for your own use.

## Installation

```bash
npx ui-thing@latest magic scroll-progress
```

## Usage

### Basic

::ShowCase

:MagicDocsScrollProgress

#code

<!-- automd:file src="../../../app/components/content/Magic/ScrollProgress/MagicDocsScrollProgress.vue" code lang="vue" -->

```vue [MagicDocsScrollProgress.vue]
<template>
  <div class="z-10 rounded-lg p-4">
    <magic-scroll-progress class="top-[56px]" />
    <h2 class="pb-4 font-bold">Note: The scroll progress is shown below the navbar of the page.</h2>
  </div>
</template>

<script lang="ts" setup></script>
```

<!-- /automd -->

::
