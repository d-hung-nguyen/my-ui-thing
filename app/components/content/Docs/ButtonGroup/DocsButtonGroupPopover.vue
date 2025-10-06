<template>
  <div class="flex items-center justify-center">
    <UiButtonGroup>
      <UiButton variant="outline"> <Icon name="lucide:bot" /> Copilot </UiButton>
      <UiPopover>
        <UiPopoverTrigger as-child>
          <UiButton variant="outline" size="icon" aria-label="Open UiPopover">
            <Icon name="lucide:chevron-down" />
          </UiButton>
        </UiPopoverTrigger>
        <UiPopoverContent align="end" class="rounded-xl p-0 text-sm">
          <div class="px-4 py-3">
            <div class="text-sm font-medium">Agent Tasks</div>
          </div>
          <UiSeparator />
          <div class="p-4 text-sm *:[p:not(:last-child)]:mb-2">
            <UiTextarea
              placeholder="Describe your task in natural language."
              class="mb-4 resize-none"
            />
            <p class="font-medium">Start a new task with Copilot</p>
            <p class="text-muted-foreground">
              Describe your task in natural language. Copilot will work in the background and open a
              pull request for your review.
            </p>
          </div>
        </UiPopoverContent>
      </UiPopover>
    </UiButtonGroup>
  </div>
</template>
