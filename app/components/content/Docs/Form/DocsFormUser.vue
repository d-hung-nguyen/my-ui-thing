<template>
  <UiCard
    class="mx-auto max-w-sm"
    title="Profile"
    description="Update your profile information below"
  >
    <template #content>
      <UiCardContent as="form" class="flex flex-col gap-4" @submit="onSubmit">
        <Field v-slot="{ componentField }" name="fullName">
          <UiFormItem label="Full name" description="This will be displayed to the public">
            <UiInput v-bind="componentField" />
          </UiFormItem>
        </Field>
        <Field v-slot="{ componentField }" name="email">
          <UiFormItem label="Email">
            <UiInput type="email" v-bind="componentField" />
          </UiFormItem>
        </Field>
        <Field v-slot="{ componentField }" name="phone">
          <UiFormItem hint="Optional" label="Phone">
            <UiInput type="tel" v-bind="componentField" />
          </UiFormItem>
        </Field>
        <div>
          <UiButton type="submit">Update profile</UiButton>
        </div>
      </UiCardContent>
    </template>
  </UiCard>
</template>

<script lang="ts" setup>
  import { object, string } from "yup";

  const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(
      object({
        fullName: string().label("Full Name").min(3).required().trim(),
        email: string().label("Email").email().required().trim(),
        phone: string()
          .label("Phone number")
          .transform((value) => (!value ? null : value))
          .length(10)
          .nullable(),
      })
    ),
  });

  const onSubmit = handleSubmit((values) => {
    alert(JSON.stringify(values, null, 2));
  });
</script>
