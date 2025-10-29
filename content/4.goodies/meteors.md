---
title: Meteors
description: Shower your UI with meteors.... For whatever reason you want to do that.
---

## Credits

Shout out to [Magic UI](https://magicui.design/docs/components/meteors) for the inspiration. I actually discovered this package while browsing their website.

## Getting Started

:::Steps

::Step

### Add Animation

You will need to add this to your `tailwind.config.js` file.

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        meteor: "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
    },
  },
};
```

::

::Step

### Create Component

Create the component `UiMeteors.client.vue` in the `components` directory.

<!-- automd:file src="../../app/components/Ui/Meteors.client.vue" code lang="vue" -->

```vue [Meteors.client.vue]
<template>
  <span
    v-for="(s, i) in meteorStyles"
    :key="i"
    :class="localStyles().wrapper({ class: props.class })"
    :style="s"
  >
    <div :class="localStyles().tail()" />
  </span>
</template>

<script lang="ts" setup>
  import type { CSSProperties, HTMLAttributes } from "vue";

  interface MeteorsProps {
    number?: number;
    minDelay?: number;
    maxDelay?: number;
    minDuration?: number;
    maxDuration?: number;
    angle?: number;
    class?: HTMLAttributes["class"];
  }

  const props = withDefaults(defineProps<MeteorsProps>(), {
    number: 20,
    minDelay: 0.2,
    maxDelay: 1.2,
    minDuration: 2,
    maxDuration: 10,
    angle: 215,
  });

  const meteorStyles = ref<CSSProperties[]>(
    [...Array.from({ length: props.number })].map(() => ({
      "--angle": -props.angle + "deg",
      top: "-5%",
      left: `calc(0% + ${Math.floor(Math.random() * window.innerWidth)}px)`,
      animationDelay: Math.random() * (props.maxDelay - props.minDelay) + props.minDelay + "s",
      animationDuration:
        Math.floor(Math.random() * (props.maxDuration - props.minDuration) + props.minDuration) +
        "s",
    }))
  );

  const setStyles = () => {
    const styles = [...new Array(props.number)].map(() => ({
      "--angle": -props.angle + "deg",
      top: "-5%",
      left: `calc(0% + ${Math.floor(Math.random() * window.innerWidth)}px)`,
      animationDelay: Math.random() * (props.maxDelay - props.minDelay) + props.minDelay + "s",
      animationDuration:
        Math.floor(Math.random() * (props.maxDuration - props.minDuration) + props.minDuration) +
        "s",
    }));
    meteorStyles.value = styles;
  };

  setStyles();

  watch(
    () => [
      props.number,
      props.minDelay,
      props.maxDelay,
      props.minDuration,
      props.maxDuration,
      props.angle,
    ],
    setStyles
  );

  const localStyles = tv({
    slots: {
      wrapper:
        "animate-meteor pointer-events-none absolute size-0.5 rotate-[var(--angle)] rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10]",
      tail: "pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-zinc-500 to-transparent",
    },
  });
</script>
```

<!-- /automd -->

::
:::

## Usage

### Basic

We can add the `UiMeteors` component to trigger the meteors.

::ShowCase

:DocsMeteors

#code

<!-- automd:file src="../../app/components/content/Docs/Meteors/DocsMeteors.vue" code lang="vue" -->

```vue [DocsMeteors.vue]
<template>
  <div
    class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border"
  >
    <UiMeteors :number="30" />
    <span
      class="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10"
    >
      Meteors
    </span>
  </div>
</template>
```

<!-- /automd -->

::
