<template>
  <div class="flex items-center justify-center">
    <UiButtonGroup>
      <UiButtonGroup>
        <UiButton v-for="item in 5" :key="item" variant="outline" size="sm"> {{ item }} </UiButton>
      </UiButtonGroup>
      <UiButtonGroup>
        <UiButton variant="outline" size="icon-sm" aria-label="Previous">
          <Icon name="lucide:arrow-left" />
        </UiButton>
        <UiButton variant="outline" size="icon-sm" aria-label="Next">
          <Icon name="lucide:arrow-right" />
        </UiButton>
      </UiButtonGroup>
    </UiButtonGroup>
  </div>
</template>
