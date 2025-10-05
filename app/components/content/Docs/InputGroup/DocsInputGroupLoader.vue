<template>
  <div class="mx-auto grid w-full max-w-sm gap-4">
    <UiInputGroup data-disabled>
      <UiInputGroupInput placeholder="Searching..." disabled />
      <UiInputGroupAddon align="inline-end">
        <UiLoader icon="svg-spinners:wind-toy" />
      </UiInputGroupAddon>
    </UiInputGroup>
    <UiInputGroup data-disabled>
      <UiInputGroupInput placeholder="Processing..." disabled />
      <UiInputGroupAddon>
        <UiLoader icon="svg-spinners:blocks-wave" />
      </UiInputGroupAddon>
    </UiInputGroup>
    <UiInputGroup data-disabled>
      <UiInputGroupInput placeholder="Saving changes..." disabled />
      <UiInputGroupAddon align="inline-end">
        <UiInputGroupText>Saving...</UiInputGroupText>
        <UiLoader icon="svg-spinners:3-dots-fade" />
      </UiInputGroupAddon>
    </UiInputGroup>
    <UiInputGroup data-disabled>
      <UiInputGroupInput placeholder="Refreshing data..." disabled />
      <UiInputGroupAddon>
        <UiLoader />
      </UiInputGroupAddon>
      <UiInputGroupAddon align="inline-end">
        <UiInputGroupText class="text-muted-foreground"> Please wait... </UiInputGroupText>
      </UiInputGroupAddon>
    </UiInputGroup>
  </div>
</template>
