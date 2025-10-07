<template>
  <div class="mx-auto w-full max-w-md space-y-6">
    <UiFieldSet>
      <UiFieldLegend>Address Information</UiFieldLegend>
      <UiFieldDescription> We need your address to deliver your order. </UiFieldDescription>
      <UiFieldGroup>
        <UiField>
          <UiFieldLabel :for="streetId">Street Address</UiFieldLabel>
          <UiInput :id="streetId" placeholder="123 Main St" />
        </UiField>
        <div class="grid grid-cols-2 gap-4">
          <UiField>
            <UiFieldLabel :for="cityId">City</UiFieldLabel>
            <UiInput :id="cityId" placeholder="New York" />
          </UiField>
          <UiField>
            <UiFieldLabel :for="zipId">Postal Code</UiFieldLabel>
            <UiInput :id="zipId" placeholder="90502" />
          </UiField>
        </div>
      </UiFieldGroup>
    </UiFieldSet>
  </div>
</template>

<script lang="ts" setup>
  const streetId = useId();
  const cityId = useId();
  const zipId = useId();
</script>
