<template>
  <div class="flex flex-col gap-8">
    <ui-vee-select v-model="selectedAnimation" label="Choose an animation">
      <option disabled value>Select a value</option>
      <option value="from-bottom">From Bottom</option>
      <option value="from-center">From Center</option>
      <option value="from-top">From Top</option>
      <option value="from-left">From Left</option>
      <option value="from-right">From Right</option>
      <option value="fade">Fade</option>
      <option value="top-in-bottom-out">Top In Bottom Out</option>
      <option value="left-in-right-out">Left In Right Out</option>
    </ui-vee-select>

    <magic-hero-video-dialog
      :animation-style="selectedAnimation"
      video-src="https://www.youtube.com/embed/fkb-L-_8Ng0?si=Ts-bfBlrZXYa6kVV"
      thumbnail-src="https://cdn.analyticsvidhya.com/wp-content/uploads/2025/04/Firebase_by_Google-_A_better_version_of_Cursor_or_Windsurf_.webp"
      thumbnail-alt="Building a Secure Nuxt 3 SaaS App"
    />
  </div>
</template>

<script lang="ts" setup>
  import type { AnimationStyle } from "~/components/Magic/HeroVideoDialog.vue";

  const selectedAnimation = ref<AnimationStyle>("from-bottom");
</script>
