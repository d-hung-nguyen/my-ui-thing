<template>
  <Separator
    data-slot="separator"
    v-bind="forwarded"
    :class="styles({ orientation, class: props.class })"
  />
</template>

<script lang="ts" setup>
  import { Separator, useForwardProps } from "reka-ui";
  import type { SeparatorProps } from "reka-ui";
  import type { HTMLAttributes } from "vue";

  const props = withDefaults(
    defineProps<
      SeparatorProps & {
        /**
         * Custom class(es) to add to the separator
         */
        class?: HTMLAttributes["class"];
      }
    >(),
    {
      orientation: "horizontal",
      decorative: true,
    }
  );

  const forwarded = useForwardProps(reactiveOmit(props, "class"));

  const styles = tv({
    base: "shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
    variants: {
      orientation: {
        horizontal: "h-[1px] w-full",
        vertical: "h-full w-[1px]",
      },
    },
  });
</script>
