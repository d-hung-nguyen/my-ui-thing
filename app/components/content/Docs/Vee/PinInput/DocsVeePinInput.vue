<template>
  <form @submit="onSubmit">
    <fieldset :disabled="isSubmitting" class="mx-auto grid w-fit max-w-xs grid-cols-1 gap-5">
      <UiVeePinInput :input-count="6" name="otp" label="Enter your 2FA code below" otp />
      <UiButton :loading="isSubmitting" type="submit"> Submit </UiButton>
    </fieldset>
  </form>
</template>

<script lang="ts" setup>
  import { promiseTimeout } from "@vueuse/core";
  import { array, object, string } from "yup";

  const schema = object({
    otp: array()
      .label("OTP")
      .typeError("Please enter a valid code")
      .min(1, "Please enter a valid code")
      .length(6, "Code must be exactly 6 characters long")
      .required()
      .of(string().label("Code").required()),
  });

  const { handleSubmit, isSubmitting } = useForm({
    validationSchema: toTypedSchema(schema),
  });

  const onSubmit = handleSubmit(async (values) => {
    await promiseTimeout(2000); // Simulate a network request
    useSonner.success(`Verifying Code`, {
      description: `Code ${values.otp?.join("")} verified! You may now continue`,
    });
  });
</script>
