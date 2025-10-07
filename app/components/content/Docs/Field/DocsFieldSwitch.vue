<template>
  <div class="mx-auto w-full max-w-md">
    <UiField orientation="horizontal">
      <UiFieldContent>
        <UiFieldLabel :for="id1">Multi-factor authentication</UiFieldLabel>
        <UiFieldDescription>
          Enable multi-factor authentication. If you do not have a two-factor device, you can use a
          one-time code sent to your email.
        </UiFieldDescription>
      </UiFieldContent>
      <UiSwitch :id="id1" />
    </UiField>
  </div>
</template>

<script lang="ts" setup>
  const id1 = useId();
</script>
