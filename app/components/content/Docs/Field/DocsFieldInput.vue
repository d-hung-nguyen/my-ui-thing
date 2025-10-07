<template>
  <div class="mx-auto w-full max-w-md">
    <UiFieldSet>
      <UiFieldGroup>
        <UiField>
          <UiFieldLabel :for="usernameId">Username</UiFieldLabel>
          <UiInput :id="usernameId" type="text" placeholder="james_bond" pattern="[a-z0-9_]+" />
          <UiFieldDescription> Choose a unique username for your account. </UiFieldDescription>
        </UiField>
        <UiField>
          <UiFieldLabel :for="passwordId">Password</UiFieldLabel>
          <UiFieldDescription> Must be at least 8 characters long. </UiFieldDescription>
          <UiInput :id="passwordId" type="password" placeholder="••••••••" />
        </UiField>
      </UiFieldGroup>
    </UiFieldSet>
  </div>
</template>

<script lang="ts" setup>
  const passwordId = useId();
  const usernameId = useId();
</script>
