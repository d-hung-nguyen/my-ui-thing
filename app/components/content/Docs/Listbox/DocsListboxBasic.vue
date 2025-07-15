<template>
  <div>
    <UiListbox v-model="selected">
      <UiListboxFilter v-model="searchTerm" placeholder="Search..." />
      <UiListboxContent class="max-h-full px-0">
        <UiScrollArea class="h-[300px]">
          <UiListboxGroup class="px-3">
            <template v-if="filteredPeople.length === 0">
              <div class="flex items-center justify-center py-5 text-sm font-medium">
                <span>No results found</span>
              </div>
            </template>
            <template v-else>
              <UiListboxGroupLabel>People</UiListboxGroupLabel>
              <template v-for="p in filteredPeople" :key="p">
                <UiListboxItem :value="p">
                  <span>{{ p }}</span>
                </UiListboxItem>
              </template>
            </template>
          </UiListboxGroup>
        </UiScrollArea>
      </UiListboxContent>
    </UiListbox>
  </div>
</template>

<script lang="ts" setup>
  import { faker } from "@faker-js/faker";
  import { useFilter } from "reka-ui";

  const genPeople = async () => {
    return Array.from({ length: 20 }, () => faker.person.fullName());
  };

  const { data: people } = await useAsyncData("listOfPeopleBasic", async () => genPeople(), {
    default: () => [],
  });

  const selected = ref(people.value?.[3]);
  const searchTerm = ref("");

  const { contains } = useFilter({ sensitivity: "base" });
  const filteredPeople = computed(() => people.value.filter((p) => contains(p, searchTerm.value)));
</script>
