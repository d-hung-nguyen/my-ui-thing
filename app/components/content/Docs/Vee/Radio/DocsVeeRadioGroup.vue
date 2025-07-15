<template>
  <form class="mx-auto w-fit max-w-md" @submit="onSubmit">
    <fieldset :disabled="isSubmitting" class="space-y-5">
      <UiVeeRadioGroup name="notify" label="Select how you want to be notified">
        <template v-for="(opt, i) in options" :key="i">
          <div class="mb-2 flex items-center gap-3">
            <UiRadioGroupItem :id="opt.value" :value="opt.value" />
            <UiLabel :for="opt.value">{{ opt.text }}</UiLabel>
          </div>
        </template>
      </UiVeeRadioGroup>
      <UiButton :loading="isSubmitting" type="submit"> Update settings </UiButton>
    </fieldset>
  </form>
</template>

<script lang="ts" setup>
  import { promiseTimeout } from "@vueuse/core";
  import { object, string } from "yup";

  const options = [
    { text: "Send me emails only", value: "email" },
    { text: "Send me SMS only", value: "sms" },
    { text: "Call me", value: "call" },
    { text: "Don't notify me", value: "none" },
  ] as const;

  const schema = object({
    notify: string()
      .label("Notification Method")
      .trim()
      .required()
      .oneOf(
        options.map((opt) => opt.value),
        "Invalid notification method"
      ),
  });

  const { handleSubmit, isSubmitting } = useForm({
    validationSchema: toTypedSchema(schema),
  });

  const onSubmit = handleSubmit(async (values) => {
    await promiseTimeout(2000); // Simulate a network request

    if (values.notify === "none") {
      useSonner.success("Settings Updated", {
        description: "You will no longer receive notifications",
      });
      return;
    } else {
      useSonner.success("Settings Updated", {
        description: `You will be notified by ${values.notify}`,
      });
    }
  });
</script>
