<template>
  <div class="mx-auto grid w-full max-w-md gap-4">
    <UiInputGroup>
      <UiInputGroupTextarea
        id="textarea-code-32"
        placeholder="console.log('Hello, world!');"
        class="min-h-[200px]"
      />
      <UiInputGroupAddon align="block-end" class="border-t">
        <UiInputGroupText>Line 1, Column 1</UiInputGroupText>
        <UiInputGroupButton size="sm" class="ml-auto" variant="default">
          Run <Icon name="lucide:corner-down-left" />
        </UiInputGroupButton>
      </UiInputGroupAddon>
      <UiInputGroupAddon align="block-start" class="border-b">
        <UiInputGroupText class="font-mono font-medium">
          <Icon name="logos:javascript" />
          script.js
        </UiInputGroupText>
        <UiInputGroupButton aria-label="Run" class="ml-auto" size="icon-xs">
          <Icon name="lucide:refresh-ccw" />
        </UiInputGroupButton>
        <UiInputGroupButton aria-label="Copy" variant="ghost" size="icon-xs">
          <Icon name="lucide:copy" />
        </UiInputGroupButton>
      </UiInputGroupAddon>
    </UiInputGroup>
  </div>
</template>
