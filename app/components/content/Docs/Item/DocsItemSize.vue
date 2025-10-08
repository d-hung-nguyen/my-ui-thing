<template>
  <div class="mx-auto flex w-full max-w-md flex-col gap-6">
    <UiItem variant="outline">
      <UiItemContent>
        <UiItemTitle>Basic Item</UiItemTitle>
        <UiItemDescription> A simple item with title and description. </UiItemDescription>
      </UiItemContent>
      <UiItemActions>
        <UiButton variant="outline" size="sm"> Action </UiButton>
      </UiItemActions>
    </UiItem>
    <UiItem variant="outline" size="sm" as-child>
      <NuxtLink href="#">
        <UiItemMedia>
          <Icon name="lucide:badge-check" class="size-5" />
        </UiItemMedia>
        <UiItemContent>
          <UiItemTitle>Your profile has been verified.</UiItemTitle>
        </UiItemContent>
        <UiItemActions>
          <Icon name="lucide:chevron-right" class="size-4" />
        </UiItemActions>
      </NuxtLink>
    </UiItem>
  </div>
</template>
