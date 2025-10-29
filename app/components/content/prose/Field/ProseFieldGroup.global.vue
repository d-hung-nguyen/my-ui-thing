<template>
  <div :class="styles.base({ variant })">
    <slot />
  </div>
</template>

<script lang="ts">
  import { tv } from "tailwind-variants";

  /**
   * Field group styles configuration using tailwind-variants
   */
  export const fieldGroupStyles = tv({
    slots: {
      base: "flex flex-col",
    },
    variants: {
      variant: {
        /**
         * Add dividers between fields
         */
        divided: "[&>*:not(:last-child)]:border-border [&>*:not(:last-child)]:border-b",
        /**
         * Add striped background to alternate fields
         */
        striped: "[&>*:nth-child(even)]:bg-muted dark:[&>*:nth-child(even)]:bg-muted/50 *:pl-4",
        /**
         * Add border around the group
         */
        bordered:
          "border-border [&>*:not(:last-child)]:border-border overflow-hidden rounded-lg border *:pl-4 [&>*:not(:last-child)]:border-b",
        /**
         * A combination of all variants
         */
        all: "border-border [&>*:not(:last-child)]:border-border [&>*:nth-child(even)]:bg-muted dark:[&>*:nth-child(even)]:bg-muted/50 overflow-hidden rounded-lg border *:pl-4 [&>*:not(:last-child)]:border-b",
      },
    },
    defaultVariants: {
      variant: "divided",
    },
  });

  /**
   * Field group component props type
   */
  export type ProseFieldGroupProps = {
    /**
     * The variant style of the field group
     */
    variant?: VariantProps<typeof fieldGroupStyles>["variant"];
  };
</script>

<script lang="ts" setup>
  withDefaults(defineProps<ProseFieldGroupProps>(), {
    variant: "divided",
  });

  const styles = fieldGroupStyles();
</script>
