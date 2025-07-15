<template>
  <SwitchThumb data-slot="switch-thumb" :class="styles({ class: props.class })" v-bind="forwarded">
    <slot />
  </SwitchThumb>
</template>

<script lang="ts" setup>
  import { SwitchThumb } from "reka-ui";
  import type { SwitchThumbProps } from "reka-ui";
  import type { HTMLAttributes } from "vue";

  const props = defineProps<
    SwitchThumbProps & {
      /** Custom class(es) to add to parent element */
      class?: HTMLAttributes["class"];
    }
  >();
  const forwarded = reactiveOmit(props, "class");
  const styles = tv({
    base: "pointer-events-none block size-5 rounded-full bg-background shadow-xs ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0 data-[state=checked]:rtl:-translate-x-4",
  });
</script>
