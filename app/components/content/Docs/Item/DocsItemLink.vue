<template>
  <div class="mx-auto flex w-full max-w-md flex-col gap-4">
    <UiItem as-child>
      <NuxtLink href="#">
        <UiItemContent>
          <UiItemTitle>Visit our documentation</UiItemTitle>
          <UiItemDescription> Learn how to get started with our components. </UiItemDescription>
        </UiItemContent>
        <UiItemActions>
          <Icon name="lucide:chevron-right" class="size-4" />
        </UiItemActions>
      </NuxtLink>
    </UiItem>
    <UiItem variant="outline" as-child>
      <NuxtLink href="#" target="_blank" rel="noopener noreferrer">
        <UiItemContent>
          <UiItemTitle>External resource</UiItemTitle>
          <UiItemDescription> Opens in a new tab with security attributes. </UiItemDescription>
        </UiItemContent>
        <UiItemActions>
          <Icon name="lucide:external-link" class="size-4" />
        </UiItemActions>
      </NuxtLink>
    </UiItem>
  </div>
</template>

<script lang="ts" setup></script>
