<template>
  <div ref="container" :style="{ position: 'relative', width, overflow: 'hidden' }">
    <motion.div
      :variants="{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }"
      initial="hidden"
      :animate="mainControls"
      :transition="{ duration: duration ? duration : 0.5, delay: 0.25 }"
    >
      <slot />
    </motion.div>

    <motion.div
      :variants="{
        hidden: { left: 0 },
        visible: { left: '100%' },
      }"
      initial="hidden"
      :animate="slideControls"
      :transition="{ duration: duration ? duration : 0.5, ease: 'easeIn' }"
      :style="{
        position: 'absolute',
        top: '4px',
        bottom: '4px',
        left: 0,
        right: 0,
        zIndex: 20,
        background: boxColor,
      }"
    />
  </div>
</template>

<script lang="ts">
  import { motion, useAnimationControls, useInView } from "motion-v";

  export interface BoxRevealProps {
    /**
     * Width of the container
     * @default 'fit-content'
     */
    width?: "fit-content" | "100%";
    /**
     * Color of the reveal box
     * @default 'var(--color-primary)'
     */
    boxColor?: string;
    /**
     * Duration of the reveal animation in seconds
     * @default 0.5
     */
    duration?: number;
  }
</script>

<script lang="ts" setup>
  withDefaults(defineProps<BoxRevealProps>(), {
    width: "fit-content",
    boxColor: "var(--color-primary)",
  });

  const mainControls = useAnimationControls();
  const slideControls = useAnimationControls();

  const containerRef = useTemplateRef("container");
  const isInView = useInView(containerRef, { once: true } as any);

  const isMounted = useMounted();
  watch(
    isInView,
    (inView) => {
      const state = inView ? "visible" : "hidden";
      if (!isMounted.value) return;
      slideControls.start(state);
      mainControls.start(state);
    },
    { immediate: true }
  );
</script>
