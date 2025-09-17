<template>
  <Primitive :class="styles({ class: props.class })" :style="gridStyles">
    <div class="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
      <div
        class="[inset:0%_0px] [margin-left:-200%] [height:300vh] [width:600vw] [transform-origin:100%_0_0] animate-grid [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-size:var(--cell-size)_var(--cell-size)] [background-repeat:repeat] dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]"
      />
    </div>
    <div
      class="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black"
    />
  </Primitive>
</template>

<script lang="ts">
  import type { PrimitiveProps } from "reka-ui";
  import type { HTMLAttributes } from "vue";

  export interface RetroGridProps extends PrimitiveProps {
    /**
     * Additional CSS classes to apply to the grid container
     */
    class?: HTMLAttributes["class"];
    /**
     * Rotation angle of the grid in degrees
     * @default 65
     */
    angle?: number;
    /**
     * Grid cell size in pixels
     * @default 60
     */
    cellSize?: number;
    /**
     * Grid opacity value between 0 and 1
     * @default 0.5
     */
    opacity?: number;
    /**
     * Grid line color in light mode
     * @default "gray"
     */
    lightLineColor?: string;
    /**
     * Grid line color in dark mode
     * @default "gray"
     */
    darkLineColor?: string;
  }
</script>

<script lang="ts" setup>
  const props = withDefaults(defineProps<RetroGridProps>(), {
    angle: 65,
    cellSize: 60,
    opacity: 0.5,
    lightLineColor: "gray",
    darkLineColor: "gray",
    as: "div",
  });

  const gridStyles = computed(() => ({
    "--grid-angle": `${props.angle}deg`,
    "--cell-size": `${props.cellSize}px`,
    "--opacity": props.opacity,
    "--light-line": props.lightLineColor,
    "--dark-line": props.darkLineColor,
  }));

  const styles = tv({
    base: [
      "pointer-events-none absolute size-full overflow-hidden [perspective:200px]",
      "opacity-[var(--opacity)]",
    ],
  });
</script>
