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
  import { kebabCase } from "lodash-es";

  const route = useRoute();
  const { data: navigation } = await useAsyncData(
    kebabCase(route.path) + "navigation",
    () => queryCollectionNavigation("content", ["icon", "label", "links", "layout"]),
    { default: () => [] }
  );

  provide("navigation", navigation);
</script>
