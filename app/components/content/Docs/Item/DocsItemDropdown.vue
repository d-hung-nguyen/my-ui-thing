<template>
  <div class="mx-auto flex min-h-64 w-full max-w-md flex-col items-center gap-6">
    <UiDropdownMenu>
      <UiDropdownMenuTrigger as-child>
        <UiButton variant="outline" size="sm" class="w-fit">
          Select <Icon name="lucide:chevron-down" />
        </UiButton>
      </UiDropdownMenuTrigger>
      <UiDropdownMenuContent class="w-72 [--radius:0.65rem]" align="end">
        <UiDropdownMenuItem v-for="person in people" :key="person.username" class="p-0">
          <UiItem size="sm" class="w-full p-2">
            <UiItemMedia>
              <UiAvatar class="size-8">
                <UiAvatarImage
                  :src="person.avatar"
                  :alt="`${person.username}'s avatar`"
                  class="grayscale"
                />
                <UiAvatarFallback>{{ person.username.charAt(0) }}</UiAvatarFallback>
              </UiAvatar>
            </UiItemMedia>
            <UiItemContent class="gap-0.5">
              <UiItemTitle>{{ person.username }}</UiItemTitle>
              <UiItemDescription>{{ person.email }}</UiItemDescription>
            </UiItemContent>
          </UiItem>
        </UiDropdownMenuItem>
      </UiDropdownMenuContent>
    </UiDropdownMenu>
  </div>
</template>

<script lang="ts" setup>
  const people = [
    {
      username: "baybreezy",
      avatar: "https://github.com/baybreezy.png",
      email: "baybreezy@uithing.com",
    },
    {
      username: "mirari",
      avatar: "https://github.com/mirari.png",
      email: "mirari@uithing.com",
    },
    {
      username: "evilrabbit",
      avatar: "https://github.com/evilrabbit.png",
      email: "evilrabbit@uithing.com",
    },
  ];
</script>
