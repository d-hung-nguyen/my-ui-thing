---
title: Ripple
description: An animated ripple effect with expanding circles... or squares 🤣
links:
  - title: Magic UI
    href: https://magicui.design/docs/components/ripple
    icon: "lucide:wand"
---

::ShowCase

:MagicDocsRipple

#code

<!-- automd:file src="../../../app/components/content/Magic/Ripple/MagicDocsRipple.vue" code lang="vue" -->

```vue [MagicDocsRipple.vue]
<template>
  <div
    class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background"
  >
    <p
      class="z-10 text-center text-5xl font-medium tracking-tighter whitespace-pre-wrap text-white"
    >
      Ripple
    </p>
    <MagicRipple />
  </div>
</template>
```

<!-- /automd -->

::

## Source code

Click :SourceCodeLink{component="Ripple.vue" folder="Magic" collection="magic"} to see the source code for this component on GitHub.

Feel free to copy it and adjust it for your own use.

## Installation

:::Steps
::Step

### Add the Component

Create a file and paste the code below in it

<!-- automd:file src="../../../app/components/Magic/Ripple.vue" code lang="vue" -->

```vue [Ripple.vue]
<template>
  <div data-slot="ripple" :class="styles({ class: props.class })">
    <div
      v-for="(_, i) in Array.from({ length: numCircles })"
      :key="i"
      data-slot="circle"
      :class="[
        'absolute animate-ripple border bg-foreground/25 shadow-xl',
        props.shape === 'circle' ? 'rounded-full' : 'rounded-lg',
      ]"
      :style="{
        '--i': i,
        width: `${mainCircleSize + i * 70}px`,
        height: `${mainCircleSize + i * 70}px`,
        opacity: mainCircleOpacity - i * 0.03,
        animationDelay: `${i * 0.06}s`,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: `var(--foreground)`,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) scale(1)',
      }"
    />
  </div>
</template>

<script lang="ts" setup>
  import type { HTMLAttributes } from "vue";

  interface RippleProps {
    /**
     * The size of the main circle in pixels.
     * @default 210
     */
    mainCircleSize?: number;
    /**
     * The opacity of the main circle.
     * @default 0.24
     */
    mainCircleOpacity?: number;
    /**
     * The number of circles to display.
     * @default 8
     */
    numCircles?: number;
    /**
     * Additional classes to apply to the wrapper element.
     */
    class?: HTMLAttributes["class"];
    /**
     * The shape of the ripple effect.
     * @default "circle"
     */
    shape?: "circle" | "square";
  }

  const props = withDefaults(defineProps<RippleProps>(), {
    mainCircleSize: 210,
    mainCircleOpacity: 0.24,
    numCircles: 8,
    shape: "circle",
  });

  const styles = tv({
    base: "pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,white,transparent)] select-none",
  });
</script>
```

<!-- /automd -->

::

::Step

### Update `tailwind.css` file

Add the following css to your `tailwind.css` file

```css
@theme inline {
  --animate-ripple: ripple var(--duration, 2s) ease calc(var(--i, 0) * 0.2s) infinite;

  @keyframes ripple {
    0%,
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      transform: translate(-50%, -50%) scale(0.9);
    }
  }
}
```

::
:::

### Square Ripple

::ShowCase

:MagicDocsRippleSquare

#code

<!-- automd:file src="../../../app/components/content/Magic/Ripple/MagicDocsRippleSquare.vue" code lang="vue" -->

```vue [MagicDocsRippleSquare.vue]
<template>
  <div
    class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background"
  >
    <p
      class="z-10 text-center text-5xl font-medium tracking-tighter whitespace-pre-wrap text-white"
    >
      Square Ripple
    </p>
    <MagicRipple shape="square" />
  </div>
</template>
```

<!-- /automd -->

::
