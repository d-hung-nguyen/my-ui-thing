<template>
  <div
    class="relative mt-3 rounded-lg border bg-muted/60 p-1.5 dark:bg-muted/10"
    :class="[hasLinesInMeta && 'show-line-number']"
  >
    <template v-if="hasFileName">
      <div class="not-prose flex items-center justify-between p-2 pb-4">
        <p class="truncate text-sm font-medium text-ellipsis">{{ fileNameEdited }}</p>
      </div>
    </template>
    <div
      class="absolute right-3.5 flex items-center justify-center"
      :class="[hasFileName ? 'top-[11px]' : 'top-[12px]']"
    >
      <prose-code-copy :code @code-copied="onCopy" />
    </div>
    <pre :class="[$attrs?.class, 'shadow-xs ring-1 ring-border/60']"><slot /></pre>
  </div>
</template>

<script lang="ts" setup>
  import { startCase } from "lodash-es";

  const { contentPage } = await useDocPage();
  const route = useRoute();

  const props = defineProps<{
    code?: string;
    language?: string;
    filename?: string;
    highlights?: Array<number>;
    meta?: string;
  }>();

  const fileNameEdited = computed(() => {
    if (!props.filename) return;
    return startCase(
      props.filename
        .split(".")
        .slice(0, -1)
        .join(".")
        .replace(/(D|d)oc(s)?/, "")
    );
  });
  const hasFileName = computed(() => !!props.filename);

  const hasLinesInMeta = computed(() => {
    if (!props.meta) return false;
    return props.meta.includes("lines");
  });

  const onCopy = () => {
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

<style>
  .show-line-number .line::before {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-xs--line-height));
    width: calc(var(--spacing) * 5);
    display: inline-block;
    text-align: center;
    margin-right: calc(var(--spacing) * 4);
    color: var(--muted-foreground);
  }

  .show-line-number .line:not(.diff)::before {
    content: attr(line);
  }
</style>
