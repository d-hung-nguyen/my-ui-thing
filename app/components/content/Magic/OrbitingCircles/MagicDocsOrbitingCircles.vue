<template>
  <div class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
    <MagicOrbitingCircles :icon-size="40">
      <Icon v-for="icon in icons" :key="icon" :name="icon" width="100" height="100" />
    </MagicOrbitingCircles>
    <MagicOrbitingCircles :icon-size="30" :radius="100" reverse :speed="0.5">
      <Icon v-for="icon in companyIcons" :key="icon" :name="icon" width="100" height="100" />
    </MagicOrbitingCircles>
  </div>
</template>

<script lang="ts" setup>
  const icons = [
    "logos:whatsapp-icon",
    "logos:notion-icon",
    "logos:google-drive",
    "logos:slack-icon",
    "logos:figma",
    "logos:dribbble-icon",
  ];
  const companyIcons = [
    "logos:airbnb-icon",
    "logos:active-campaign-icon",
    "logos:spotify-icon",
    "logos:google-icon",
    "logos:microsoft-icon",
  ];
</script>
