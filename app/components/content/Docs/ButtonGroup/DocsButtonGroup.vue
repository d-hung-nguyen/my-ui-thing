<template>
  <div class="flex items-center justify-center">
    <UiButtonGroup>
      <UiButtonGroup class="hidden sm:flex">
        <UiButton variant="outline" size="icon" aria-label="Go Back">
          <Icon name="lucide:arrow-left" />
        </UiButton>
      </UiButtonGroup>
      <UiButtonGroup>
        <UiButton variant="outline">Archive</UiButton>
        <UiButton variant="outline">Report</UiButton>
      </UiButtonGroup>
      <UiButtonGroup>
        <UiButton variant="outline">Snooze</UiButton>
        <UiDropdownMenu>
          <UiDropdownMenuTrigger as-child>
            <UiButton variant="outline" size="icon" aria-label="More Options">
              <Icon name="lucide:ellipsis" />
            </UiButton>
          </UiDropdownMenuTrigger>
          <UiDropdownMenuContent align="end" class="w-52">
            <UiDropdownMenuGroup>
              <UiDropdownMenuItem icon="lucide:mail-check" title="Mark as Read" />
              <UiDropdownMenuItem icon="lucide:archive" title="Archive" />
            </UiDropdownMenuGroup>
            <UiDropdownMenuSeparator />
            <UiDropdownMenuGroup>
              <UiDropdownMenuItem icon="lucide:clock" title="Snooze" />
              <UiDropdownMenuItem icon="lucide:calendar-plus" title="Add to Calendar" />
              <UiDropdownMenuItem icon="lucide:list-plus" title="Add to List" />
              <UiDropdownMenuSub>
                <UiDropdownMenuSubTrigger icon="lucide:tag" title="Label As..." />
                <UiDropdownMenuSubContent>
                  <UiDropdownMenuRadioGroup v-model="label">
                    <UiDropdownMenuRadioItem value="personal"> Personal </UiDropdownMenuRadioItem>
                    <UiDropdownMenuRadioItem value="work"> Work </UiDropdownMenuRadioItem>
                    <UiDropdownMenuRadioItem value="other"> Other </UiDropdownMenuRadioItem>
                  </UiDropdownMenuRadioGroup>
                </UiDropdownMenuSubContent>
              </UiDropdownMenuSub>
            </UiDropdownMenuGroup>
            <UiDropdownMenuSeparator />
            <UiDropdownMenuGroup>
              <UiDropdownMenuItem variant="destructive" icon="lucide:trash-2" title="Delete" />
            </UiDropdownMenuGroup>
          </UiDropdownMenuContent>
        </UiDropdownMenu>
      </UiButtonGroup>
    </UiButtonGroup>
  </div>
</template>

<script lang="ts" setup>
  const label = ref("personal");
</script>
