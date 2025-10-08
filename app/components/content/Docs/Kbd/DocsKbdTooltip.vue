<template>
  <div class="mx-auto flex flex-wrap items-center justify-center gap-4">
    <UiButtonGroup>
      <UiTooltip>
        <UiTooltipTrigger as-child>
          <UiButton size="sm" variant="outline"> Save </UiButton>
        </UiTooltipTrigger>
        <UiTooltipContent>
          <div class="flex items-center gap-2">Save Changes <UiKbd>S</UiKbd></div>
        </UiTooltipContent>
      </UiTooltip>
      <UiTooltip>
        <UiTooltipTrigger as-child>
          <UiButton size="sm" variant="outline"> Print </UiButton>
        </UiTooltipTrigger>
        <UiTooltipContent>
          <div class="flex items-center gap-2">
            Print Document
            <UiKbdGroup>
              <UiKbd>Ctrl</UiKbd>
              <UiKbd>P</UiKbd>
            </UiKbdGroup>
          </div>
        </UiTooltipContent>
      </UiTooltip>
    </UiButtonGroup>
  </div>
</template>
