<template>
  <button
    :style="{
      '--spread': '90deg',
      '--shimmer-color': shimmerColor,
      '--radius': borderRadius,
      '--speed': shimmerDuration,
      '--cut': shimmerSize,
      '--bg': background,
    }"
    :class="shimmerButtonStyles({ class: props.class })"
  >
    <!-- spark container -->
    <div class="[container-type:size] absolute inset-0 -z-30 overflow-visible blur-[2px]">
      <!-- spark  -->
      <div
        class="absolute inset-0 [aspect-ratio:1] h-[100cqh] animate-shimmer-slide [border-radius:0] [mask:none]"
      >
        <!--  spark before -->
        <div
          class="absolute -inset-full w-auto [translate:0_0] rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]"
        />
      </div>
    </div>
    <slot />
    <!-- Highlight -->
    <div
      class="absolute inset-0 size-full transform-gpu rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f] transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"
    />
    <!-- backdrop -->
    <slot name="backdrop">
      <div
        class="absolute [inset:var(--cut)] -z-20 [border-radius:var(--radius)] [background:var(--bg)]"
      />
    </slot>
  </button>
</template>

<script lang="ts">
  import type { HTMLAttributes } from "vue";

  export type ShimmerButtonProps = {
    /*
     * The color of the shimmer effect
     * @default "#ffffff"
     */
    shimmerColor?: string;
    /**
     * The size of the shimmer effect
     * @default "0.05em"
     */
    shimmerSize?: string;
    /**
     * The border radius of the button
     * @default "100px"
     */
    borderRadius?: string;
    /**
     * The duration of the shimmer effect
     * @default "3s"
     */
    shimmerDuration?: string;
    /**
     * The background color of the button
     * @default "rgba(0, 0, 0, 1)"
     */
    background?: string;
    /**
     * Additional classes to apply to the button
     */
    class?: HTMLAttributes["class"];
  };

  export const shimmerButtonStyles = tv({
    base: [
      "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden [border-radius:var(--radius)] border border-white/10 px-6 py-3 whitespace-nowrap text-white [background:var(--bg)]",
      "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
    ],
  });
</script>
<script lang="ts" setup>
  const props = withDefaults(defineProps<ShimmerButtonProps>(), {
    shimmerColor: "#ffffff",
    shimmerSize: "0.05em",
    shimmerDuration: "3s",
    borderRadius: "100px",
    background: "rgba(0, 0, 0, 1)",
  });
</script>
