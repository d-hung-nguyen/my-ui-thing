<template>
  <div class="mx-auto w-full max-w-md">
    <UiFieldSet>
      <UiFieldLabel>Subscription Plan</UiFieldLabel>
      <UiFieldDescription>
        Yearly and lifetime plans offer significant savings.
      </UiFieldDescription>
      <UiRadioGroup default-value="monthly">
        <UiField orientation="horizontal">
          <UiRadioGroupItem :id="id1" value="monthly" />
          <UiFieldLabel :for="id1" class="font-normal"> Monthly ($9.99/month) </UiFieldLabel>
        </UiField>
        <UiField orientation="horizontal">
          <UiRadioGroupItem :id="id2" value="yearly" />
          <UiFieldLabel :for="id2" class="font-normal"> Yearly ($99.99/year) </UiFieldLabel>
        </UiField>
        <UiField orientation="horizontal">
          <UiRadioGroupItem :id="id3" value="lifetime" />
          <UiFieldLabel :for="id3" class="font-normal"> Lifetime ($299.99) </UiFieldLabel>
        </UiField>
      </UiRadioGroup>
    </UiFieldSet>
  </div>
</template>

<script lang="ts" setup>
  const id1 = useId();
  const id2 = useId();
  const id3 = useId();
</script>
