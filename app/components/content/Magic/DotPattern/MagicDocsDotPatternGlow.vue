<template>
  <div
    class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background"
  >
    <div class="isolate">
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0, transition: { delay: 0.6 } }"
        :while-hover="{ scale: 1.05, rotate: 3 }"
        :while-press="{ scale: 0.95, rotate: 0 }"
        :transition="{ type: 'spring', stiffness: 300, damping: 20, duration: 0.3 }"
        as="p"
        class="z-40 cursor-pointer text-center text-4xl font-black tracking-tighter whitespace-pre-wrap"
        >Dot Pattern Glow
      </Motion>
    </div>
    <MagicDotPattern
      glow
      :width="20"
      :height="20"
      :cr="2"
      dot-color="#4ade80"
      class="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
    />
  </div>
</template>
