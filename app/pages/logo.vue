<template>
  <div class="space-y-8">
    <UiTabs v-model="activeTab" @update:model-value="handleTabChange">
      <UiTabsContent value="overview">
        <LogoShowcase />
      </UiTabsContent>

      <UiTabsContent value="variants">
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">Logo Variants</h2>
          <p class="text-muted-foreground">Different logo variations for various use cases.</p>
        </div>
      </UiTabsContent>

      <UiTabsContent value="downloads">
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">Download Assets</h2>
          <p class="text-muted-foreground">Download logo files in various formats.</p>
        </div>
      </UiTabsContent>
    </UiTabs>
  </div>
</template>

<script setup lang="ts">
  import { SITE_NAME } from "@/utils/seo";

  const activeTab = ref<string | number>("overview");

  const { setPageHeader, clearPageHeader } = usePageHeader();

  const handleTabChange = (value: string | number) => {
    activeTab.value = value;
    setPageHeader({ activeTab: String(value) });
  };

  definePageMeta({
    layout: "default",
  });

  onMounted(() => {
    setPageHeader({
      breadcrumbs: [
        { label: "Home", to: "/" },
        { label: "Brand", to: "/brand" },
        { label: "Logo" },
      ],
      title: "Logo & Brand",
      description: "Staynergie logo variants, usage, and guidelines",
      chips: ["brand", "design"],
      tabs: [
        { label: "Overview", value: "overview" },
        { label: "Variants", value: "variants" },
        { label: "Downloads", value: "downloads" },
      ],
      activeTab: String(activeTab.value),
    });
  });

  onBeforeUnmount(() => {
    clearPageHeader();
  });

  watch(activeTab, (value) => {
    setPageHeader({ activeTab: String(value) });
  });

  useSeoMeta({
    title: "Logo",
    titleTemplate: `%s | ${SITE_NAME}`,
    description: "staynergie logo design system and brand guidelines",
    ogTitle: "staynergie Logo",
    ogDescription: "Modern, tech-forward logo with overlapping blocks design",
    twitterTitle: "staynergie Logo",
    twitterDescription: "Modern, tech-forward logo with overlapping blocks design",
    twitterCard: "summary_large_image",
  });
</script>
