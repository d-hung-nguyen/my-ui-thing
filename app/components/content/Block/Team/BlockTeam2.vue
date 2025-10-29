<template>
  <UiContainer class="pb-10">
    <UiContainer class="py-16 text-center lg:py-24">
      <slot name="headline">
        <p class="text-primary font-semibold">{{ headline }}</p>
      </slot>
      <slot name="title">
        <h2 class="mt-2 mb-4 text-4xl font-bold lg:mt-3 lg:mb-6 lg:text-5xl">{{ title }}</h2>
      </slot>
      <slot name="description">
        <p class="text-muted-foreground mx-auto max-w-[768px] text-lg lg:text-xl">
          {{ description }}
        </p>
      </slot>
    </UiContainer>
    <section
      class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-12 xl:grid-cols-4"
    >
      <template v-for="n in 8" :key="n">
        <div class="flex flex-col">
          <UiAvatar
            class="ring-ring/20 mb-5 h-24 w-24 ring-1"
            src="https://api.dicebear.com/7.x/lorelei/svg?flip=false"
          />
          <p class="text-lg font-semibold">Jane Doe</p>
          <p class="text-primary">Marketing Manager</p>
          <ul class="text-muted-foreground mt-2">
            <li>Former co-founder of Opendoor.</li>
            <li>Early staff at Spotify and Clearbit.</li>
          </ul>
          <div class="mt-2 flex items-center gap-3">
            <Icon name="lucide:twitter" class="text-muted-foreground h-5 w-5" />
            <Icon name="lucide:linkedin" class="text-muted-foreground h-5 w-5" />
            <Icon name="lucide:dribbble" class="text-muted-foreground h-5 w-5" />
          </div>
        </div>
      </template>
    </section>
  </UiContainer>
</template>

<script lang="ts" setup>
  const headline = "We're hiring!";
  const title = "Some of the people you'll be working with";
  const description = "We're a 100% remote team spread all across the world. Join us!";
</script>
