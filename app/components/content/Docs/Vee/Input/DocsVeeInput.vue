<template>
  <form class="mx-auto max-w-xs" @submit="onSubmit">
    <fieldset :disabled="isSubmitting" class="space-y-5">
      <UiVeeInput label="Full name" name="name" hint="This will be displayed to the public" />
      <UiVeeInput label="Email" name="email" type="email" />
      <UiVeeInput label="Age" name="age" type="number" />
      <UiButton :loading="isSubmitting" type="submit"> Submit </UiButton>
    </fieldset>
  </form>
</template>

<script lang="ts" setup>
  import { promiseTimeout } from "@vueuse/core";
  import { number, object, string } from "yup";

  const schema = object({
    name: string().required().label("Name").min(3),
    age: number()
      .required()
      .label("Age")
      .integer()
      .min(18)
      .max(120)
      .typeError("Age must be a number"),
    email: string().required().label("Email").email(),
  });

  const { handleSubmit, isSubmitting } = useForm({
    validationSchema: toTypedSchema(schema),
  });

  const onSubmit = handleSubmit(async (_) => {
    await promiseTimeout(3000);
    useSonner.success("Information Saved", {
      description: (_) => "We updated your information.",
    });
  });
</script>
