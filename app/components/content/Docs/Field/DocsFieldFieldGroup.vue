<template>
  <div class="mx-auto w-full max-w-md">
    <UiFieldGroup>
      <UiFieldSet>
        <UiFieldLabel>Responses</UiFieldLabel>
        <UiFieldDescription>
          Get notified when ChatGPT responds to requests that take time, like research or image
          generation.
        </UiFieldDescription>
        <UiFieldGroup data-slot="checkbox-group">
          <UiField orientation="horizontal">
            <UiCheckbox :id="id1" default-value disabled />
            <UiFieldLabel :for="id1" class="font-normal"> Push notifications </UiFieldLabel>
          </UiField>
        </UiFieldGroup>
      </UiFieldSet>
      <UiFieldSeparator />
      <UiFieldSet>
        <UiFieldLabel>Tasks</UiFieldLabel>
        <UiFieldDescription>
          Get notified when tasks you've created have updates.
          <a href="#">Manage tasks</a>
        </UiFieldDescription>
        <UiFieldGroup data-slot="checkbox-group">
          <UiField orientation="horizontal">
            <UiCheckbox :id="id2" />
            <UiFieldLabel :for="id2" class="font-normal"> Push notifications </UiFieldLabel>
          </UiField>
          <UiField orientation="horizontal">
            <UiCheckbox :id="id3" />
            <UiFieldLabel :for="id3" class="font-normal"> Email notifications </UiFieldLabel>
          </UiField>
        </UiFieldGroup>
      </UiFieldSet>
    </UiFieldGroup>
  </div>
</template>

<script lang="ts" setup>
  const id1 = useId();
  const id2 = useId();
  const id3 = useId();
</script>
