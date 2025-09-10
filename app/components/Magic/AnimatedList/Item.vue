<template>
  <Motion v-bind="mergedAnimations" layout :class="styles({ class: props.class })">
    <slot />
  </Motion>
</template>

<script lang="ts" setup>
  import { cloneDeep, merge } from "lodash-es";
  import type { HTMLAttributes } from "vue";

  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring" as any, stiffness: 350, damping: 40 },
  };

  const props = defineProps<{
    /**
     * Additional CSS class(es) to apply to the Motion component.
     */
    class?: HTMLAttributes["class"];
  }>();

  const mergedAnimations = computed(() => {
    return merge(cloneDeep(animations), reactiveOmit(props, ["class"]));
  });

  const styles = tv({
    base: "mx-auto w-full",
  });
</script>
