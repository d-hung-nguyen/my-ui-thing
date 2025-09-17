<template>
  <div class="relative size-[600px] w-full overflow-hidden rounded-lg border bg-background">
    <MagicFlickeringGrid
      class="relative inset-0 z-0 [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
      :square-size="4"
      :grid-gap="6"
      color="#60A5FA"
      :max-opacity="0.5"
      :flicker-chance="0.1"
      :height="800"
      :width="800"
    >
      <div class="absolute inset-0 flex items-center justify-center">
        <p class="text-3xl font-semibold">See the edges?</p>
      </div>
    </MagicFlickeringGrid>
  </div>
</template>
