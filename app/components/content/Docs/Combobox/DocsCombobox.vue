<template>
  <div class="flex justify-center">
    <UiPopover v-model:open="open">
      <UiPopoverTrigger as-child>
        <UiButton
          variant="outline"
          role="combobox"
          :aria-expanded="open"
          class="w-[200px] justify-between"
        >
          {{ value ? selectedFramework : "Select framework..." }}

          <Icon name="lucide:chevrons-up-down" class="ml-auto size-4 shrink-0 opacity-50" />
        </UiButton>
      </UiPopoverTrigger>
      <UiPopoverContent class="w-(--reka-popover-trigger-width) p-0">
        <UiCommand v-model="value" by="label">
          <UiCommandInput placeholder="Search framework..." />
          <UiCommandList>
            <UiCommandEmpty>No framework found.</UiCommandEmpty>
            <UiCommandGroup>
              <UiCommandItem
                v-for="framework in frameworks"
                :key="framework.value"
                :value="framework"
                @select="open = false"
              >
                {{ framework.label }}
                <Icon
                  name="lucide:check"
                  :class="[
                    'ml-auto size-4',
                    value?.value === framework.value ? 'opacity-100' : 'opacity-0',
                  ]"
                />
              </UiCommandItem>
            </UiCommandGroup>
          </UiCommandList>
        </UiCommand>
      </UiPopoverContent>
    </UiPopover>
  </div>
</template>

<script setup lang="ts">
  const frameworks = [
    { value: "next.js", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt.js", label: "Nuxt.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
  ];

  const open = ref(false);
  const value = ref();

  const selectedFramework = computed(
    () => frameworks.find((framework) => framework.value === value?.value?.value)?.label
  );
</script>
