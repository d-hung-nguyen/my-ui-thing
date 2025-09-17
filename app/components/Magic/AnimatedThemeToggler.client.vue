<template>
  <button ref="btn" @click="changeTheme()">
    <slot :change-theme="changeTheme" :is-dark="isDark">
      <slot name="light" :is-dark="isDark" :change-theme="changeTheme">
        <Icon v-if="isDark" name="lucide:sun-dim" class="size-4" />
      </slot>
      <slot name="dark" :is-dark="isDark" :change-theme="changeTheme">
        <Icon v-if="!isDark" name="lucide:moon" class="size-4" />
      </slot>
    </slot>
  </button>
</template>

<script setup lang="ts">
  const btn = useTemplateRef("btn");
  const isDark = computed(() => useColorMode().value === "dark");
  const toggleDark = () => (useColorMode().preference = isDark.value ? "light" : "dark");

  async function changeTheme() {
    if (!btn.value) return;

    await document.startViewTransition(() => {
      toggleDark();
    }).ready;

    const { top, left, width, height } = btn.value.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRad}px at ${x}px ${y}px)`],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        // This targets the entering snapshot
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }
</script>

<style>
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
  }
</style>
