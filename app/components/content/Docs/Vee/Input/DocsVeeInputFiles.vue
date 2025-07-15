<template>
  <form class="mx-auto max-w-md" @submit="onSubmit">
    <fieldset :disabled="isSubmitting" class="space-y-5">
      <UiVeeFileInput multiple label="Certificates" name="certs" hint="Add at least 2 files" />
      <UiButton :loading="isSubmitting" type="submit"> Upload files </UiButton>
    </fieldset>
  </form>
</template>

<script lang="ts" setup>
  import { promiseTimeout } from "@vueuse/core";
  import { array, mixed, object } from "yup";

  const ACCEPTED_TYPES = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "text/plain",
    "image/jpeg",
    "image/png",
    "image/webp",
  ];

  const schema = object({
    certs: array()
      .of(
        mixed()
          .required()
          .label("Certificate")
          .test({
            message: "Ensure that the select file(s) are valid",
            name: "is-valid",
            test(v: any) {
              return ACCEPTED_TYPES.includes(v.type?.toLowerCase());
            },
          })
      )
      .min(2, "Upload at least 2 files")
      .label("Certificates")
      .required(),
  });

  const { handleSubmit, isSubmitting } = useForm({
    validationSchema: toTypedSchema(schema),
  });

  const onSubmit = handleSubmit(async (_, ctx) => {
    await promiseTimeout(3000);

    useSonner.success("Updated Successfully", {
      description: "We updated your information.",
    });
    ctx.resetForm();
  });
</script>
