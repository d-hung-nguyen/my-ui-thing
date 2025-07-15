<template>
  <form class="mx-auto max-w-md" @submit="onSubmit">
    <fieldset :disabled="isSubmitting" class="space-y-5">
      <UiVeeTextarea label="First love" name="firstLove" hint="We will not share this" />
      <UiVeeTextarea
        label="First heartbreak"
        name="firstHeartbreak"
        hint="We will not share this"
      />
      <UiButton type="submit"> Save secrets </UiButton>
    </fieldset>
  </form>
</template>

<script lang="ts" setup>
  import { promiseTimeout } from "@vueuse/core";
  import { object, string } from "yup";

  const schema = object({
    firstLove: string().label("First Love").required().min(3).max(50).trim(),
    firstHeartbreak: string().label("First Heartbreak").required().min(3).max(50).trim(),
  });

  const { handleSubmit, isSubmitting } = useForm({
    validationSchema: toTypedSchema(schema),
  });

  const onSubmit = handleSubmit(async () => {
    await promiseTimeout(2000); // Simulate a network request
    useSonner("Secrets Saved", {
      description: "Your secrets have been saved successfully.",
    });
  });
</script>
