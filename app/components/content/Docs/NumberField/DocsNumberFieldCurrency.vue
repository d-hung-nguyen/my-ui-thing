<template>
  <div class="flex w-full items-center justify-center">
    <div class="max-w-[200px]">
      <UiNumberField
        :default-value="20_000"
        :min="0"
        :max="30_000"
        :format-options="{
          style: 'currency',
          currency: 'JMD',
        }"
      />
    </div>
  </div>
</template>
