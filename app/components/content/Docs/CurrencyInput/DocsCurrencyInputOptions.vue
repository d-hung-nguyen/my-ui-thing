<template>
  <div class="mx-auto flex w-full max-w-xs items-center justify-center">
    <UiCurrencyInput
      :options="{
        currency: 'JMD',
        autoDecimalDigits: true,
        precision: { min: 0, max: 4 },
      }"
      placeholder="What is the total?"
      :model-value="8518"
    />
  </div>
</template>
