<template>
  <SwitchRoot
    v-slot="slotProps"
    data-slot="switch"
    v-bind="forwarded"
    :class="styles({ class: props.class })"
  >
    <UiSwitchThumb>
      <slot v-bind="slotProps" />
    </UiSwitchThumb>
  </SwitchRoot>
</template>

<script lang="ts" setup>
  import { SwitchRoot, useForwardPropsEmits } from "reka-ui";
  import type { SwitchRootEmits, SwitchRootProps } from "reka-ui";
  import type { HTMLAttributes } from "vue";

  const props = withDefaults(
    defineProps<
      SwitchRootProps & {
        /** Custom class(es) to add to parent element */
        class?: HTMLAttributes["class"];
        id?: HTMLAttributes["id"];
      }
    >(),
    {
      as: "button",
    }
  );
  const emits = defineEmits<SwitchRootEmits>();
  const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);

  const styles = tv({
    base: "peer inline-flex h-6 w-10 shrink-0 items-center rounded-full border-2 border-transparent transition-all outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
  });
</script>
