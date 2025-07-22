<template>
  <div class="container pb-10">
    <ui-gradient-divider class="mb-10" />
    <tabs-root default-value="tasks">
      <tabs-list class="mb-5 flex items-center overflow-x-auto">
        <tabs-trigger
          class="rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 data-[state=active]:bg-muted"
          value="tasks"
          >Tasks</tabs-trigger
        >
      </tabs-list>
      <tabs-content value="tasks" class="rounded-lg border bg-background p-6">
        <home-tasks />
      </tabs-content>
    </tabs-root>
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({ layout: "home" });
</script>
