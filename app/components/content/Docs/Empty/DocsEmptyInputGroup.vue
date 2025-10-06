<template>
  <div class="flex items-center justify-center">
    <UiEmpty>
      <UiEmptyHeader>
        <UiEmptyTitle>404 - Not Found</UiEmptyTitle>
        <UiEmptyDescription>
          The page you're looking for doesn't exist. Try searching for what you need below.
        </UiEmptyDescription>
      </UiEmptyHeader>
      <UiEmptyContent>
        <UiInputGroup class="sm:w-3/4">
          <UiInputGroupInput placeholder="Try searching for pages..." />
          <UiInputGroupAddon>
            <Icon name="lucide:search" />
          </UiInputGroupAddon>
          <UiInputGroupAddon align="inline-end">
            <UiKbd>/</UiKbd>
          </UiInputGroupAddon>
        </UiInputGroup>
        <UiEmptyDescription> Need help? <a href="#">Contact support</a> </UiEmptyDescription>
      </UiEmptyContent>
    </UiEmpty>
  </div>
</template>
