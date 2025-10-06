<template>
  <div class="flex items-center justify-center">
    <UiButtonGroup>
      <UiButton variant="outline">Follow</UiButton>
      <UiDropdownMenu>
        <UiDropdownMenuTrigger as-child>
          <UiButton variant="outline" class="!pl-2">
            <Icon name="lucide:chevron-down" />
          </UiButton>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuContent align="end" class="[--radius:1rem]">
          <UiDropdownMenuGroup>
            <UiDropdownMenuItem
              v-for="(item, i) in items"
              :key="i"
              :icon="item.icon"
              :title="item.label"
            />
          </UiDropdownMenuGroup>
          <UiDropdownMenuSeparator />
          <UiDropdownMenuGroup>
            <UiDropdownMenuItem variant="destructive">
              <Icon name="lucide:trash" />
              Delete Conversation
            </UiDropdownMenuItem>
          </UiDropdownMenuGroup>
        </UiDropdownMenuContent>
      </UiDropdownMenu>
    </UiButtonGroup>
  </div>
</template>

<script lang="ts" setup>
  const items = [
    { label: "Mute Conversation", icon: "lucide:volume-off" },
    { label: "Mark as Read", icon: "lucide:check" },
    { label: "Report Conversation", icon: "lucide:triangle-alert" },
    { label: "Block User", icon: "lucide:user-round-x" },
    { label: "Share Conversation", icon: "lucide:share" },
    { label: "Copy Conversation", icon: "lucide:copy" },
  ];
</script>
