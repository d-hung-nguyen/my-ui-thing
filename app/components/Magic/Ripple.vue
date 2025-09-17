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
