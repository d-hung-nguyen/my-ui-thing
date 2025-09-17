---
title: Animated Theme Toggler
description: A theme toggler component with smooth animated transitions between light and dark modes.
links:
  - title: Magic UI
    href: https://magicui.design/docs/components/animated-theme-toggler
    icon: "lucide:wand"
---

::ShowCase

:MagicDocsAnimatedThemeToggler

#code

<!-- automd:file src="../../../app/components/content/Magic/AnimatedThemeToggler/MagicDocsAnimatedThemeToggler.vue" code lang="vue" -->

```vue [MagicDocsAnimatedThemeToggler.vue]
<template>
  <div class="flex items-center justify-center">
    <MagicAnimatedThemeToggler :class="buttonStyles({ variant: 'outline', size: 'icon' })" />
  </div>
</template>

<script setup lang="ts">
  import { buttonStyles } from "~/components/Ui/Button.vue";
</script>
```

<!-- /automd -->

::

## Source code

Click :SourceCodeLink{component="AnimatedThemeToggler.client" folder="Magic" collection="magic"} to see the source code for this component on GitHub.

Feel free to copy it and adjust it for your own use.
