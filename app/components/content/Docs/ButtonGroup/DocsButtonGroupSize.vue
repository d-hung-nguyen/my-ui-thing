<template>
  <div class="flex items-center justify-center">
    <div class="flex flex-col items-start gap-8">
      <UiButtonGroup>
        <UiButton variant="outline" size="sm"> Small </UiButton>
        <UiButton variant="outline" size="sm"> Button </UiButton>
        <UiButton variant="outline" size="sm"> Group </UiButton>
        <UiButton variant="outline" size="icon-sm">
          <Icon name="lucide:plus" />
        </UiButton>
      </UiButtonGroup>
      <UiButtonGroup>
        <UiButton variant="outline">Default</UiButton>
        <UiButton variant="outline">Button</UiButton>
        <UiButton variant="outline">Group</UiButton>
        <UiButton variant="outline" size="icon">
          <Icon name="lucide:plus" />
        </UiButton>
      </UiButtonGroup>
      <UiButtonGroup>
        <UiButton variant="outline" size="lg"> Large </UiButton>
        <UiButton variant="outline" size="lg"> Button </UiButton>
        <UiButton variant="outline" size="lg"> Group </UiButton>
        <UiButton variant="outline" size="icon" class="size-10">
          <Icon name="lucide:plus" />
        </UiButton>
      </UiButtonGroup>
    </div>
  </div>
</template>
