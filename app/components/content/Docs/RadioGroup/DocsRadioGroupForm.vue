<template>
  <div class="flex w-full justify-center">
    <form @submit="onSubmit">
      <Field v-slot="{ componentField }" name="type">
        <UiFormItem class="space-y-5">
          <p class="font-medium">What type of notifications should we send?</p>
          <UiRadioGroup v-bind="componentField">
            <UiFormItem
              hide-message
              class="flex flex-row-reverse items-center justify-center gap-3 space-y-0"
              label="All notifications"
            >
              <UiRadioGroupItem value="all" />
            </UiFormItem>
            <UiFormItem
              hide-message
              class="flex flex-row-reverse items-center justify-center gap-3 space-y-0"
              label="Only mentions"
            >
              <UiRadioGroupItem value="mentions" />
            </UiFormItem>
            <UiFormItem
              hide-message
              class="flex flex-row-reverse items-center justify-center gap-3 space-y-0"
              label="Nothing"
            >
              <UiRadioGroupItem value="none" />
            </UiFormItem>
          </UiRadioGroup>
        </UiFormItem>
      </Field>
      <div class="mt-6">
        <UiButton type="submit">Update settings</UiButton>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
  import { object, string } from "yup";

  const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(
      object({
        type: string()
          .oneOf(["all", "mentions", "none"], "You need to select a notification type.")
          .required("You need to select a notification type."),
      })
    ),
  });

  const onSubmit = handleSubmit((values) => {
    useSonner("Settings updated", {
      description: h("pre", { class: "p-2" }, JSON.stringify(values, null, 2)),
    });
  });
</script>
