<!-- eslint-disable vue/html-self-closing -->
<template>
  <div class="relative">
    <button
      type="button"
      aria-label="Play video"
      class="group relative cursor-pointer border-0 bg-transparent p-0"
      @click="isVideoOpen = true"
    >
      <slot name="thumbnail">
        <img
          :src="thumbnailSrc"
          :alt="thumbnailAlt"
          width="1920"
          height="1080"
          class="w-full rounded-md border shadow-lg transition-all duration-200 ease-out group-hover:brightness-[0.8]"
        />
      </slot>
      <div
        class="absolute inset-0 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100"
      >
        <div
          class="flex size-28 items-center justify-center rounded-full bg-primary/10 backdrop-blur-md"
        >
          <div
            class="relative flex size-20 scale-100 items-center justify-center rounded-full bg-gradient-to-b from-primary/30 to-primary shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]"
          >
            <slot name="play-icon">
              <Icon
                :name="playIcon"
                class="size-8 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105"
                style="
                  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))
                    drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
                "
              />
            </slot>
          </div>
        </div>
      </div>
    </button>
    <AnimatePresence>
      <motion.div
        v-if="isVideoOpen"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :exit="{ opacity: 0 }"
        role="button"
        :tabindex="0"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
        @keydown="
          ($event) => {
            if ($event.key === 'Escape' || $event.key === 'Enter' || $event.key === ' ') {
              isVideoOpen = false;
            }
          }
        "
        @click="isVideoOpen = false"
      >
        <motion.div
          v-bind="selectedAnimation"
          :transition="{ type: 'spring', damping: 30, stiffness: 300 }"
          class="relative mx-4 aspect-video w-full max-w-4xl md:mx-0"
        >
          <motion.button
            class="absolute -top-16 right-0 rounded-full bg-neutral-900/50 p-2 text-xl text-white ring-1 backdrop-blur-md dark:bg-neutral-100/50 dark:text-black"
          >
            <Icon :name="closeIcon" class="size-5" />
          </motion.button>
          <div
            class="relative isolate z-[1] size-full overflow-hidden rounded-2xl border-2 border-white"
          >
            <iframe
              :src="videoSrc"
              title="Hero Video player"
              class="size-full rounded-2xl"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  </div>
</template>

<script lang="ts">
  import { AnimatePresence, motion } from "motion-v";

  export type AnimationStyle =
    | "from-bottom"
    | "from-center"
    | "from-top"
    | "from-left"
    | "from-right"
    | "fade"
    | "top-in-bottom-out"
    | "left-in-right-out";

  export interface HeroVideoProps {
    /**
     * The animation style to use for the video dialog.
     * @default "from-center"
     */
    animationStyle?: AnimationStyle;
    /**
     * The source URL of the video to play.
     *
     * If using a YouTube video, make sure to use the embed version of the video URL.
     */
    videoSrc: string;
    /**
     * The source URL of the video thumbnail.
     */
    thumbnailSrc: string;
    /**
     * The alt text for the video thumbnail.
     * @default "Video thumbnail"
     */
    thumbnailAlt?: string;
    /**
     * The icon to use for the play button.
     * @default "lucide:play"
     */
    playIcon?: string;
    /**
     * The icon to use for the close button.
     * @default "lucide:x"
     */
    closeIcon?: string;
    /**
     * The v-model binding to control the visibility of the video dialog.
     */
    modelValue?: boolean;
  }

  const animationVariants = {
    "from-bottom": {
      initial: { y: "100%", opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: "100%", opacity: 0 },
    },
    "from-center": {
      initial: { scale: 0.5, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 0.5, opacity: 0 },
    },
    "from-top": {
      initial: { y: "-100%", opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: "-100%", opacity: 0 },
    },
    "from-left": {
      initial: { x: "-100%", opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: "-100%", opacity: 0 },
    },
    "from-right": {
      initial: { x: "100%", opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: "100%", opacity: 0 },
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    "top-in-bottom-out": {
      initial: { y: "-100%", opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: "100%", opacity: 0 },
    },
    "left-in-right-out": {
      initial: { x: "-100%", opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: "100%", opacity: 0 },
    },
  };
</script>

<script lang="ts" setup>
  const props = withDefaults(defineProps<HeroVideoProps>(), {
    animationStyle: "from-center",
    thumbnailAlt: "Video thumbnail",
    playIcon: "lucide:play",
    closeIcon: "lucide:x",
  });

  const isVideoOpen = defineModel<boolean>({ default: false });
  const selectedAnimation = computed(() => {
    return animationVariants[props.animationStyle];
  });
</script>
