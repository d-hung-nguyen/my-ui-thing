<template>
  <div class="flex flex-col">
    <Mainnav />
    <main class="grid w-full grid-cols-1 px-6 lg:grid-cols-[290px_minmax(0,1fr)] lg:gap-10">
      <!-- Left sidebar with page links -->
      <div class="sticky top-14 z-20 hidden h-[calc(100dvh-57px)] border-r lg:block">
        <UiScrollArea class="h-[calc(100dvh-57px)] py-5 pr-6">
          <DocsNav :links="magic?.[0]?.children" />
        </UiScrollArea>
      </div>
      <!-- Page content -->
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
  const { magic } = await useDocNavigation();
  provide("navigation", magic?.[0]?.children);
</script>
