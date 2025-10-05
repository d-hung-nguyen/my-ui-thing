<template>
  <div class="mx-auto grid w-full max-w-sm gap-6">
    <UiInputGroup>
      <UiInputGroupInput placeholder="Search..." />
      <UiInputGroupAddon>
        <Icon name="lucide:search" aria-label="Search" />
      </UiInputGroupAddon>
    </UiInputGroup>
    <UiInputGroup>
      <UiInputGroupInput type="email" placeholder="Enter your email" />
      <UiInputGroupAddon>
        <Icon name="lucide:mail" aria-label="Email" />
      </UiInputGroupAddon>
    </UiInputGroup>
    <UiInputGroup>
      <UiInputGroupInput placeholder="Card number" />
      <UiInputGroupAddon>
        <Icon name="lucide:credit-card" aria-label="Credit Card" />
      </UiInputGroupAddon>
      <UiInputGroupAddon align="inline-end">
        <Icon name="lucide:check" aria-label="Check" />
      </UiInputGroupAddon>
    </UiInputGroup>
    <UiInputGroup>
      <UiInputGroupInput placeholder="Card number" />
      <UiInputGroupAddon align="inline-end">
        <Icon name="lucide:star" aria-label="Star" />
        <Icon name="lucide:info" aria-label="Info" />
      </UiInputGroupAddon>
    </UiInputGroup>
  </div>
</template>
