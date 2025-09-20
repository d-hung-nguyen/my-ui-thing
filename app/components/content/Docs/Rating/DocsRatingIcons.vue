<template>
  <div class="flex flex-col items-center gap-4">
    <UiRating :model-value="4" icon="lucide:heart" filled-icon-class-name="text-red-500" />
    <UiRating
      editable
      :model-value="4"
      icon="lucide:sun-medium"
      filled-icon-class-name="text-green-500"
      empty-icon-class-name="text-green-500/30"
    />
  </div>
</template>
