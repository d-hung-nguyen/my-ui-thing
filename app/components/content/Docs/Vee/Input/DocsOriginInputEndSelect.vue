<template>
  <div class="flex items-center justify-center">
    <UiVeeInput label="Input with end select" class="peer pr-20" placeholder="google">
      <template #trailingIcon>
        <select
          aria-label="Protocol"
          class="absolute inset-y-0 end-0 flex form-select rounded-e-md border border-input bg-background pe-7 text-sm text-muted-foreground peer-disabled:opacity-50 focus:border-input focus:border-primary focus:ring-[3px] focus:ring-ring/50"
        >
          <option>.com</option>
          <option>.org</option>
          <option>.net</option>
        </select>
      </template>
    </UiVeeInput>
  </div>
</template>
