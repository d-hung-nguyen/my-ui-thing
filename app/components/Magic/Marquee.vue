<template>
  <div
    :class="marqueeStyles().wrapper({ class: props.wrapperClass, vertical, reverse, pauseOnHover })"
  >
    <div
      v-for="i in repeat"
      :key="i"
      :class="
        marqueeStyles().content({ class: props.contentClass, vertical, reverse, pauseOnHover })
      "
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
  import type { HTMLAttributes } from "vue";

  export type MarqueeProps = {
    /**
     * Optional CSS class name to apply custom styles
     */
    wrapperClass?: HTMLAttributes["class"];
    /**
     * Optional CSS class name to apply custom styles to content
     */
    contentClass?: HTMLAttributes["class"];
    /**
     * Whether to reverse the animation direction
     * @default false
     */
    reverse?: boolean;
    /**
     * Whether to pause the animation on hover
     * @default false
     */
    pauseOnHover?: boolean;
    /**
     * Whether to animate vertically instead of horizontally
     * @default false
     */
    vertical?: boolean;
    /**
     * Number of times to repeat the content
     * @default 4
     */
    repeat?: number;
  };

  export const marqueeStyles = tv({
    slots: {
      wrapper: "group flex [gap:var(--gap)] overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
      content: "flex shrink-0 justify-around [gap:var(--gap)]",
    },
    variants: {
      vertical: {
        true: {
          wrapper: "flex-col",
          content: "animate-marquee-vertical flex-col",
        },
        false: {
          wrapper: "flex-row",
          content: "animate-marquee flex-row",
        },
      },
      pauseOnHover: {
        true: {
          content: "group-hover:[animation-play-state:paused]",
        },
      },
      reverse: {
        true: {
          content: "[animation-direction:reverse]",
        },
      },
    },
  });
</script>

<script lang="ts" setup>
  const props = withDefaults(defineProps<MarqueeProps>(), {
    reverse: false,
    pauseOnHover: false,
    vertical: false,
    repeat: 4,
  });
</script>
