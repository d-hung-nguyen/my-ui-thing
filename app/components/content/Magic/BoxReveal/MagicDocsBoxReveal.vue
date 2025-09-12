<template>
  <div class="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
    <MagicBoxReveal :duration="0.5">
      <p class="text-[3.5rem] font-semibold">Magic UI<span class="text-primary">.</span></p>
    </MagicBoxReveal>

    <MagicBoxReveal :duration="0.5">
      <h2 class="mt-[.5rem] text-[1rem]">
        UI library for <span class="text-primary">Design Engineers</span>
      </h2>
    </MagicBoxReveal>

    <MagicBoxReveal :duration="0.5">
      <div class="mt-6">
        <p>
          -&gt; 20+ free and open-source animated components built with
          <span class="font-semibold text-primary">React</span>,
          <span class="font-semibold text-primary">Typescript</span>,
          <span class="font-semibold text-primary">Tailwind CSS</span>, and
          <span class="font-semibold text-primary">Motion</span>
          <!-- eslint-disable-next-line vue/html-self-closing -->
          . <br />
          <!-- eslint-disable-next-line vue/html-self-closing -->
          -&gt; 100% open-source, and customizable. <br />
        </p>
      </div>
    </MagicBoxReveal>

    <MagicBoxReveal :duration="0.5">
      <Motion as-child :while-hover="{ scale: 1.05 }" :while-press="{ scale: 0.95 }">
        <UiButton class="mt-[1.6rem]">Explore</UiButton>
      </Motion>
    </MagicBoxReveal>
  </div>
</template>
