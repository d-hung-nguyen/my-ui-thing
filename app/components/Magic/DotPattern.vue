<template>
  <svg ref="containerRef" aria-hidden="true" :class="styles({ class: props.class })">
    <defs>
      <radialGradient :id="`${id}-gradient`">
        <stop offset="0%" :stop-color="dotColor" stop-opacity="1" />
        <stop offset="100%" :stop-color="dotColor" stop-opacity="0" />
      </radialGradient>
    </defs>
    <motion.circle
      v-for="dot in dots"
      :key="`${dot.x}-${dot.y}`"
      :cx="dot.x"
      :cy="dot.y"
      :r="cr"
      :fill="glow ? `url(#${id}-gradient)` : dotColor"
      :initial="glow ? { opacity: 0.4, scale: 1 } : {}"
      :animate="
        glow
          ? {
              opacity: [0.4, 1, 0.4],
              scale: [1, 2, 1],
            }
          : {}
      "
      :transition="
        glow
          ? {
              duration: dot.duration,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: dot.delay,
              ease: 'easeInOut',
            }
          : {}
      "
    />
  </svg>
</template>

<script lang="ts" setup>
  import { motion } from "motion-v";
  import type { HTMLAttributes } from "vue";

  interface DotPatternProps {
    /**
     * The horizontal spacing between dots
     * @default 16
     */
    width?: number;
    /**
     * The vertical spacing between dots
     * @default 16
     */
    height?: number;
    /**
     * The x-offset of the entire pattern
     * @default 0
     */
    x?: number;
    /**
     * The y-offset of the entire pattern
     * @default 0
     */
    y?: number;
    /**
     * The x-offset of individual dots
     * @default 1
     */
    cx?: number;
    /**
     * The y-offset of individual dots
     * @default 1
     */
    cy?: number;
    /**
     * The radius of individual dots
     * @default 1
     */
    cr?: number;
    /**
     * Additional classes to apply to the wrapper element.
     */
    class?: HTMLAttributes["class"];
    /**
     * Whether to enable the glowing animation effect
     * @default false
     */
    glow?: boolean;
    /**
     * The color of the dots
     * @default "currentColor"
     */
    dotColor?: string;
  }

  const props = withDefaults(defineProps<DotPatternProps>(), {
    width: 16,
    height: 16,
    x: 0,
    y: 0,
    cx: 1,
    cy: 1,
    cr: 1,
    glow: false,
    dotColor: "currentColor",
  });

  const styles = tv({
    base: "pointer-events-none absolute inset-0 h-full w-full text-neutral-400/80",
  });

  const id = useId();
  const containerRef = useTemplateRef("containerRef");
  const dimensions = ref({ width: 0, height: 0 });

  const updateDimensions = () => {
    if (containerRef.value) {
      const { width, height } = containerRef.value.getBoundingClientRect();
      dimensions.value = { width, height };
    }
  };

  onMounted(() => {
    updateDimensions();
    useEventListener("resize", updateDimensions);
  });

  const dots = computed(() => {
    return Array.from(
      {
        length:
          Math.ceil(dimensions.value.width / props.width) *
          Math.ceil(dimensions.value.height / props.height),
      },
      (_, i) => {
        const col = i % Math.ceil(dimensions.value.width / props.width);
        const row = Math.floor(i / Math.ceil(dimensions.value.width / props.width));
        return {
          x: col * props.width + props.cx,
          y: row * props.height + props.cy,
          delay: Math.random() * 5,
          duration: Math.random() * 3 + 2,
        };
      }
    );
  });
</script>
