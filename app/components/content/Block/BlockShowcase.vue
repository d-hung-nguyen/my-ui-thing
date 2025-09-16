<template>
  <div
    :style="{
      '--container-height': props.iframeHeight || '600px',
    }"
  >
    <UiTabs v-model="selectedTab">
      <div class="mb-3 flex items-center justify-between gap-5">
        <UiTabsList class="h-auto">
          <UiTabsTrigger class="h-7 px-2 text-xs" value="preview">Preview</UiTabsTrigger>
          <UiTabsTrigger class="h-7 px-2 text-xs" value="code">Code</UiTabsTrigger>
        </UiTabsList>
        <div class="flex h-8 items-center rounded-md border bg-background p-0.5 shadow-xs">
          <AnimatePresence>
            <Motion
              v-if="selectedTab === 'preview' && !isLoading"
              :initial="{ opacity: 0, width: 0, scale: 0 }"
              :animate="{ opacity: 1, width: 'auto', scale: 1 }"
              :exit="{ opacity: 0, width: 0, scale: 0 }"
              :transition="{ type: 'spring', stiffness: 500, damping: 30 }"
            >
              <UiToggleGroup
                type="single"
                default-value="100"
                @update:model-value="
                  (value) => {
                    resizableRef?.resize(parseInt(value as string));
                  }
                "
              >
                <UiToggleGroupItem
                  v-tippy="'Desktop View'"
                  class="size-6 rounded-sm p-0"
                  value="100"
                >
                  <Icon class="size-3.5" name="lucide:monitor" />
                  <span class="sr-only">Desktop View</span>
                </UiToggleGroupItem>
                <UiToggleGroupItem v-tippy="'Tablet View'" class="size-6 rounded-sm p-0" value="60">
                  <Icon class="size-3.5" name="lucide:tablet" />
                  <span class="sr-only">Tablet View</span>
                </UiToggleGroupItem>
                <UiToggleGroupItem v-tippy="'Mobile View'" value="40" class="size-6 rounded-sm p-0">
                  <Icon class="size-3.5" name="lucide:smartphone" />
                  <span class="sr-only">Mobile View</span>
                </UiToggleGroupItem>
              </UiToggleGroup>
            </Motion>
          </AnimatePresence>
          <UiButton
            v-if="externalViewLink"
            v-tippy="'Full Screen View'"
            target="_blank"
            :href="externalViewLink"
            class="h-6 rounded-sm"
            variant="ghost"
          >
            <Icon name="lucide:gallery-vertical" class="size-3.5" />
            <span class="sr-only">External View</span>
          </UiButton>
          <UiButton
            v-if="codeBlock"
            v-tippy="'Copy Source Code'"
            class="h-6 rounded-sm"
            size="icon-sm"
            variant="ghost"
            @click="copy(codeBlock)"
          >
            <Icon :name="copied ? 'lucide:check' : 'lucide:clipboard'" class="size-3.5" />
            <span class="sr-only">Copy Source Code</span>
          </UiButton>
        </div>
      </div>

      <UiTabsContent value="preview">
        <div class="relative h-(--container-height) rounded-lg bg-muted">
          <ClientOnly>
            <UiSplitter id="block-resizable" direction="horizontal" class="relative z-10">
              <UiSplitterPanel
                id="block-resizable-panel-1"
                class="relative overflow-hidden rounded-lg border bg-background transition-all"
                :default-size="100"
                :min-size="40"
                @ready="resizableRef = $event"
              >
                <div v-if="!isLoading && externalViewLink" class="absolute inset-0 bg-background">
                  <UiIframeLazy
                    class="z-20 h-(--container-height) w-full bg-background"
                    :src="externalViewLink"
                    :class="props.frameClass"
                    @load="isLoading = false"
                  />
                </div>
              </UiSplitterPanel>
              <UiSplitterHandle class="bg-transparent" />
              <UiSplitterPanel id="block-resizable-panel-2" :default-size="0" :min-size="0" />
            </UiSplitter>
          </ClientOnly>
        </div>
      </UiTabsContent>
      <UiTabsContent value="code" class="[&_pre]:!mt-0">
        <ClientOnly>
          <template #fallback>
            <UiLoader />
          </template>
          <MDC :value="formattedCode" />
        </ClientOnly>
      </UiTabsContent>
    </UiTabs>
  </div>
</template>

<script lang="ts" setup>
  import type { SplitterPanel } from "reka-ui";
  import type { HtmlHTMLAttributes } from "vue";

  const props = withDefaults(
    defineProps<{
      blockPath?: string;
      component?: string;
      iframeHeight?: string;
      frameClass?: HtmlHTMLAttributes["class"];
      containerClass?: HtmlHTMLAttributes["class"];
    }>(),
    {
      blockPath: "",
      component: "Block Code",
    }
  );

  if (!props.blockPath)
    throw createError({
      statusCode: 400,
      statusMessage: "[BlockShowcase.vue] Block path is required.",
    });

  const selectedTab = ref("preview");
  const isLoading = ref(true);
  const colorMode = useColorMode();

  const codeBlock = ref<string | undefined>(undefined);

  const _blockImports = import.meta.glob<string>("./**/*.vue", {
    query: "?raw",
    import: "default",
  });
  const importPath = async () => {
    isLoading.value = true;
    const path = _blockImports[`./${props.blockPath}.vue`];
    codeBlock.value = (await path?.()) ?? undefined;
    isLoading.value = false;
  };

  const resizableRef = ref<InstanceType<typeof SplitterPanel>>();

  watch(
    () => colorMode.value,
    async () => {
      importPath();
    }
  );

  onMounted(importPath);

  const { copied, copy } = useClipboard({ copiedDuring: 2500, legacy: true });

  const externalViewLink = computed(() => {
    return `/block-renderer?component=${encodeURIComponent(props.component)}&path=${encodeURIComponent(props.blockPath)}&containerClass=${encodeURIComponent(props.containerClass ?? "")}`;
  });

  const formattedCode = computed(() => {
    return `\`\`\`vue\n${codeBlock.value}\n\`\`\``;
  });
</script>
