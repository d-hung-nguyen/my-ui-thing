<template>
  <div>
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
