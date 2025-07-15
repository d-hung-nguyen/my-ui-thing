<template>
  <div class="mx-auto flex w-full max-w-lg items-center justify-center">
    <form class="w-full space-y-4" @submit="onSubmit">
      <Field v-slot="{ componentField }" name="username">
        <UiFormItem label="Username" description="Others will be able to see this">
          <UiInput v-bind="componentField" />
        </UiFormItem>
      </Field>
      <div>
        <UiButton type="submit">Update</UiButton>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
  import { object, string } from "yup";

  const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(
      object({
        username: string().label("Username").required().min(3).max(20).trim().lowercase(),
      })
    ),
  });

  const onSubmit = handleSubmit((values) => {
    useSonner("Form submitted successfully!", {
      description: `Your username has been updated to ${values.username}.`,
    });
  });
</script>
