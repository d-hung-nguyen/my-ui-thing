<template>
  <div class="mx-auto flex w-full max-w-lg flex-col gap-6">
    <UiItem variant="outline">
      <UiItemMedia variant="icon">
        <Icon name="lucide:shield-alert" />
      </UiItemMedia>
      <UiItemContent>
        <UiItemTitle>Security Alert</UiItemTitle>
        <UiItemDescription> New login detected from unknown device. </UiItemDescription>
      </UiItemContent>
      <UiItemActions>
        <UiButton size="sm" variant="outline"> Review </UiButton>
      </UiItemActions>
    </UiItem>
  </div>
</template>
