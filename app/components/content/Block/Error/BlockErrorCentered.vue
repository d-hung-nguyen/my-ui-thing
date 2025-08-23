<template>
  <div class="relative flex h-screen items-center">
    <div
      class="absolute h-full w-full bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_closest-side_at_50%_50%,#000_60%,transparent_100%)] [background-size:20px_20px]"
    />
    <div class="relative z-[1] container flex flex-col items-center justify-center text-center">
      <p class="mb-5 font-bold tracking-tight text-primary">{{ statusCode }} error</p>
      <h1 class="text-4xl font-bold tracking-tight lg:text-5xl">{{ title }}</h1>
      <UiButton class="mt-5" @click="clearError({ redirect: '#' })">Take me home</UiButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const props = withDefaults(
    defineProps<{
      statusCode?: number;
      fatal?: boolean;
      unhandled?: boolean;
      statusMessage?: string;
      message?: string;
      data?: unknown;
      cause?: unknown;
    }>(),
    {
      statusCode: 404,
      fatal: false,
      unhandled: false,
      statusMessage: "",
      message: "We can't find this page",
      data: undefined,
      cause: undefined,
    }
  );

  const title = computed(() => {
    if (!props.message) return "Error";
    return props.message;
  });

  useSeoMeta({ title });
</script>
