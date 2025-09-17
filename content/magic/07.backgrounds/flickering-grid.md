---
title: Flickering Grid
description: A flickering grid background made with SVGs, fully customizable using Tailwind CSS.
links:
  - title: Magic UI
    href: https://magicui.design/docs/components/flickering-grid
    icon: "lucide:wand"
---

::ShowCase

:MagicDocsFlickeringGrid

#code

<!-- automd:file src="../../../app/components/content/Magic/FlickeringGrid/MagicDocsFlickeringGrid.vue" code lang="vue" -->

```vue [MagicDocsFlickeringGrid.vue]
<template>
  <div class="relative h-[500px] w-full overflow-hidden rounded-lg border bg-background">
    <MagicFlickeringGrid
      class="absolute inset-0 z-0 size-full"
      :square-size="4"
      :grid-gap="6"
      color="#6B7280"
      :max-opacity="0.5"
      :flicker-chance="0.1"
      :height="800"
      :width="800"
    />
  </div>
</template>
```

<!-- /automd -->

::

## Source code

Click :SourceCodeLink{component="FlickeringGrid.client.vue" folder="Magic" collection="magic"} to see the source code for this component on GitHub.

Feel free to copy it and adjust it for your own use.

## Usage

### Masked Overlay

::ShowCase

:MagicDocsFlickeringGridMask

#code

<!-- automd:file src="../../../app/components/content/Magic/FlickeringGrid/MagicDocsFlickeringGridMask.vue" code lang="vue" -->

```vue [MagicDocsFlickeringGridMask.vue]
<template>
  <div class="relative size-[600px] w-full overflow-hidden rounded-lg border bg-background">
    <MagicFlickeringGrid
      class="relative inset-0 z-0 [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
      :square-size="4"
      :grid-gap="6"
      color="#60A5FA"
      :max-opacity="0.5"
      :flicker-chance="0.1"
      :height="800"
      :width="800"
    >
      <div class="absolute inset-0 flex items-center justify-center">
        <p class="text-3xl font-semibold">See the edges?</p>
      </div>
    </MagicFlickeringGrid>
  </div>
</template>
```

<!-- /automd -->

::
