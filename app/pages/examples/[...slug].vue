<template>
  <div>
    <Mainnav />
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({ layout: "blank" });

  const { contentPage: page } = await useDocPage();

  useSeoMeta({
    title: page?.title,
    titleTemplate: `%s | ${SITE_TITLE}`,
    description: page?.description,
    keywords: SITE_KEYWORDS.join(", "),
    ogTitle: page?.title,
    ogDescription: page?.description,
    twitterTitle: page?.title,
    twitterDescription: page?.description,
    twitterCard: "summary_large_image",
  });
  defineOgImageScreenshot();
</script>
