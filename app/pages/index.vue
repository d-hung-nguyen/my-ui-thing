<template>
  <div class="px-5 pb-10 lg:container">
    <ui-gradient-divider class="mb-10" />
    <tabs-root default-value="tasks">
      <tabs-list class="mb-5 flex items-center overflow-x-auto">
        <tabs-trigger
          class="data-[state=active]:bg-muted rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200"
          value="tasks"
          >Tasks</tabs-trigger
        >
      </tabs-list>
      <tabs-content value="tasks" class="bg-background rounded-lg border px-4 py-6 lg:p-6">
        <home-tasks />
      </tabs-content>
    </tabs-root>
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({ layout: "home" });
  defineOgImageComponent("UIThing", {
    title: "UI Thing - Beautiful UI components for your Nuxt projects",
    description: "Discover a collection of stunning UI components for your next Nuxt project.",
  });
</script>
