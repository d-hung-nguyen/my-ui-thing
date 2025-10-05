<template>
  <div class="mx-auto grid w-full max-w-sm gap-4">
    <UiInputGroup>
      <UiInputGroupInput placeholder="Enter password" type="password" />
      <UiInputGroupAddon align="inline-end">
        <UiTooltip>
          <UiTooltipTrigger as-child>
            <UiInputGroupButton variant="ghost" aria-label="Info" size="icon-xs">
              <Icon name="lucide:info" />
            </UiInputGroupButton>
          </UiTooltipTrigger>
          <UiTooltipContent>
            <p>Password must be at least 8 characters</p>
            <UiTooltipArrow />
          </UiTooltipContent>
        </UiTooltip>
      </UiInputGroupAddon>
    </UiInputGroup>
    <UiInputGroup>
      <UiInputGroupInput placeholder="Your email address" />
      <UiInputGroupAddon align="inline-end">
        <UiTooltip>
          <UiTooltipTrigger as-child>
            <UiInputGroupButton variant="ghost" aria-label="Help" size="icon-xs">
              <Icon name="lucide:circle-help" />
            </UiInputGroupButton>
          </UiTooltipTrigger>
          <UiTooltipContent>
            <p>We'll use this to send you notifications</p>
            <UiTooltipArrow />
          </UiTooltipContent>
        </UiTooltip>
      </UiInputGroupAddon>
    </UiInputGroup>
    <UiInputGroup>
      <UiInputGroupInput placeholder="Enter API key" />
      <UiTooltip>
        <UiTooltipTrigger as-child>
          <UiInputGroupAddon>
            <UiInputGroupButton variant="ghost" aria-label="Help" size="icon-xs">
              <Icon name="lucide:circle-help" />
            </UiInputGroupButton>
          </UiInputGroupAddon>
        </UiTooltipTrigger>
        <UiTooltipContent side="left">
          <p>Click for help with API keys</p>
          <UiTooltipArrow />
        </UiTooltipContent>
      </UiTooltip>
    </UiInputGroup>
  </div>
</template>
