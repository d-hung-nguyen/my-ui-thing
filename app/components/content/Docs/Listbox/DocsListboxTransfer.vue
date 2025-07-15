<template>
  <div class="flex h-[310px] w-full gap-5">
    <UiListbox v-model="selectedList1" class="w-full" multiple highlight-on-hover>
      <UiListboxContent class="h-full max-h-full">
        <UiListboxGroup>
          <UiListboxGroupLabel>List 1</UiListboxGroupLabel>
          <UiGradientDivider class="mt-1 mb-2" />
          <template v-for="(item, i) in list1" :key="i">
            <UiListboxItem :value="item">{{ item }}</UiListboxItem>
          </template>
        </UiListboxGroup>
      </UiListboxContent>
    </UiListbox>
    <div class="flex shrink-0 items-center gap-2">
      <UiButton
        :disabled="!selectedList2.length"
        size="icon"
        variant="outline"
        @click="transferAction('2to1')"
      >
        <Icon name="lucide:chevron-left" class="size-4" />
      </UiButton>
      <UiButton
        :disabled="!selectedList1.length"
        size="icon"
        variant="outline"
        @click="transferAction('1to2')"
      >
        <Icon name="lucide:chevron-right" class="size-4" />
      </UiButton>
    </div>

    <UiListbox v-model="selectedList2" class="w-full" multiple highlight-on-hover>
      <UiListboxContent class="h-full max-h-full">
        <UiListboxGroup>
          <UiListboxGroupLabel>List 2</UiListboxGroupLabel>
          <UiGradientDivider class="mt-1 mb-2" />
          <template v-for="(item, i) in list2" :key="i">
            <UiListboxItem :value="item">{{ item }}</UiListboxItem>
          </template>
        </UiListboxGroup>
      </UiListboxContent>
    </UiListbox>
  </div>
</template>

<script lang="ts" setup>
  const states = [
    "California",
    "Illinois",
    "Maryland",
    "Texas",
    "Florida",
    "Colorado",
    "Connecticut ",
  ];

  const list1 = ref([...states]);
  const list2 = ref<string[]>([]);

  const selectedList1 = ref<string[]>([]);
  const selectedList2 = ref<string[]>([]);

  function transferAction(action: "1to2" | "2to1") {
    const [fromList, toList, selectedList] =
      action === "1to2" ? [list1, list2, selectedList1] : [list2, list1, selectedList2];

    fromList.value = fromList.value.filter((item) => !selectedList.value.includes(item));
    toList.value.push(...selectedList.value);
    selectedList.value = [];
  }
</script>
