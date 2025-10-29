<template>
  <div class="not-prose mt-10 py-10">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      <NuxtLink
        v-if="prev"
        :to="prev.path"
        class="hover:border-primary flex gap-4 rounded-md border p-5 transition"
      >
        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border">
          <Icon name="lucide:arrow-left" class="text-muted-foreground h-5 w-5" />
        </div>
        <div class="flex flex-col gap-1">
          <p class="font-semibold lg:text-sm">{{ prev.title }}</p>
          <p class="text-muted-foreground line-clamp-2 text-[15px] text-ellipsis lg:text-sm">
            {{ prev.description }}
          </p>
        </div>
      </NuxtLink>
      <NuxtLink
        v-if="next"
        :to="next.path"
        class="hover:border-primary flex gap-4 rounded-md border p-5 transition"
      >
        <div class="flex flex-col gap-1">
          <p class="font-semibold lg:text-sm">{{ next.title }}</p>
          <p class="text-muted-foreground line-clamp-2 text-[15px] text-ellipsis lg:text-sm">
            {{ next.description }}
          </p>
        </div>
        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border">
          <Icon name="lucide:arrow-right" class="text-muted-foreground h-5 w-5" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { Collections } from "@nuxt/content";

  const props = withDefaults(
    defineProps<{
      collection?: keyof Collections;
    }>(),
    {
      collection: "content",
    }
  );
  const route = useRoute();

  const surround = await queryCollectionItemSurroundings(props.collection, route.path, {
    fields: ["title", "description", "path"],
  }).where("path", "NOT LIKE", "%/.navigation");

  const prev = computed(() => surround?.[0]);
  const next = computed(() => surround?.[1]);
</script>
