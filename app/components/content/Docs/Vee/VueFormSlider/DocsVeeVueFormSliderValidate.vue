<template>
  <form class="mx-auto flex max-w-md flex-col gap-6" @submit="submit">
    <UiLabel for="slider">Age Range</UiLabel>
    <UiVeeVueFormSlider id="slider" v-model="value" show-tooltip="drag" />
    <UiButton type="submit">Set Range</UiButton>
  </form>
</template>

<script lang="ts" setup>
  import { array, number, object } from "yup";

  const value = ref([18, 60]);

  const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(
      object({
        slider: array().of(number().label("Age range").min(18).max(60)),
      })
    ),
  });

  const submit = handleSubmit((values) => {
    useSonner.success("Range Set", {
      description: `The age range has been set to ${values.slider?.[0]}-${values.slider?.[1]}.`,
    });
  });
</script>
