<template>
  <div class="mx-auto grid w-full max-w-sm gap-4">
    <UiInputGroup>
      <UiInputGroupInput id="email" placeholder="baybreezy" />
      <UiInputGroupAddon>
        <UiLabel for="email">@</UiLabel>
      </UiInputGroupAddon>
    </UiInputGroup>
    <UiInputGroup>
      <UiInputGroupInput id="email-2" placeholder="behon.baker.com" />
      <UiInputGroupAddon align="block-start">
        <UiLabel for="email-2" class="text-foreground"> Email </UiLabel>
        <UiTooltip>
          <UiTooltipTrigger as-child>
            <UiInputGroupButton
              variant="ghost"
              aria-label="Help"
              class="ml-auto rounded-full"
              size="icon-xs"
            >
              <Icon name="lucide:info" />
            </UiInputGroupButton>
          </UiTooltipTrigger>
          <UiTooltipContent>
            <p>We'll use this to send you notifications</p>
          </UiTooltipContent>
        </UiTooltip>
      </UiInputGroupAddon>
    </UiInputGroup>
  </div>
</template>
