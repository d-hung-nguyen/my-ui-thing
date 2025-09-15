<template>
  <div ref="root" :class="styles().wrapper({ class: props.class })">
    <div v-if="!visible && placeholder" class="size-full">
      <slot name="placeholder"> <div class="size-full bg-muted" /> </slot>
    </div>

    <iframe
      v-show="visible"
      :src="visible ? src : undefined"
      :class="styles().iframe({ class: iframeClass })"
      :loading
      :sandbox
      frameborder="0"
      allowfullscreen
      @load="$emit('load', $event)"
    />
  </div>
</template>

<script setup lang="ts">
  import type { HTMLAttributes } from "vue";

  defineEmits<{ load: [event: Event] }>();

  type IFrameLazyProps = {
    /**
     * The URL of the page to embed in the iframe.
     */
    src?: string;
    /**
     * Additional classes to apply to the wrapper element.
     */
    class?: HTMLAttributes["class"];
    /**
     * Additional classes to apply to the iframe element.
     */
    iframeClass?: HTMLAttributes["class"];
    /**
     * Indicates when the browser should load the iframe
     *
     * - `lazy`: Load the iframe when it is about to come into view.
     * - `eager`: Load the iframe immediately.
     *
     * @default "lazy"
     */
    loading?: "lazy" | "eager";
    /**
     * A space-separated list of extra restrictions to apply to the content in the iframe.
     *
     * For more information, see: [docs here](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe#sandbox)
     *
     * @default "allow-scripts allow-same-origin"
     */
    sandbox?: string;
    /**
     * Whether to show a placeholder before the iframe is loaded.
     *
     * @default true
     */
    placeholder?: boolean;
    /**
     * A string which specifies a set of offsets to add to the root's bounding box when calculating intersections.
     *
     * @default "150px"
     */
    rootMargin?: string;
    /**
     * Either a single number or an array of numbers between 0.0 and 1.0, specifying a ratio of intersection area to total bounding box area for the observed target.
     * @default 0
     */
    threshold?: number | number[];
  };

  const props = withDefaults(defineProps<IFrameLazyProps>(), {
    loading: "lazy",
    sandbox: "allow-scripts allow-same-origin",
    rootMargin: "150px",
    placeholder: true,
  });

  const styles = tv({
    slots: {
      wrapper: "relative size-full",
      iframe: "size-full",
    },
  });

  const root = useTemplateRef("root");
  const visible = shallowRef(false);

  useIntersectionObserver(
    root,
    ([entry], observerElement) => {
      if (entry?.isIntersecting) {
        visible.value = true;
        observerElement?.disconnect();
      }
    },
    { root: null, rootMargin: props.rootMargin, threshold: props.threshold }
  );
</script>
