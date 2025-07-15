<template>
  <UiSheet>
    <UiSheetTrigger as-child><slot /></UiSheetTrigger>
    <UiSheetContent side="right" class="md:max-w-1/2">
      <div class="p-5">
        <div class="mb-4 flex items-start gap-3">
          <Icon v-if="languageIcon" :name="languageIcon" class="size-3.5" />
          <div class="flex flex-col gap-1">
            <UiSheetTitle class="text-sm leading-none">{{ title }}</UiSheetTitle>
            <UiSheetDescription>{{ description }}</UiSheetDescription>
          </div>
        </div>
        <UiGradientDivider class="mb-4" />
        <ProsePre
          class="shiki shiki-themes github-light github-dark"
          :class="proseClass"
          :code="formattedCode"
          :language
          >{{ code }}</ProsePre
        >
        <!-- <MDCRenderer :body="ast.body" :data="ast.data" /> -->
        <!-- <MDC :value="formattedCode" tag="pre" /> -->
      </div>
    </UiSheetContent>
  </UiSheet>
</template>

<script lang="ts" setup>
  const props = withDefaults(
    defineProps<{
      title: string;
      description?: string;
      code: string;
      language?: string;
      languageIcon?: string;
    }>(),
    {
      description: "Copy and paste this code into your project to use the component.",
    }
  );

  const formattedCode = computed(() => {
    return `\`\`\`${props.language}\n${props.code}\n\`\`\``;
  });

  const proseClass = computed(() => {
    switch (props.language) {
      case "vue":
        return "language-vue";

      default:
        return "language-ts";
    }
  });
</script>
