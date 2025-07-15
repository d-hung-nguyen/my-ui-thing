<template>
  <Primitive
    data-slot="kbd"
    :class="styles({ size, variant, class: props.class })"
    v-bind="forwarded"
  >
    <slot />
  </Primitive>
</template>
<script setup lang="ts">
  import { Primitive } from "reka-ui";
  import type { PrimitiveProps } from "reka-ui";
  import type { HTMLAttributes } from "vue";

  const props = withDefaults(
    defineProps<
      PrimitiveProps & {
        /** The size of the component */
        size?: VariantProps<typeof styles>["size"];
        /** Custom class(es) to add to the parent */
        class?: HTMLAttributes["class"];
        /** The variant of the component */
        variant?: VariantProps<typeof styles>["variant"];
      }
    >(),
    {
      as: "kbd",
      size: "sm",
    }
  );

  const forwarded = reactiveOmit(props, "class", "size");

  const styles = tv({
    base: "pointer-events-none inline-flex items-center gap-1 rounded-sm border border-border bg-muted font-sans font-medium shadow-xs select-none",
    variants: {
      size: {
        xs: "h-5 min-h-[16px] px-1 text-[10px]",
        sm: "h-6 min-h-[20px] px-1.5 text-[11px]",
        md: "h-7 min-h-[24px] px-2 text-[12px]",
      },
      variant: {
        solid: "bg-muted",
        outline: "bg-transparent",
      },
    },
    defaultVariants: {
      size: "sm",
      variant: "solid",
    },
  });
</script>
