<template>
  <form @submit="onSubmit">
    <div class="mx-auto grid w-full max-w-xs">
      <Field v-slot="{ value, handleChange }" name="mode">
        <UiFormItem class="flex flex-col">
          <div class="flex items-center gap-3">
            <UiSwitch :model-value="value" @update:model-value="handleChange" />
            <UiFormLabel class="w-auto"> Airplane mode </UiFormLabel>
          </div>
        </UiFormItem>
      </Field>
      <div class="mt-4">
        <UiButton type="submit" size="sm"> Update </UiButton>
      </div>
    </div>
  </form>
</template>
<script lang="ts" setup>
  import { boolean, object } from "yup";

  const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(
      object({
        mode: boolean().label("Airplane Mode"),
      })
    ),
  });

  const onSubmit = handleSubmit((data) => {
    useSonner.success("Mode changed", {
      description: `Airplane mode is ${data.mode ? "on" : "off"}`,
    });
  });
</script>
