<template>
  <Primitive :class="styles({ class: props.class })">
    <slot />
  </Primitive>
</template>

<script lang="ts" setup>
  import type { PrimitiveProps } from "reka-ui";
  import type { HTMLAttributes } from "vue";

  const props = defineProps<PrimitiveProps & { class?: HTMLAttributes["class"] }>();
  const styles = tv({
    base: "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
  });
</script>
