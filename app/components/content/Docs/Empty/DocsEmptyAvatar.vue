<template>
  <div class="flex items-center justify-center">
    <UiEmpty>
      <UiEmptyHeader>
        <UiEmptyMedia variant="default">
          <UiAvatar class="size-12">
            <UiAvatarImage src="https://github.com/BayBreezy.png" class="grayscale" />
            <UiAvatarFallback>BB</UiAvatarFallback>
          </UiAvatar>
        </UiEmptyMedia>
        <UiEmptyTitle>User Offline</UiEmptyTitle>
        <UiEmptyDescription>
          This user is currently offline. You can leave a message to notify them or try again later.
        </UiEmptyDescription>
      </UiEmptyHeader>
      <UiEmptyContent>
        <UiButton size="sm">Leave Message</UiButton>
      </UiEmptyContent>
    </UiEmpty>
  </div>
</template>
