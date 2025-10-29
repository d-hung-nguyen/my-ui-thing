<template>
  <UiContainer class="flex flex-col gap-y-5 py-10 md:flex-row md:gap-10 md:py-0 lg:h-[720px]">
    <div class="flex h-full items-center justify-center md:w-2/3 xl:w-1/2">
      <div class="text-center md:text-left">
        <UiBadge to="#" variant="outline" class="px-3 py-1.5 text-xs font-normal md:py-2 md:text-sm"
          >We're hiring! Join our remote team <Icon class="ml-3 size-4" name="lucide:arrow-right"
        /></UiBadge>
        <h1 class="mt-7 mb-4 text-4xl font-bold md:text-5xl lg:mt-5 lg:mb-6 xl:text-6xl">
          People who care about your growth
        </h1>
        <p class="text-muted-foreground text-lg lg:text-xl">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain
          more.
        </p>
        <form class="mt-8 flex flex-col gap-3 lg:mt-12 lg:flex-row lg:items-center">
          <div class="w-full lg:w-[70%]">
            <UiVeeInput required placeholder="Enter your email" aria-label="Enter your email" />
          </div>
          <p class="text-muted-foreground my-2 text-left text-sm md:hidden">
            We care about your data in our privacy policy.
          </p>
          <div>
            <UiButton class="w-full whitespace-nowrap lg:w-auto" type="submit"
              >Get started</UiButton
            >
          </div>
        </form>
        <p class="text-muted-foreground mt-3 hidden text-sm md:block">
          We care about your data in our privacy policy.
        </p>
      </div>
    </div>
    <div class="h-[350px] md:h-full md:w-1/3 xl:w-1/2">
      <img
        class="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hero section one styles"
        loading="eager"
        width="700"
        height="800"
        :title="`${COMPANY_NAME} hero section one header`"
      />
    </div>
  </UiContainer>
</template>

<script lang="ts" setup></script>
