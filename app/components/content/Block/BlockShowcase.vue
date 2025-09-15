<template>
  <div
    class="not-prose"
    :style="{
      '--container-height': props.iframeHeight || '600px',
    }"
  >
    <div class="mb-5 flex items-center justify-between gap-5">
      <div class="flex h-8 items-center rounded-md border p-0.5 shadow-xs">
        <UiToggleGroup
          type="single"
          default-value="100"
          @update:model-value="
            (value) => {
              resizableRef?.resize(parseInt(value as string));
            }
          "
        >
          <UiToggleGroupItem v-tippy="'Desktop View'" class="size-6 rounded-sm p-0" value="100">
            <Icon class="size-3.5" name="lucide:monitor" />
          </UiToggleGroupItem>
          <UiToggleGroupItem v-tippy="'Tablet View'" class="size-6 rounded-sm p-0" value="60">
            <Icon class="size-3.5" name="lucide:tablet" />
          </UiToggleGroupItem>
          <UiToggleGroupItem v-tippy="'Mobile View'" value="40" class="size-6 rounded-sm p-0">
            <Icon class="size-3.5" name="lucide:smartphone" />
          </UiToggleGroupItem>
        </UiToggleGroup>
      </div>
      <div class="flex h-8 items-center gap-0.5 rounded-md border bg-background p-0.5 shadow-xs">
        <UiButton
          v-if="externalViewLink"
          v-tippy="'External View'"
          target="_blank"
          :href="externalViewLink"
          class="h-6 rounded-sm"
          size="icon-sm"
          variant="ghost"
        >
          <Icon name="lucide:square-arrow-out-up-right" class="size-3.5" />
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
          <Icon :name="copied ? 'lucide:check' : 'lucide:copy'" class="size-3.5" />
          <span class="sr-only">Copy Source Code</span>
        </UiButton>
        <BlockCodeShowcase
          v-if="codeBlock"
          :code="codeBlock"
          language="vue"
          language-icon="logos:vue"
          :title="trim(startCase(component)) || 'Block Code'"
        >
          <UiButton v-tippy="'View Code'" class="h-6 rounded-sm" size="icon-sm" variant="ghost">
            <Icon name="lucide:code" class="size-3.5" />
            <span class="sr-only">View Code</span>
          </UiButton>
        </BlockCodeShowcase>
      </div>
    </div>

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
              <IframeLazy
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
  </div>
</template>

<script lang="ts" setup>
  import IframeLazy from "~/components/Ui/IframeLazy.vue";
  import { startCase, trim } from "lodash-es";
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

  const isLoading = ref(true);
  const colorMode = useColorMode();

  const codeBlock = ref<string | null>(null);

  const _blockImports = import.meta.glob<string>("./**/*.vue", {
    query: "?raw",
    import: "default",
  });
  const importPath = async () => {
    isLoading.value = true;
    const path = _blockImports[`./${props.blockPath}.vue`];
    codeBlock.value = (await path?.()) ?? null;
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
</script>
