<template>
  <header class="bg-background/80 sticky top-0 z-30 border-b backdrop-blur">
    <div class="flex h-14 w-full items-center justify-between px-6">
      <div class="flex items-center gap-10">
        <div class="flex items-center gap-5">
          <UiButton
            size="icon-sm"
            variant="outline"
            class="h-9 w-9 lg:hidden"
            @click="mobileNavState = true"
            ><Icon name="heroicons:bars-2" class="size-4" />
          </UiButton>
          <NuxtLink to="/" class="text-lg font-bold">UI Thing</NuxtLink>
        </div>
        <nav class="hidden items-center space-x-6 text-sm font-medium lg:flex">
          <NuxtLink
            :class="[route.path.startsWith('/getting-started/') ? '!text-primary' : '']"
            to="/getting-started/introduction"
            class="text-foreground/60 hover:text-foreground transition-colors"
            >Documentation</NuxtLink
          >
          <NuxtLink
            :class="[
              route.path.startsWith('/components/') || route.path.includes('/forms/')
                ? '!text-primary'
                : '',
            ]"
            to="/components/accordion"
            class="text-foreground/60 hover:text-foreground transition-colors"
            >Components</NuxtLink
          >
          <UiDropdownMenu>
            <UiDropdownMenuTrigger>
              <div
                class="text-foreground/60 hover:text-foreground inline-flex items-center gap-1 transition-colors"
              >
                <span>Examples</span>
                <Icon name="heroicons:chevron-down" class="h-3 w-3" />
              </div>
            </UiDropdownMenuTrigger>
            <UiDropdownMenuContent class="min-w-[180px]" align="start" :side-offset="5">
              <UiDropdownMenuItem v-for="l in localProjects" :key="l.name" as-child>
                <NuxtLink class="hover:bg-muted cursor-pointer" :to="l.link">{{ l.name }}</NuxtLink>
              </UiDropdownMenuItem>
              <template v-for="l in externalProjects" :key="l.name">
                <UiDropdownMenuItem as-child>
                  <NuxtLink
                    target="_blank"
                    external
                    class="hover:bg-muted cursor-pointer"
                    :href="l.link"
                    >{{ l.name }}</NuxtLink
                  >
                </UiDropdownMenuItem>
              </template>
            </UiDropdownMenuContent>
          </UiDropdownMenu>
          <NuxtLink
            :class="[route.path.startsWith('/colors') ? '!text-primary' : '']"
            to="/colors"
            class="text-foreground/60 hover:text-foreground transition-colors"
            >Colors</NuxtLink
          >
          <NuxtLink
            to="https://inspira-ui.com/"
            class="group text-foreground/60 hover:text-foreground transition-colors"
            >Inspira UI
          </NuxtLink>
        </nav>
      </div>

      <div class="flex items-center">
        <UiButton
          size="sm"
          class="text-muted-foreground mr-2 hidden min-w-[300px] font-normal md:flex"
          variant="outline"
          @click="isOpen = true"
        >
          <Icon name="lucide:search" />
          Search...
          <UiKbd class="ml-auto">{{ metaSymbol }}+K</UiKbd>
        </UiButton>
        <UiButton
          size="icon"
          class="text-muted-foreground md:hidden"
          variant="ghost"
          @click="isOpen = true"
        >
          <Icon name="lucide:search" class="h-[18px] w-[18px]" />
        </UiButton>

        <ThemePopover />
        <UiButton
          to="https://github.com/BayBreezy/ui-thing"
          target="_blank"
          class="h-9 w-9"
          variant="ghost"
          size="icon"
          ><Icon name="radix-icons:github-logo" class="h-[18px] w-[18px]"
        /></UiButton>
        <CommandSearch v-model="isOpen" />
        <UiDropdownMenu>
          <UiDropdownMenuTrigger as-child>
            <UiButton class="h-9 w-9" variant="ghost" size="icon">
              <ClientOnly>
                <template #fallback>
                  <Icon :name="'lucide:sun'" class="h-[18px] w-[18px]" />
                </template>
                <Icon v-if="currentIcon" :name="currentIcon" class="h-[18px] w-[18px]" />
              </ClientOnly>
            </UiButton>
          </UiDropdownMenuTrigger>
          <UiDropdownMenuContent align="end" :side-offset="5">
            <UiDropdownMenuItem
              v-for="(m, i) in modes"
              :key="i"
              class="cursor-pointer"
              :icon="m.icon"
              :title="m.title"
              @click="setTheme(m.value)"
            />
          </UiDropdownMenuContent>
        </UiDropdownMenu>
      </div>
    </div>
    <MobileNav />
  </header>
</template>

<script lang="ts" setup>
  const modes = [
    { icon: "lucide:sun", title: "Light", value: "light" },
    { icon: "lucide:moon", title: "Dark", value: "dark" },
    { icon: "lucide:laptop", title: "System", value: "system" },
  ];

  const route = useRoute();

  const mobileNavState = useMobileNavState();

  const colorMode = useColorMode();
  const setTheme = (val: string) => {
    colorMode.preference = val;
  };

  const currentIcon = computed(() => {
    return modes.find((m) => m.value === colorMode?.preference)?.icon;
  });

  const isOpen = ref(false);

  const metaSymbol = computed(() => useKbd().getKbdKey("meta"));

  defineShortcuts({
    meta_k: () => {
      isOpen.value = !isOpen.value;
    },
  });

  const externalProjects = [
    { name: "Settings Dashboard", link: "https://settings-dash.behonbaker.com/" },
    { name: "ETag Topup UI", link: "https://etag-ui.behonbaker.com/" },
    { name: "UI Todo", link: "https://ui-todo.behonbaker.com/" },
  ];
  const localProjects = [
    { name: "Cards", link: "/examples/cards" },
    { name: "Dashboard", link: "/examples/dashboard" },
    { name: "Schema Visualizer", link: "/examples/schema-visualizer" },
  ];
</script>
