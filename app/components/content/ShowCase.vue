<template>
  <TabsRoot default-value="preview">
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
    <TabsContent value="preview">
      <div
        class="mt-3 flex min-h-[300px] items-center justify-center rounded-md border p-3 lg:p-10"
      >
        <div class="not-prose mx-auto w-full">
          <slot />
        </div>
      </div>
    </TabsContent>
    <TabsContent value="code">
      <div v-if="$slots?.code" class="-mt-4">
        <slot name="code" mdc-unwrap="p" />
      </div>
    </TabsContent>
  </TabsRoot>
</template>

<script lang="ts" setup>
  import { TabsContent, TabsList, TabsRoot, TabsTrigger } from "reka-ui";
</script>
