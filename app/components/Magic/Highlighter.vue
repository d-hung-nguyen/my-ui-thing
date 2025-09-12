<template>
  <span ref="elementRef" class="relative inline-block bg-transparent">
    <slot />
  </span>
</template>

<script lang="ts">
  import { useInView } from "motion-v";
  import { annotate } from "rough-notation";
  import type {
    RoughAnnotation,
    RoughAnnotationConfig,
    RoughAnnotationType,
  } from "rough-notation/lib/model";

  export type HighlighterProps = RoughAnnotationConfig & {
    type?: RoughAnnotationType;
    isView?: boolean;
  };
</script>

<script lang="ts" setup>
  const props = withDefaults(defineProps<HighlighterProps>(), {
    type: "highlight",
    color: "#ffd1dc",
    strokeWidth: 1.5,
    animationDuration: 600,
    iterations: 2,
    padding: 2,
    multiline: true,
    animate: true,
    isView: true,
  });

  const elementRef = useTemplateRef("elementRef");
  const annotationRef = ref<RoughAnnotation | null>(null);
  const isMounted = useMounted();

  const isInView = useInView(elementRef, {
    once: true,
    margin: "-10%",
  } as any);

  // If isView is false, always show. If isView is true, wait for inView
  const shouldShow = computed(() => !props.isView || isInView.value);

  watchEffect((cleanUp) => {
    if (!shouldShow.value) return;
    if (!isMounted.value) return;
    const element = elementRef.value;
    if (!element) return;

    const annotation = annotate(element, {
      ...reactiveOmit(props, ["isView"]),
    });
    annotationRef.value = annotation;

    annotationRef.value?.show();

    const resizeObserver = new ResizeObserver(() => {
      annotation.hide();
      annotation.show();
    });

    resizeObserver.observe(element);
    resizeObserver.observe(document.body);

    cleanUp(() => {
      if (element) {
        annotationRef.value?.remove();
        annotationRef.value = null;
        resizeObserver.disconnect();
      }
    });
  });
</script>
