<template>
  <form class="mx-auto w-full max-w-xs" @submit="onSubmit">
    <fieldset :disabled="isSubmitting" class="grid gap-5">
      <UiVeeTagsInput
        :max="5"
        placeholder="Type a brand and press enter..."
        label="Car brands"
        name="brands"
        hint="This will be displayed to the public"
      />
      <UiButton :loading="isSubmitting" type="submit"> Submit </UiButton>
    </fieldset>
  </form>
</template>

<script lang="ts" setup>
  import { promiseTimeout } from "@vueuse/core";
  import { array, object, string } from "yup";

  const schema = object({
    brands: array(string().label("Brand")).label("Brands").min(2).max(5).required(),
  });

  const { handleSubmit, isSubmitting } = useForm({
    validationSchema: toTypedSchema(schema),
  });

  const onSubmit = handleSubmit(async (values) => {
    await promiseTimeout(2000); // Simulate a network request
    useSonner.success("Brands Submitted", {
      description: h("pre", null, JSON.stringify(values.brands, null, 2)),
    });
  });
</script>
