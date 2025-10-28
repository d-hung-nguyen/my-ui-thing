<template>
  <div class="relative flex min-h-screen items-center justify-center bg-muted/30 p-4">
    <UiCard class="w-full max-w-lg">
      <div class="p-6 lg:p-8">
        <div class="mb-8 text-center">
          <div class="mb-4 flex justify-center">
            <div class="flex size-16 items-center justify-center rounded-full bg-primary/10">
              <Icon class="size-8 text-primary" name="lucide:lock-keyhole" />
            </div>
          </div>
          <h1 class="mb-2 text-2xl font-bold tracking-tight">{{ title }}</h1>
          <p class="text-sm text-muted-foreground">
            We sent a verification code to <strong>john@example.com</strong>
          </p>
        </div>

        <form @submit="submit">
          <fieldset :disabled="isSubmitting" class="grid gap-6">
            <div>
              <label class="mb-2 block text-center text-sm font-medium">
                Enter verification code
              </label>
              <UiVeePinInput
                class="justify-center **:data-[slot=pin-input-input]:size-12"
                name="code"
                :length="6"
                type="text"
                placeholder="0"
              />
              <p class="mt-2 text-center text-xs text-muted-foreground">
                Enter the 6-digit code we sent you
              </p>
            </div>

            <UiButton class="w-full" size="lg" type="submit"> Verify Code </UiButton>
          </fieldset>
        </form>

        <UiDivider class="my-6" />

        <div class="text-center">
          <p class="text-sm text-muted-foreground">
            Didn't receive the code?
            <button
              type="button"
              class="font-semibold text-primary underline-offset-2 hover:underline"
            >
              Resend code
            </button>
          </p>
        </div>

        <div class="mt-4 text-center">
          <NuxtLink
            class="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            to="#"
          >
            <Icon name="lucide:arrow-left" />
            Back to Log in
          </NuxtLink>
        </div>
      </div>
    </UiCard>
  </div>
</template>

<script lang="ts" setup>
  import { array, object, string } from "yup";
  import type { InferType } from "yup";

  const title = "Verify your email";
  const description = "Enter the verification code sent to your email.";

  useSeoMeta({ title, description });

  const OTPSchema = object({
    code: array().of(string()).min(6).required().label("Verification code"),
  });

  const { handleSubmit, isSubmitting } = useForm<InferType<typeof OTPSchema>>({
    validationSchema: OTPSchema,
  });

  const submit = handleSubmit(async (values) => {
    console.log(values);
    useSonner.success("Code verified", {
      description: "You can now reset your password.",
    });
  });
</script>
