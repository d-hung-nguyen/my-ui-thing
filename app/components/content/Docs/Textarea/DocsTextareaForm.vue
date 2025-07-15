<template>
  <form class="mx-auto max-w-xs" @submit="onSubmit">
    <Field v-slot="{ componentField }" name="bio">
      <UiFormItem label="Tell us about yourself" description="Feel free to @mention others">
        <UiTextarea v-bind="componentField" />
      </UiFormItem>
    </Field>
    <div class="mt-5">
      <UiButton type="submit">Submit</UiButton>
    </div>
  </form>
</template>

<script lang="ts" setup>
  import { object, string } from "yup";

  const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(
      object({
        bio: string().label("Bio").required().min(10).max(1000).trim(),
      })
    ),
  });

  const onSubmit = handleSubmit(() => {
    useSonner.success("Bio Updated", {
      description: "Your bio has been successfully updated.",
    });
  });
</script>
