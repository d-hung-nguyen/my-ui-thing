<template>
  <footer class="bg-linear-to-br from-primary/5 via-purple-500/5 to-pink-500/5">
    <UiContainer class="py-16 lg:py-24">
      <!-- Top Section -->
      <div class="mb-12 grid grid-cols-1 gap-8 lg:mb-16 lg:grid-cols-2">
        <div>
          <h2 class="mb-3 text-3xl font-bold lg:text-4xl">Ready to get started?</h2>
          <p class="text-lg text-muted-foreground">
            Join thousands of companies already using our platform.
          </p>
        </div>
        <div class="flex items-center justify-start lg:justify-end">
          <div class="flex flex-col gap-3 sm:flex-row">
            <UiButton size="lg" variant="outline">Talk to Sales</UiButton>
            <UiButton size="lg">Start Free Trial</UiButton>
          </div>
        </div>
      </div>

      <!-- Links Section -->
      <div
        class="grid grid-cols-2 gap-8 border-t border-b py-12 md:grid-cols-4 lg:grid-cols-6 lg:py-16"
      >
        <div v-for="section in linkSections" :key="section.title">
          <h3 class="mb-4 text-sm font-semibold">{{ section.title }}</h3>
          <ul class="space-y-3">
            <li v-for="link in section.links" :key="link">
              <NuxtLink
                class="text-sm text-muted-foreground transition-colors hover:text-primary"
                to="#"
              >
                {{ link }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="mt-12 flex flex-col items-center justify-between gap-6 lg:flex-row">
        <div class="flex items-center gap-3">
          <img
            src="/icon.png"
            fit="contain"
            alt="Company Logo"
            title="Company Logo"
            class="h-8 object-contain"
          />
          <span class="text-xl font-semibold">{{ COMPANY_NAME }}</span>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <NuxtLink to="#" class="transition-colors hover:text-primary">Privacy</NuxtLink>
          <NuxtLink to="#" class="transition-colors hover:text-primary">Terms</NuxtLink>
          <NuxtLink to="#" class="transition-colors hover:text-primary">Sitemap</NuxtLink>
          <span>&copy; {{ new Date().getFullYear() }}</span>
        </div>

        <div class="flex items-center gap-3">
          <NuxtLink
            v-for="social in ['facebook', 'twitter', 'linkedin-icon', 'github-icon']"
            :key="social"
            to="#"
            class="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 transition-all hover:bg-primary hover:text-white"
          >
            <Icon :name="`logos:${social}`" class="size-4" />
          </NuxtLink>
        </div>
      </div>
    </UiContainer>
  </footer>
</template>

<script lang="ts" setup>
  const linkSections = [
    { title: "Product", links: ["Features", "Pricing", "Security", "Roadmap"] },
    { title: "Platform", links: ["Developer API", "Partners", "Marketplace", "Status"] },
    { title: "Support", links: ["Docs", "Community", "Contact", "FAQ"] },
    { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
    { title: "Resources", links: ["Newsletter", "Events", "Webinars", "Guides"] },
    { title: "Legal", links: ["Privacy", "Terms", "Cookies", "Licenses"] },
  ];
</script>
