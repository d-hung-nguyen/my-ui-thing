---
title: Rainbow Button
description: A vibrant button component with a smooth rainbow gradient animation.
links:
  - title: Magic UI
    href: https://magicui.design/docs/components/rainbow-button
    icon: "lucide:wand"
---

::ShowCase

:MagicDocsRainbowButton

#code

<!-- automd:file src="../../../app/components/content/Magic/RainbowButton/MagicDocsRainbowButton.vue" code lang="vue" -->

```vue [MagicDocsRainbowButton.vue]
<template>
  <div class="text-center">
    <magic-rainbow-button>Get Unlimited Access</magic-rainbow-button>
  </div>
</template>
```

<!-- /automd -->

::

## Source code

Click :SourceCodeLink{component="RainbowButton.vue" folder="Magic" collection="magic"} to see the source code for this component on GitHub.

Feel free to copy it and adjust it for your own use.

## Installation

:::Steps
::Step

### Add the Component

Create a file and paste the code below in it

<!-- automd:file src="../../../app/components/Magic/RainbowButton.vue" code lang="vue" -->

```vue [RainbowButton.vue]
<template>
  <Primitive
    v-bind="forwarded"
    :class="
      rainbowButtonStyles({
        size,
        variant,
        class: props.class,
      })
    "
  >
    <slot />
  </Primitive>
</template>

<script lang="ts">
  import type { PrimitiveProps } from "reka-ui";
  import type { HTMLAttributes } from "vue";

  export const rainbowButtonStyles = tv({
    base: [
      "group relative animate-rainbow cursor-pointer transition-all",
      "inline-flex shrink-0 items-center justify-center gap-2",
      "rounded-md outline-none focus-visible:ring-[3px] aria-invalid:border-destructive",
      "text-sm font-medium whitespace-nowrap",
      "disabled:pointer-events-none disabled:opacity-50",
      "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    ],
    variants: {
      variant: {
        default:
          "border-0 bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] bg-[length:200%] [background-clip:padding-box,border-box,border-box] [background-origin:border-box] text-background [border:calc(0.125rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] before:[filter:blur(0.75rem)] dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]",
        outline:
          "border border-input border-b-transparent bg-[linear-gradient(#ffffff,#ffffff),linear-gradient(#ffffff_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] bg-[length:200%] [background-clip:padding-box,border-box,border-box] [background-origin:border-box] text-accent-foreground before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] before:[filter:blur(0.75rem)] dark:bg-[linear-gradient(#0a0a0a,#0a0a0a),linear-gradient(#0a0a0a_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]",
      },
      size: {
        xs: "h-7 gap-1 px-2.5 text-xs has-[>svg]:px-2",
        sm: "h-8 gap-1.5 px-3 text-xs has-[>svg]:px-2.5",
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        lg: "h-10 px-6 has-[>svg]:px-4",
        "icon-xs": "size-7",
        "icon-sm": "size-8",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  });

  export type RainbowButtonProps = PrimitiveProps & {
    /**
     * The size of the button
     * @default "default"
     */
    size?: VariantProps<typeof rainbowButtonStyles>["size"];
    /**
     * The variant of the button
     * @default "default"
     */
    variant?: VariantProps<typeof rainbowButtonStyles>["variant"];
    /**
     * Custom class names to apply to the button
     */
    class?: HTMLAttributes["class"];
  };
</script>

<script lang="ts" setup>
  const props = withDefaults(defineProps<RainbowButtonProps>(), {
    as: "button",
    size: "default",
    variant: "default",
  });

  const forwarded = reactiveOmit(props, ["size", "variant", "class"]);
</script>
```

<!-- /automd -->

::

::Step

### Update `tailwind.css` file

Add the following css to your `tailwind.css` file

```css
:root {
  --color-1: oklch(66.161% 0.22493 25.863);
  --color-2: oklch(60.401% 0.26076 301.747);
  --color-3: oklch(69.689% 0.1644 251.258);
  --color-4: oklch(80.239% 0.13431 224.86);
  --color-5: oklch(90.766% 0.23083 132.857);
}

@theme inline {
  --animate-rainbow: rainbow var(--speed, 2s) infinite linear;

  @keyframes rainbow {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 200%;
    }
  }
}
```

::
:::

## Usage

### Outline

::ShowCase

:MagicDocsRainbowButtonOutline

#code

<!-- automd:file src="../../../app/components/content/Magic/RainbowButton/MagicDocsRainbowButtonOutline.vue" code lang="vue" -->

```vue [MagicDocsRainbowButtonOutline.vue]
<template>
  <div class="text-center">
    <magic-rainbow-button variant="outline">Get Unlimited Access</magic-rainbow-button>
  </div>
</template>
```

<!-- /automd -->

::
