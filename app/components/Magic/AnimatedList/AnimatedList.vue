<template>
  <div :class="styles({ class: props.class })">
    <AnimatePresence>
      <template v-for="node in itemsToShow" :key="node.key">
        <MagicAnimatedListItem>
          <component :is="node.vnode" />
        </MagicAnimatedListItem>
      </template>
    </AnimatePresence>
  </div>
</template>

<script setup lang="ts">
  import { AnimatePresence } from "motion-v";
  import type { HTMLAttributes, VNode } from "vue";

  const styles = tv({
    base: "flex flex-col items-center gap-4",
  });

  const props = withDefaults(
    defineProps<{
      /** Delay between revealing items (ms) */
      delay?: number;
      /** Additional CSS class(es) for the container */
      class?: HTMLAttributes["class"];
    }>(),
    {
      delay: 1000,
    }
  );

  const slots = useSlots();
  const index = ref(0);
  let timer: ReturnType<typeof setTimeout> | null = null;

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

  /** Visible items (newest first like your React version) */
  const itemsToShow = computed(() => {
    const visible = keyedChildren.value.slice(0, index.value + 1);
    return visible.reverse();
  });

  /** Progressive reveal (no modulo; stops at last) */
  function scheduleNext() {
    if (timer) clearTimeout(timer);
    if (index.value < keyedChildren.value.length - 1) {
      timer = setTimeout(() => {
        index.value = Math.min(index.value + 1, keyedChildren.value.length - 1);
        scheduleNext();
      }, props.delay);
    }
  }

  onMounted(() => {
    index.value = Math.min(index.value, keyedChildren.value.length - 1);
    scheduleNext();
  });

  onBeforeUnmount(() => {
    if (timer) clearTimeout(timer);
  });

  /** If the slot content count changes, restart the sequence */
  watch(
    () => keyedChildren.value.length,
    () => {
      if (timer) clearTimeout(timer);
      index.value = 0;
      scheduleNext();
    }
  );
</script>
