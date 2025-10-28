<template>
  <div class="relative flex min-h-screen items-center justify-center bg-muted/30 p-4">
    <UiCard class="w-full max-w-md shadow-none">
      <div class="p-6 lg:p-8">
        <div class="mb-6 flex justify-center">
          <div class="flex size-16 items-center justify-center rounded-full bg-primary/10">
            <Icon class="size-8 text-primary" name="lucide:key-round" />
          </div>
        </div>

        <div class="mb-8 text-center">
          <h1 class="mb-2 text-2xl font-bold tracking-tight">{{ title }}</h1>
          <p class="text-sm text-muted-foreground">{{ description }}</p>
        </div>

        <form @submit="submit">
          <fieldset :disabled="isSubmitting" class="grid gap-5">
            <UiVeeInput
              label="Email address"
              type="email"
              name="email"
              placeholder="john@example.com"
              hint="We'll send you a link to reset your password"
            />
            <UiButton class="w-full" size="lg" type="submit"> Send Reset Link </UiButton>
          </fieldset>
        </form>

        <UiDivider class="my-6" label="or" />

        <div class="text-center">
          <p class="text-sm text-muted-foreground">
            Remember your password?
            <NuxtLink class="font-semibold text-primary underline-offset-2 hover:underline" to="#">
              Sign in
            </NuxtLink>
          </p>
        </div>
      </div>
    </UiCard>
  </div>
</template>

<script lang="ts" setup>
  import { object, string } from "yup";
  import type { InferType } from "yup";

  const title = "Forgot your password?";
  const description = "Enter your email and we'll send you a link to reset your password.";

  useSeoMeta({ title, description });

  const ForgotPasswordSchema = object({
    email: string().email().required().label("Email address"),
  });

  const { handleSubmit, isSubmitting } = useForm<InferType<typeof ForgotPasswordSchema>>({
    validationSchema: ForgotPasswordSchema,
  });

  const submit = handleSubmit(async (values) => {
    console.log(values);
    useSonner.success("Email sent", {
      description: "Check your inbox for password reset instructions.",
    });
  });
</script>
