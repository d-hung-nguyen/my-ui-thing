<template>
  <form class="mx-auto max-w-md" @submit="onSubmit">
    <fieldset :disabled="isSubmitting" class="space-y-5">
      <UiVeeCheckbox name="drinks" value="coffee" label="Coffee" hint="I love coffee" />
      <UiVeeCheckbox name="drinks" value="tea" label="Tea" hint="I love tea" />
      <UiVeeCheckbox name="drinks" value="water" label="Water" hint="I love water" />
      <UiButton :loading="isSubmitting" type="submit"> Order now </UiButton>
    </fieldset>
  </form>
</template>

<script lang="ts" setup>
  import { promiseTimeout } from "@vueuse/core";
  import { array, object, string } from "yup";

  const { handleSubmit, isSubmitting } = useForm({
    validationSchema: toTypedSchema(
      object({
        drinks: array()
          .min(1, "Please select at least one drink")
          .label("Drinks")
          .required()
          .of(string()),
      })
    ),
  });

  const onSubmit = handleSubmit(async (values) => {
    await promiseTimeout(2000); // Simulate a network request
    useSonner.success("Order Complete", {
      description: () => `We will be sending you ${values.drinks.join(", ")} soon!`,
    });
  });
</script>
