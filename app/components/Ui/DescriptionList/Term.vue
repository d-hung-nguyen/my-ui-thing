<template>
  <Primitive
    data-slot="description-list-term"
    v-bind="reactiveOmit(props, 'class', 'text')"
    :class="descriptionListDetailsStyles({ class: props.class })"
  >
    <slot>{{ text }}</slot>
  </Primitive>
</template>
<script lang="ts">
  import { reactiveOmit } from "@vueuse/core";
  import { Primitive } from "reka-ui";
  import type { PrimitiveProps } from "reka-ui";
  import type { HTMLAttributes } from "vue";

  export type DescriptionDetailsProps = PrimitiveProps & {
    /**
     * Text to display in the description term
     */
    text?: string;
    /**
     * Custom class(es) to add to the element
     */
    class?: HTMLAttributes["class"];
  };

  export const descriptionListDetailsStyles = tv({
    base: "text-muted-foreground border-t pt-3 first:border-none sm:py-3",
  });
</script>

<script lang="ts" setup>
  const props = withDefaults(defineProps<DescriptionDetailsProps>(), {
    as: "dt",
  });
</script>
