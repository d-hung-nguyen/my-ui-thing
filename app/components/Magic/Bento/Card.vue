<template>
  <Primitive :key="name" :class="styles({ class: props.class })">
    <div class="relative flex-1">
      <slot name="background">
        <component :is="background" v-if="background" />
      </slot>
    </div>
    <div class="mt-auto p-4">
      <div
        class="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10"
      >
        <slot name="icon">
          <template v-if="typeof icon == 'string'">
            <Icon
              :name="icon"
              class="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75"
            />
          </template>
          <component :is="icon" v-else-if="icon" />
        </slot>
        <h3 class="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
          {{ name }}
        </h3>
        <p class="max-w-lg text-neutral-400">{{ description }}</p>
      </div>

      <div
        class="pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:hidden"
      >
        <UiButton variant="link" :href size="sm" class="pointer-events-auto p-0">
          {{ cta }}
          <Icon name="lucide:arrow-right" class="size-4 rtl:rotate-180" />
        </UiButton>
      </div>
    </div>

    <div
      class="pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex"
    >
      <UiButton variant="link" :href size="sm" class="pointer-events-auto p-0">
        {{ cta }}
        <Icon name="lucide:arrow-right" class="size-4 rtl:rotate-180" />
      </UiButton>
    </div>

    <div
      class="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10"
    />
  </Primitive>
</template>

<script lang="ts">
  import type { PrimitiveProps } from "reka-ui";
  import type { VNode } from "vue";

  export interface BentoCardProps extends PrimitiveProps {
    name: string;
    class?: string;
    background?: VNode; //ReactNode;
    icon?: VNode | string; //React.ElementType;
    description: string;
    href: string;
    cta: string;
  }
</script>

<script lang="ts" setup>
  const styles = tv({
    base: "group relative col-span-3 flex transform-gpu flex-col justify-between overflow-hidden rounded-xl bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-background dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
  });
  const props = defineProps<BentoCardProps>();
  defineOptions({ inheritAttrs: false });
</script>
