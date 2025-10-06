<template>
  <div class="flex items-center justify-center">
    <UiButtonGroup>
      <UiButtonGroup>
        <UiSelect v-model="currency">
          <UiSelectTrigger class="w-fit font-mono">{{ currency }}</UiSelectTrigger>
          <UiSelectContent class="min-w-24">
            <UiSelectItem v-for="item in CURRENCIES" :key="item.value" :value="item.value">
              {{ item.value }}
              <span class="text-muted-foreground">{{ item.label }}</span>
            </UiSelectItem>
          </UiSelectContent>
        </UiSelect>
        <UiInput placeholder="10" pattern="^\d+(\.\d+)?$" />
      </UiButtonGroup>
      <UiButtonGroup>
        <UiButton aria-label="Send" size="icon" variant="outline">
          <Icon name="lucide:arrow-right" />
        </UiButton>
      </UiButtonGroup>
    </UiButtonGroup>
  </div>
</template>

<script lang="ts" setup>
  const currency = ref("$");
  const CURRENCIES = [
    { value: "$", label: "US Dollar" },
    { value: "€", label: "Euro" },
    { value: "£", label: "British Pound" },
  ];
</script>
