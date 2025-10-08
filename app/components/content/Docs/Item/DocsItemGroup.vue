<template>
  <div class="mx-auto flex w-full max-w-md flex-col gap-6">
    <UiItemGroup>
      <template v-for="(person, index) in people" :key="index">
        <UiItem>
          <UiItemMedia>
            <UiAvatar>
              <UiAvatarImage :src="person.avatar" class="grayscale group-hover/item:grayscale-0" />
              <UiAvatarFallback>{{ person.username.charAt(0) }}</UiAvatarFallback>
            </UiAvatar>
          </UiItemMedia>
          <UiItemContent class="gap-1">
            <UiItemTitle>{{ person.username }}</UiItemTitle>
            <UiItemDescription>{{ person.email }}</UiItemDescription>
          </UiItemContent>
          <UiItemActions>
            <UiButton variant="ghost" size="icon" class="rounded-full">
              <Icon name="lucide:plus" />
            </UiButton>
          </UiItemActions>
        </UiItem>
        <UiItemSeparator v-if="index !== people.length - 1" />
      </template>
    </UiItemGroup>
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
