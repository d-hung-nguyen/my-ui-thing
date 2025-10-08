<template>
  <div class="mx-auto flex w-full max-w-xl flex-col gap-6">
    <UiItem v-for="(item, index) in items" :key="index" :variant="item.variant">
      <UiItemContent>
        <UiItemTitle>{{ item.title }}</UiItemTitle>
        <UiItemDescription>
          {{ item.description }}
        </UiItemDescription>
      </UiItemContent>
      <UiItemActions>
        <UiButton variant="outline" size="sm">{{ item.action }}</UiButton>
      </UiItemActions>
    </UiItem>
  </div>
</template>

<script lang="ts" setup>
  const items = [
    {
      title: "Default Variant",
      description: "Standard styling with subtle background and borders.",
      action: "Open",
      variant: "default",
    },
    {
      title: "Outline Variant",
      description: "Outlined style with clear borders and transparent background.",
      action: "Open",
      variant: "outline",
    },
    {
      title: "Muted Variant",
      description: "Subdued appearance with muted colors for secondary content.",
      action: "Open",
      variant: "muted",
    },
  ] as const;
</script>
