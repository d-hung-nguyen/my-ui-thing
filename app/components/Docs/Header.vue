<template>
  <div class="not-prose mb-10">
    <UiBreadcrumbs :items="items" class="mb-6" />
    <h1 class="text-4xl leading-none font-bold">{{ page?.title }}</h1>
    <p v-if="page?.description" class="text-muted-foreground mt-3 mb-6 text-lg">
      {{ page?.description }}
    </p>
    <div v-if="page?.links && page?.links?.length" class="not-prose flex flex-wrap gap-2">
      <template v-for="(link, i) in page?.links" :key="i">
        <a
          class="bg-muted inline-flex items-center justify-center gap-2 rounded-md px-2 py-1 text-[15px] md:text-sm"
          target="_blank"
          :href="link?.href"
          ><Icon v-if="link?.icon" :name="link.icon" class="text-muted-foreground h-3.5 w-3.5" />{{
            link?.title
          }}</a
        >

        <br />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { compact, startCase } from "lodash-es";
  import type { ContentCollectionItem } from "@nuxt/content";

  const props = defineProps<{
    page: ContentCollectionItem;
  }>();

  const items = computed(() => {
    const starting = startCase(compact(props.page?.path?.split("/"))[0] || "");
    const title = startCase(props.page?.title || "");
    return [{ label: starting }, { label: title }];
  });
</script>
