<template>
  <div class="mx-auto w-full max-w-md">
    <UiField>
      <UiFieldLabel :for="id">Department</UiFieldLabel>
      <UiSelect>
        <UiSelectTrigger :id="id" class="w-full">
          <UiSelectValue placeholder="Choose department" />
        </UiSelectTrigger>
        <UiSelectContent>
          <UiSelectItem value="engineering">Engineering</UiSelectItem>
          <UiSelectItem value="design">Design</UiSelectItem>
          <UiSelectItem value="marketing">Marketing</UiSelectItem>
          <UiSelectItem value="sales">Sales</UiSelectItem>
          <UiSelectItem value="support">Customer Support</UiSelectItem>
          <UiSelectItem value="hr">Human Resources</UiSelectItem>
          <UiSelectItem value="finance">Finance</UiSelectItem>
          <UiSelectItem value="operations">Operations</UiSelectItem>
        </UiSelectContent>
      </UiSelect>
      <UiFieldDescription>Select your department or area of work.</UiFieldDescription>
    </UiField>
  </div>
</template>

<script lang="ts" setup>
  const id = useId();
</script>
