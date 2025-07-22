<template>
  <div>
    <Mainnav />
    <div class="px-5 py-14 lg:px-2 lg:py-20">
      <home-hero />
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
  const { data: navigation } = await useAsyncData(
    "navigation",
    () => queryCollectionNavigation("content", ["icon", "label", "links", "layout"]),
    { default: () => [] }
  );

  provide("navigation", navigation);
</script>
