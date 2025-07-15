<template>
  <div class="mx-auto flex w-full max-w-xs items-center justify-center">
    <form class="w-full space-y-4" @submit="onSubmit">
      <Field v-slot="{ componentField }" name="total">
        <UiFormItem label="Grand total" description="This is what you came for, right?">
          <UiCurrencyInput v-bind="componentField" />
        </UiFormItem>
      </Field>
      <UiButton class="w-full" type="submit">Pay It</UiButton>
    </form>
  </div>
</template>

<script lang="ts" setup>
  import { number, object } from "yup";

  const schema = object({
    total: number()
      .label("Grand total")
      .required()
      .transform((v) => (v ? Number(v) : undefined))
      .min(1000),
  });

  const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(schema),
  });

  const onSubmit = handleSubmit((values) => {
    useSonner("Thank you for paying", {
      description: `You have paid ${new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(values.total)}`,
      closeButton: false,
      action: {
        label: "Undo",
        onClick: () => useSonner.dismiss(),
      },
    });
  });
</script>
