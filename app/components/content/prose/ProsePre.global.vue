<template>
  <div class="relative">
    <div class="absolute top-[11px] right-3.5 flex items-center justify-center">
      <UiButton
        v-tippy="'Copy to clipboard'"
        variant="ghost"
        size="icon-xs"
        :aria-label="copied ? 'Copied' : 'Copy to clipboard'"
        :disabled="copied"
        @click="onCopy"
      >
        <AnimatePresence mode="wait">
          <Motion
            v-if="!copied"
            as-child
            as="svg"
            :initial="{ opacity: 0, scale: 0.8 }"
            :animate="{ opacity: 1, scale: 1 }"
            :exit="{ opacity: 0, scale: 0.8 }"
            :transition="{ duration: 0.2 }"
          >
            <Icon name="lucide:clipboard" aria-hidden="true" class="size-4 text-muted-foreground" />
          </Motion>
          <Motion
            v-if="copied"
            as-child
            as="svg"
            :initial="{ opacity: 0, scale: 0.8 }"
            :animate="{ opacity: 1, scale: 1 }"
            :exit="{ opacity: 0, scale: 0.8 }"
            :transition="{ duration: 0.2 }"
          >
            <Icon name="lucide:check" aria-hidden="true" class="size-4 text-emerald-500" />
          </Motion>
        </AnimatePresence>
      </UiButton>
    </div>
    <pre :class="[$attrs?.class]"><slot /></pre>
  </div>
</template>

<script lang="ts" setup>
  import { Motion } from "motion-v";

  const { contentPage } = await useDocPage();
  const route = useRoute();

  const props = defineProps<{
    code?: string;
    language?: string;
    filename?: string;
    highlights?: Array<number>;
    meta?: string;
  }>();

  const { copied, copy } = useClipboard();

  const onCopy = () => {
    if (!props.code) return;
    copy(props.code);
    useSonner("Copied to clipboard!");
    // Track copied code event
    useTrackEvent("copy_code", {
      code_source: "inline",
      code_language: props.language,
      file_name: props.filename,
      block_path: "N/A",
      component: props.filename,
      page_title: contentPage?.title || "unknown",
      page_path: route.path,
      page_location: window.location.href,
    });
  };
</script>
