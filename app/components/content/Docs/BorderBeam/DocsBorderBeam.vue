<template>
  <UiCard class="relative mx-auto w-[350px] overflow-hidden">
    <UiCardHeader>
      <UiCardTitle>Login</UiCardTitle>
      <UiCardDescription> Enter your credentials to access your account. </UiCardDescription>
    </UiCardHeader>
    <UiCardContent>
      <form>
        <div class="grid w-full items-center gap-4">
          <div class="flex flex-col space-y-1.5">
            <UiLabel for="email">Email</UiLabel>
            <UiInput id="email" type="email" placeholder="Enter your email" />
          </div>
          <div class="flex flex-col space-y-1.5">
            <UiLabel for="password">Password</UiLabel>
            <UiInput id="password" type="password" placeholder="Enter your password" />
          </div>
        </div>
      </form>
    </UiCardContent>
    <UiCardFooter class="flex justify-between">
      <UiButton variant="outline">Register</UiButton>
      <UiButton>Login</UiButton>
    </UiCardFooter>
    <UiBorderBeam :duration="8" :size="100" />
  </UiCard>
</template>
