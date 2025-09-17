<template>
  <div class="relative h-[500px] w-full overflow-hidden rounded-lg border bg-background">
    <MagicFlickeringGrid
      class="absolute inset-0 z-0 size-full"
      :square-size="4"
      :grid-gap="6"
      color="#6B7280"
      :max-opacity="0.5"
      :flicker-chance="0.1"
      :height="800"
      :width="800"
    />
  </div>
</template>
