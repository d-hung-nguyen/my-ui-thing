---
title: Warp Background
description: A card with a time warping background effect.
links:
  - title: Magic UI
    href: https://magicui.design/docs/components/warp-background
    icon: "lucide:wand"
---

::ShowCase

:MagicDocsWarpBackground

#code

<!-- automd:file src="../../../app/components/content/Magic/WarpBackground/MagicDocsWarpBackground.vue" code lang="vue" -->

```vue [MagicDocsWarpBackground.vue]
<template>
  <MagicWarpBackground>
    <UiCard class="mx-auto w-80">
      <UiCardContent class="flex flex-col gap-2 p-4">
        <UiCardTitle>Congratulations on Your Promotion!</UiCardTitle>
        <UiCardDescription>
          Your hard work and dedication have paid off. We're thrilled to see you take this next step
          in your career. Keep up the fantastic work!
        </UiCardDescription>
      </UiCardContent>
    </UiCard>
  </MagicWarpBackground>
</template>
```

<!-- /automd -->

::

## Source code

Click :SourceCodeLink{component="WarpBackground" folder="Magic" collection="magic"} to see the source code for this component on GitHub.

Feel free to copy it and adjust it for your own use.
