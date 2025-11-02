<template>
  <div class="flex flex-col">
    <Mainnav />
    <main class="container mx-auto px-6 py-10">
      <div class="mx-auto max-w-6xl space-y-10">
        <!-- Header -->
        <div class="space-y-4">
          <h1 class="text-4xl font-bold tracking-tight">Design System</h1>
          <p class="text-muted-foreground max-w-3xl text-lg">
            Explore the components, blocks, and examples that make up UI Thing. A comprehensive
            collection of beautifully designed, reusable UI elements built for Nuxt.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <NuxtLink
            to="/components/accordion"
            class="group hover:border-primary rounded-lg border p-6 transition-colors"
          >
            <Icon name="lucide:component" class="text-primary mb-3 h-8 w-8" />
            <h3 class="mb-2 font-semibold">Components</h3>
            <p class="text-muted-foreground text-sm">Browse 80+ reusable components</p>
          </NuxtLink>

          <NuxtLink
            to="/blocks/app-empty-state"
            class="group hover:border-primary rounded-lg border p-6 transition-colors"
          >
            <Icon name="svg-spinners:blocks-shuffle-3" class="text-primary mb-3 h-8 w-8" />
            <h3 class="mb-2 font-semibold">Blocks</h3>
            <p class="text-muted-foreground text-sm">Pre-built page sections</p>
          </NuxtLink>

          <NuxtLink
            to="/examples/cards"
            class="group hover:border-primary rounded-lg border p-6 transition-colors"
          >
            <Icon name="lucide:layout-template" class="text-primary mb-3 h-8 w-8" />
            <h3 class="mb-2 font-semibold">Examples</h3>
            <p class="text-muted-foreground text-sm">Full page examples</p>
          </NuxtLink>

          <NuxtLink
            to="/colors"
            class="group hover:border-primary rounded-lg border p-6 transition-colors"
          >
            <Icon name="lucide:palette" class="text-primary mb-3 h-8 w-8" />
            <h3 class="mb-2 font-semibold">Colors</h3>
            <p class="text-muted-foreground text-sm">Customize your theme</p>
          </NuxtLink>
        </div>

        <!-- Featured Blocks -->
        <section class="space-y-6">
          <div>
            <h2 class="mb-2 text-2xl font-semibold">Featured Blocks</h2>
            <p class="text-muted-foreground">
              Ready-to-use page sections that you can copy and customize
            </p>
          </div>
          <div class="grid gap-6 md:grid-cols-2">
            <NuxtLink
              v-for="block in featuredBlocks"
              :key="block.path"
              :to="block.path"
              class="group hover:border-primary space-y-3 rounded-lg border p-6 transition-colors"
            >
              <div class="flex items-start justify-between">
                <h3 class="group-hover:text-primary text-lg font-semibold transition-colors">
                  {{ block.title }}
                </h3>
                <Icon name="lucide:arrow-right" class="text-muted-foreground h-5 w-5" />
              </div>
              <p class="text-muted-foreground text-sm">{{ block.description }}</p>
            </NuxtLink>
          </div>
        </section>

        <!-- Popular Components -->
        <section class="space-y-6">
          <div>
            <h2 class="mb-2 text-2xl font-semibold">Popular Components</h2>
            <p class="text-muted-foreground">Most commonly used UI components</p>
          </div>
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <NuxtLink
              v-for="component in popularComponents"
              :key="component.path"
              :to="component.path"
              class="hover:border-primary rounded-lg border p-4 transition-colors"
            >
              <h3 class="font-medium">{{ component.title }}</h3>
              <p class="text-muted-foreground mt-1 text-sm">{{ component.description }}</p>
            </NuxtLink>
          </div>
        </section>

        <!-- Examples Showcase -->
        <section class="space-y-6">
          <div>
            <h2 class="mb-2 text-2xl font-semibold">Examples</h2>
            <p class="text-muted-foreground">Complete page templates and applications</p>
          </div>
          <div class="grid gap-6 md:grid-cols-3">
            <NuxtLink
              v-for="example in examples"
              :key="example.path"
              :to="example.path"
              class="group hover:border-primary overflow-hidden rounded-lg border transition-colors"
            >
              <div class="bg-muted flex aspect-video items-center justify-center">
                <Icon :name="example.icon" class="text-muted-foreground h-12 w-12" />
              </div>
              <div class="p-4">
                <h3 class="group-hover:text-primary font-semibold transition-colors">
                  {{ example.title }}
                </h3>
                <p class="text-muted-foreground mt-1 text-sm">{{ example.description }}</p>
              </div>
            </NuxtLink>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({
    layout: "home",
  });

  useSeoMeta({
    title: "Design System",
    titleTemplate: `%s | ${SITE_NAME}`,
    description: "Explore the components, blocks, and examples that make up UI Thing design system",
    keywords: SITE_KEYWORDS.join(", "),
    ogTitle: "Design System",
    ogDescription:
      "Explore the components, blocks, and examples that make up UI Thing design system",
    twitterTitle: "Design System",
    twitterDescription:
      "Explore the components, blocks, and examples that make up UI Thing design system",
    twitterCard: "summary_large_image",
  });

  const featuredBlocks = [
    {
      title: "Hero Section",
      path: "/blocks/hero",
      description: "Eye-catching hero sections for landing pages",
    },
    {
      title: "Pricing",
      path: "/blocks/pricing",
      description: "Beautiful pricing tables and cards",
    },
    {
      title: "Features",
      path: "/blocks/features",
      description: "Showcase your product features elegantly",
    },
    {
      title: "Footer",
      path: "/blocks/footer",
      description: "Professional footer sections",
    },
    {
      title: "Navigation",
      path: "/blocks/navigation",
      description: "Header and navigation components",
    },
    {
      title: "Call To Action",
      path: "/blocks/cta",
      description: "Conversion-focused CTA sections",
    },
  ];

  const popularComponents = [
    {
      title: "Button",
      path: "/components/button",
      description: "Clickable button with variants",
    },
    {
      title: "Card",
      path: "/components/card",
      description: "Flexible content containers",
    },
    {
      title: "Dialog",
      path: "/components/dialog",
      description: "Modal dialogs and overlays",
    },
    {
      title: "Dropdown Menu",
      path: "/components/dropdownmenu",
      description: "Contextual dropdown menus",
    },
    {
      title: "Form",
      path: "/components/form",
      description: "Form handling and validation",
    },
    {
      title: "Table",
      path: "/components/table",
      description: "Data tables and grids",
    },
    {
      title: "Tabs",
      path: "/components/tabs",
      description: "Tabbed content navigation",
    },
    {
      title: "Select",
      path: "/components/select",
      description: "Dropdown select inputs",
    },
    {
      title: "Toast",
      path: "/components/sonner",
      description: "Toast notifications",
    },
  ];

  const examples = [
    {
      title: "Cards",
      path: "/examples/cards",
      description: "Various card layouts and styles",
      icon: "lucide:layout-grid",
    },
    {
      title: "Dashboard",
      path: "/examples/dashboard",
      description: "Complete dashboard example",
      icon: "lucide:layout-dashboard",
    },
    {
      title: "Schema Visualizer",
      path: "/examples/schema-visualizer",
      description: "Database schema visualization",
      icon: "lucide:database",
    },
  ];
</script>
