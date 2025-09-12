<template>
  <svg
    v-if="path"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    class="pointer-events-none absolute inset-0 size-full"
  >
    <circle
      class="stroke-black/10 stroke-1 dark:stroke-white/10"
      cx="50%"
      cy="50%"
      :r="radius"
      fill="none"
    />
  </svg>
  <div
    v-for="(item, i) in keyedChildren"
    :key="item.key"
    :style="{
      '--duration': calculatedDuration,
      '--radius': String(radius),
      '--angle': String((360 / keyedChildren.length) * i),
      '--icon-size': `${iconSize}px`,
      animationDelay: delay ? `${delay}s` : '0s',
    }"
    :class="styles({ reverse: props.reverse, class: props.class })"
    v-bind="$attrs"
  >
    <component :is="item.vnode" class="size-[var(--icon-size)]" />
  </div>
</template>

<script lang="ts">
  import type { HTMLAttributes, VNode } from "vue";

  export type OrbitingCirclesProps = {
    /**
     * Additional classes to apply to each orbiting item
     */
    class?: HTMLAttributes["class"];
    /**
     * Whether to reverse the orbit direction
     * @default false
     */
    reverse?: boolean;
    /**
     * Orbit duration in seconds
     * @default 20
     */
    duration?: number;
    /**
     * Orbit start delay in seconds
     */
    delay?: number;
    /**
     * Orbit radius in pixels
     * @default 160
     */
    radius?: number;
    /**
     * Whether to show the orbit path circle
     * @default true
     */
    path?: boolean;
    /**
     * Icon size in pixels
     * @default 30
     */
    iconSize?: number;
    /**
     * Speed multiplier for the orbit animation
     * @default 1
     */
    speed?: number;
  };
</script>

<script lang="ts" setup>
  defineOptions({ inheritAttrs: false });

  const styles = tv({
    base: "absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full",
    variants: {
      reverse: {
        true: "[animation-direction:reverse]",
        false: "",
      },
    },
  });
  const props = withDefaults(defineProps<OrbitingCirclesProps>(), {
    duration: 20,
    radius: 160,
    path: true,
    iconSize: 30,
    speed: 1,
  });

  const calculatedDuration = computed(() =>
    props.speed > 0 ? props.duration / props.speed : props.duration
  );

  // Get children
  const slots = useSlots();
  /** Raw VNodes from default slot */
  const rawChildren = computed<VNode[]>(() => {
    const slotNodes = slots.default?.() ?? [];
    if (!slotNodes.length) return [];
    const first = slotNodes[0];
    if (Array.isArray(first?.children)) {
      return first.children as VNode[];
    }
    if (typeof first?.children === "object" && first?.children !== null) {
      return Object.values(first.children) as VNode[];
    }
    return [];
  });

  /** Stable keyed list derived from VNodes */
  const keyedChildren = computed(() =>
    rawChildren.value.map((vnode, i) => ({
      vnode,
      key: (vnode.key ?? i) as any, // prefer vnode.key; fallback to index
    }))
  );
</script>
