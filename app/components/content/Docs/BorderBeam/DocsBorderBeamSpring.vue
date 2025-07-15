<template>
  <div class="flex items-center justify-center">
    <UiButton class="relative overflow-hidden" size="lg" variant="outline">
      Buy Now
      <UiBorderBeam
        :size="40"
        :initial-offset="20"
        class="from-transparent via-yellow-500 to-transparent"
        :transition="{
          type: 'spring',
          stiffness: 60,
          damping: 20,
        }"
      />
    </UiButton>
  </div>
</template>
