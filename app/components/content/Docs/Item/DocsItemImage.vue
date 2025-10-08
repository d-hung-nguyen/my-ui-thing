<template>
  <div class="mx-auto flex w-full max-w-md flex-col gap-6">
    <UiItemGroup class="gap-4">
      <UiItem v-for="(song, i) in music" :key="i" variant="outline" as-child role="listitem">
        <NuxtLink href="#">
          <UiItemMedia variant="image">
            <img
              :src="`https://avatar.vercel.sh/${song.title}`"
              :alt="song.title"
              :width="32"
              :height="32"
              class="object-cover grayscale transition-all group-hover/item:grayscale-0"
            />
          </UiItemMedia>
          <UiItemContent>
            <UiItemTitle class="line-clamp-1">
              {{ song.title }} -
              <span class="text-muted-foreground">{{ song.album }}</span>
            </UiItemTitle>
            <UiItemDescription>{{ song.artist }}</UiItemDescription>
          </UiItemContent>
          <UiItemContent class="flex-none text-center">
            <UiItemDescription>{{ song.duration }}</UiItemDescription>
          </UiItemContent>
        </NuxtLink>
      </UiItem>
    </UiItemGroup>
  </div>
</template>

<script lang="ts" setup>
  const music = [
    {
      title: "Midnight City Lights",
      artist: "Neon Dreams",
      album: "Electric Nights",
      duration: "3:45",
    },
    {
      title: "Coffee Shop Conversations",
      artist: "The Morning Brew",
      album: "Urban Stories",
      duration: "4:05",
    },
    {
      title: "Digital Rain",
      artist: "Cyber Symphony",
      album: "Binary Beats",
      duration: "3:30",
    },
  ];
</script>
