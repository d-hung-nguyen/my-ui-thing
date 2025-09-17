<template>
  <Motion
    :style="cssVars"
    class="absolute top-0 left-[var(--x)] [aspect-ratio:1/var(--aspect-ratio)] [width:var(--width)] [background:var(--background)]"
    :initial="{ y: '100cqmax', x: '-50%' }"
    :animate="{ y: '-100%', x: '-50%' }"
    :transition="{
      duration,
      delay,
      repeat: Infinity,
      ease: 'linear',
    }"
  />
</template>

<script lang="ts" setup>
  const hue = ref(Math.floor(Math.random() * 360));
  const ar = ref(Math.floor(Math.random() * 10) + 1);

  const props = defineProps<{
    /**
     * The width of the beam
     */
    width: string | number;
    /**
     * The x position of the beam (as a percentage or pixel value)
     */
    x: string | number;
    /**
     * The delay before the animation starts (in seconds)
     */
    delay: number;
    /**
     * The duration of the beam animation (in seconds)
     */
    duration: number;
  }>();

  const cssVars = computed(() => ({
    "--x": `${props.x}`,
    "--width": `${props.width}`,
    "--aspect-ratio": `${ar.value}`,
    "--background": `linear-gradient(hsl(${hue.value} 80% 60%), transparent)`,
  }));
</script>
