<template>
  <div class="mx-auto h-[30rem] w-[calc(100%-4rem)] overflow-hidden rounded-md">
    <MagicVortex class="flex h-full w-full flex-col items-center justify-center px-2 py-4 md:px-10">
      <h2 class="text-center text-2xl font-bold text-white md:text-4xl">UI Thing</h2>
      <p class="mt-6 max-w-xl text-center text-pretty text-white/80">
        The ultimate design system for building modern, responsive, and accessible web applications
      </p>
      <div class="mt-6 flex flex-col items-center gap-4 sm:flex-row">
        <ui-button
          class="bg-linear-to-b from-transparent via-transparent to-white/10 shadow-[inset_0_1.5px_0_0_#FFFFFF40]"
        >
          Donate Today
        </ui-button>
        <ui-button variant="outline">Learn More</ui-button>
      </div>
    </MagicVortex>
  </div>
</template>

<script lang="ts" setup></script>
