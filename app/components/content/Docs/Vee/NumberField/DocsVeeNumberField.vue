<template>
  <form class="mx-auto w-full max-w-xs" @submit="submit">
    <fieldset :disabled="isSubmitting" class="grid grid-cols-1 gap-5">
      <UiVeeNumberField
        :min="0"
        label="Payment"
        name="payment"
        :format-options="{
          style: 'currency',
          currency: 'USD',
        }"
      >
        <UiNumberFieldInput placeholder="15" />
        <UiNumberFieldDecrement class="border-l" />
        <UiNumberFieldIncrement class="border-l" />
      </UiVeeNumberField>
      <UiButton :loading="isSubmitting" type="submit">Submit</UiButton>
    </fieldset>
  </form>
</template>
<script lang="ts" setup>
  import { promiseTimeout } from "@vueuse/core";
  import { number, object } from "yup";

  const { handleSubmit, resetForm, isSubmitting } = useForm({
    validationSchema: object({
      payment: number().required().min(0).label("Payment").typeError("Payment is required."),
    }),
  });

  const submit = handleSubmit(async () => {
    await promiseTimeout(2000);
    useSonner.success("Record updated", {
      description: "Your payment has been successfully updated.",
    });
    resetForm();
  });
</script>
