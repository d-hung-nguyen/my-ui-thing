<template>
  <UiCard
    as="form"
    title="Report an issue"
    description="What area are you having problems with?"
    @submit="submitReport"
  >
    <template #content>
      <UiCardContent class="flex flex-col gap-6">
        <div class="grid grid-cols-2 gap-4">
          <UiFormSelect label="Area" name="area" placeholder="Area">
            <template #content>
              <UiSelectContent>
                <UiSelectItem
                  v-for="m in areaOptions"
                  :key="m"
                  :value="m"
                  :text-value="m"
                  :text="m"
                />
              </UiSelectContent>
            </template>
          </UiFormSelect>
          <UiFormSelect label="Security Level" name="securityLevel" placeholder="Level">
            <template #content>
              <UiSelectContent>
                <UiSelectItem
                  v-for="m in securityLevels"
                  :key="m"
                  :value="m"
                  :text-value="m"
                  :text="m"
                />
              </UiSelectContent>
            </template>
          </UiFormSelect>
        </div>
        <UiVeeInput label="Subject" name="subject" placeholder="I need help with..." />
        <UiVeeTextarea
          label="Description"
          name="description"
          placeholder="Please include all information relevant to your issue."
        />
      </UiCardContent>
    </template>
    <template #footer>
      <UiCardFooter class="justify-end gap-2">
        <UiButton variant="ghost" @click="handleReset()">Cancel</UiButton>
        <UiButton type="submit">Continue</UiButton>
      </UiCardFooter>
    </template>
  </UiCard>
</template>

<script lang="ts" setup>
  import { promiseTimeout } from "@vueuse/core";
  import { object, string } from "yup";

  const ReportSchema = object({
    area: string().label("Area").required(),
    securityLevel: string().label("Security Level").required(),
    subject: string().label("Subject").required(),
    description: string().label("Description").required().min(10).max(500).trim(),
  });

  const { handleSubmit, handleReset } = useForm({
    validationSchema: toTypedSchema(ReportSchema),
  });

  const submitReport = handleSubmit(async (_) => {
    const id = useSonner.loading("Submitting your report...");
    await promiseTimeout(2000);
    useSonner.dismiss(id);
    useSonner.success("Report Submitted", {
      description: "Thank you for reporting this. We will look into it soon.",
    });
  });

  const areaOptions = ["Team", "Billing", "Account", "Deployments", "Support"];
  const securityLevels = [
    "Severity 1 (Highest)",
    "Severity 2",
    "Severity 3",
    "Severity 4 (Lowest)",
  ];
</script>
