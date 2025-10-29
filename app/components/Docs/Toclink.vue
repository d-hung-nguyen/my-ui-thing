<template>
  <nav class="flex flex-col gap-2 text-sm">
    <template v-for="(l, i) in links" :key="i">
      <NuxtLink
        v-if="!l.children"
        class="text-muted-foreground hover:text-foreground line-clamp-1 transition-all"
        :title="l.text"
        :style="{ marginLeft: `${l.depth > 2 ? l.depth * 2 : 0}%` }"
        :class="[
          activeId === l.id &&
            '!text-foreground decoration-muted-foreground underline underline-offset-2',
        ]"
        :to="`#${l.id}`"
        @click="setActive(l.id)"
        >{{ l.text }}</NuxtLink
      >
      <div v-else class="flex flex-col gap-2 text-sm">
        <NuxtLink
          class="text-muted-foreground hover:text-foreground line-clamp-1 transition-all"
          :title="l.text"
          :class="[
            activeId === l.id &&
              '!text-foreground decoration-muted-foreground underline underline-offset-2',
          ]"
          :to="`#${l.id}`"
          @click="setActive(l.id)"
          >{{ l.text }}</NuxtLink
        >
        <DocsToclink :set-active="setActive" :active-id="activeId" :links="l.children" />
      </div>
    </template>
  </nav>
</template>

<script lang="ts" setup>
  type Toclink = {
    text: string;
    id: string;
    depth: number;
    children?: Toclink[];
  };
  defineProps<{
    links: Toclink[];
    activeId: string;
    setActive: (id: string) => void;
  }>();
</script>
