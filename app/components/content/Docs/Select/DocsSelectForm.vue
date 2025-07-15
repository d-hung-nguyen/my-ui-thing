<template>
  <div class="flex w-full justify-center">
    <form @submit="onSubmit">
      <Field v-slot="{ componentField }" name="email">
        <UiFormItem label="Primary email" description="This will be shown to the public">
          <UiSelect v-bind="componentField">
            <UiSelectTrigger placeholder="Select primary email" />
            <UiSelectContent>
              <UiSelectGroup>
                <UiSelectItem v-for="(e, i) in emails" :key="i" :value="e" :text="e" />
              </UiSelectGroup>
            </UiSelectContent>
          </UiSelect>
        </UiFormItem>
      </Field>
      <div class="mt-4">
        <UiButton type="submit"> Update profile </UiButton>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
  import { object, string } from "yup";

  const emails = ["m@support.com", "m@google.com", "m@example.com"];

  const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(
      object({
        email: string()
          .label("Email")
          .oneOf(emails, "Please select a valid email")
          .required()
          .email(),
      })
    ),
  });

  const onSubmit = handleSubmit((data) => {
    useSonner("Profile updated", {
      description: h("pre", { class: "p-2" }, JSON.stringify(data, null, 2)),
    });
  });
</script>
