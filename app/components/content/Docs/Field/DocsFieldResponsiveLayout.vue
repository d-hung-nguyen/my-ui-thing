<template>
  <div class="mx-auto w-full max-w-4xl">
    <form>
      <UiFieldSet>
        <UiFieldLegend>Profile</UiFieldLegend>
        <UiFieldDescription>Fill in your profile information.</UiFieldDescription>
        <UiFieldSeparator />
        <UiFieldGroup>
          <UiField orientation="responsive">
            <UiFieldContent>
              <UiFieldLabel :for="id1">Name</UiFieldLabel>
              <UiFieldDescription> Provide your full name for identification </UiFieldDescription>
            </UiFieldContent>
            <UiInput :id="id1" placeholder="Evil Rabbit" required />
          </UiField>
          <UiFieldSeparator />
          <UiField orientation="responsive">
            <UiFieldContent>
              <UiFieldLabel :for="id2">Message</UiFieldLabel>
              <UiFieldDescription>
                You can write your message here. Keep it short, preferably under 100 characters.
              </UiFieldDescription>
            </UiFieldContent>
            <UiTextarea
              :id="id2"
              placeholder="Hello, world!"
              required
              class="min-h-[100px] resize-none sm:min-w-[300px]"
            />
          </UiField>
          <UiFieldSeparator />
          <UiField orientation="responsive">
            <UiButton type="submit">Submit</UiButton>
            <UiButton type="button" variant="outline"> Cancel </UiButton>
          </UiField>
        </UiFieldGroup>
      </UiFieldSet>
    </form>
  </div>
</template>

<script lang="ts" setup>
  const id1 = useId();
  const id2 = useId();
</script>
