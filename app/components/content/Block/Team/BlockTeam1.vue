<template>
  <UiContainer class="pb-10">
    <UiContainer class="py-16 text-center lg:py-24">
      <slot name="headline">
        <p v-if="headline" class="text-primary font-semibold">{{ headline }}</p>
      </slot>
      <slot name="title">
        <h2 class="mt-2 mb-4 text-4xl font-bold lg:mt-3 lg:mb-6 lg:text-5xl">{{ title }}</h2>
      </slot>
      <slot name="description">
        <p class="text-muted-foreground mx-auto max-w-[768px] text-lg lg:text-xl">
          {{ description }}
        </p>
      </slot>
      <div class="mt-5 flex w-full flex-col-reverse justify-center gap-3 lg:w-auto lg:flex-row">
        <slot />
      </div>
    </UiContainer>
    <section
      class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-12 xl:grid-cols-4"
    >
      <template v-for="n in 8" :key="n">
        <div class="flex flex-col items-center">
          <UiAvatar
            class="ring-ring/20 mb-5 h-24 w-24 ring-1"
            src="https://api.dicebear.com/7.x/lorelei/svg?flip=false"
          />
          <p class="text-lg font-semibold">Jane Doe</p>
          <p class="text-primary">Marketing Manager</p>
        </div>
      </template>
    </section>
  </UiContainer>
</template>

<script lang="ts" setup>
  const headline = "We're hiring!";
  const title = "Meet our team";
  const description =
    "Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.";
</script>
