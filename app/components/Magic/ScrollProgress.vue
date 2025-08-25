<template>
  <motion.div
    :class="scrollProgressStyles({ class: props.class })"
    :style="{
      scaleX: scrollYProgress,
    }"
  />
</template>

<script lang="ts">
  import { motion, useScroll } from "motion-v";
  import type { MotionProps } from "motion-v";
  import type { HTMLAttributes } from "vue";

  export type ScrollProgressProps = MotionProps & {
    /**
     * Custom class for the scroll progress bar
     */
    class?: HTMLAttributes["class"];
  };

  export const scrollProgressStyles = tv({
    base: "fixed inset-x-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]",
  });
</script>

<script lang="ts" setup>
  const { scrollYProgress } = useScroll();
  const props = defineProps<ScrollProgressProps>();
</script>
