<template>
  <TabsRoot v-model="tab">
    <TabsList class="inline-flex items-center">
      <TabsTrigger as-child value="preview">
        <UiButton
          class="-mb-px rounded-none border-b-2 border-transparent text-sm hover:bg-transparent data-[state=active]:border-primary"
          variant="ghost"
        >
          Preview</UiButton
        >
      </TabsTrigger>
      <TabsTrigger value="code" as-child>
        <UiButton
          class="-mb-px rounded-none border-b-2 border-transparent text-sm hover:bg-transparent data-[state=active]:border-primary"
          variant="ghost"
        >
          Code</UiButton
        >
      </TabsTrigger>
    </TabsList>
    <AnimatePresence mode="wait">
      <Motion
        v-if="tab == 'preview'"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :exit="{ opacity: 0 }"
        :transition="{ duration: 0.2 }"
      >
        <TabsContent force-mount value="preview">
          <div
            class="mt-3 flex min-h-[300px] items-center justify-center rounded-lg border p-3 lg:p-10"
          >
            <div class="not-prose mx-auto w-full">
              <slot />
            </div>
          </div>
        </TabsContent>
      </Motion>
      <Motion
        v-else
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :exit="{ opacity: 0 }"
        :transition="{ duration: 0.2 }"
      >
        <TabsContent force-mount value="code">
          <slot name="code" mdc-unwrap="p" />
        </TabsContent>
      </Motion>
    </AnimatePresence>
  </TabsRoot>
</template>

<script lang="ts" setup>
  import { TabsContent, TabsList, TabsRoot, TabsTrigger } from "reka-ui";

  const tab = ref("preview");
</script>
