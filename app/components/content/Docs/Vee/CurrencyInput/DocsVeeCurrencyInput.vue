<template>
  <form class="mx-auto max-w-md" @submit="onSubmit">
    <fieldset :disabled="isSubmitting" class="space-y-5">
      <UiVeeCurrencyInput
        placeholder="234"
        label="Toys total"
        name="toys"
        hint="The cost for the baby toys"
      />
      <UiVeeCurrencyInput
        placeholder="567"
        label="Food total"
        name="food"
        hint="The cost for the baby food"
      />
      <UiButton :loading="isSubmitting" type="submit"> Pay now </UiButton>
    </fieldset>
  </form>
</template>

<script lang="ts" setup>
  import { promiseTimeout } from "@vueuse/core";
  import { number, object } from "yup";

  const schema = object({
    toys: number().required().label("Toys total").min(50),
    food: number().required().label("Food total").min(150),
  });

  const { handleSubmit, isSubmitting } = useForm({
    validationSchema: toTypedSchema(schema),
  });

  const onSubmit = handleSubmit(async (_) => {
    await promiseTimeout(2000);
    useSonner.success("Payment successful", {
      description: "Your payment was processed successfully! ",
    });
  });
</script>
