<template>
  <div class="mx-auto w-full max-w-md">
    <UiFieldSet>
      <UiFieldGroup>
        <UiField>
          <UiFieldLabel :for="feedbackId">Feedback</UiFieldLabel>
          <UiTextarea :id="feedbackId" placeholder="Your feedback helps us improve..." :rows="4" />
          <UiFieldDescription> Share your thoughts about our service. </UiFieldDescription>
        </UiField>
      </UiFieldGroup>
    </UiFieldSet>
  </div>
</template>

<script lang="ts" setup>
  const feedbackId = useId();
</script>
