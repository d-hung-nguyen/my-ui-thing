<template>
  <div class="mx-auto grid w-full max-w-sm gap-4">
    <UiInputGroup>
      <UiInputGroupInput placeholder="Enter file name" />
      <UiInputGroupAddon align="inline-end">
        <UiDropdownMenu>
          <UiDropdownMenuTrigger as-child>
            <UiInputGroupButton variant="ghost" aria-label="More" size="icon-xs">
              <Icon name="lucide:ellipsis" />
            </UiInputGroupButton>
          </UiDropdownMenuTrigger>
          <UiDropdownMenuContent align="end">
            <UiDropdownMenuItem>Settings</UiDropdownMenuItem>
            <UiDropdownMenuItem>Copy path</UiDropdownMenuItem>
            <UiDropdownMenuItem>Open location</UiDropdownMenuItem>
          </UiDropdownMenuContent>
        </UiDropdownMenu>
      </UiInputGroupAddon>
    </UiInputGroup>
    <UiInputGroup class="[--radius:1rem]">
      <UiInputGroupInput placeholder="Enter search query" />
      <UiInputGroupAddon align="inline-end">
        <UiDropdownMenu>
          <UiDropdownMenuTrigger as-child>
            <UiInputGroupButton variant="ghost" class="!pr-1.5 text-xs">
              Search In... <Icon name="lucide:chevron-down" class="size-3" />
            </UiInputGroupButton>
          </UiDropdownMenuTrigger>
          <UiDropdownMenuContent align="end" class="[--radius:0.95rem]">
            <UiDropdownMenuItem>Documentation</UiDropdownMenuItem>
            <UiDropdownMenuItem>Blog Posts</UiDropdownMenuItem>
            <UiDropdownMenuItem>Changelog</UiDropdownMenuItem>
          </UiDropdownMenuContent>
        </UiDropdownMenu>
      </UiInputGroupAddon>
    </UiInputGroup>
  </div>
</template>
