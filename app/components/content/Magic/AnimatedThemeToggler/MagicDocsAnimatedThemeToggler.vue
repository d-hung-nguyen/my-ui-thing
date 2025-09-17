<template>
  <div class="flex items-center justify-center">
    <MagicAnimatedThemeToggler :class="buttonStyles({ variant: 'outline', size: 'icon' })" />
  </div>
</template>

<script setup lang="ts">
  import { buttonStyles } from "~/components/Ui/Button.vue";
</script>
