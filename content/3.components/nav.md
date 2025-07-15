---
title: Nav
description: A horizontal navigation bar for primary site links, branding, and interactive elements.
---

## Credits

This component is a port of the one created by [Intent UI](https://intentui.com/docs/components/layouts/navbar). Thanks to them for their work!

## Source code

Click :SourceCodeLink{component="Nav"} to see the source code for this component on GitHub. Feel free to copy it and adjust it for your own use.

## Installation

```bash
npx ui-thing@latest add nav
```

## Usage

### Basic

::ShowCase

:DocsNav1

#code

<!-- automd:file src="../../app/components/content/Docs/Nav/DocsNav1.vue" code lang="vue" -->

```vue [DocsNav1.vue]
<template>
  <UiNavProvider>
    <UiNav>
      <UiNavStart>
        <NuxtLink
          class="flex items-center gap-x-2 font-medium"
          aria-label="Goto documentation of Nav"
          to="/docs/components/layouts/UiNav"
        >
          <Icon name="logos:active-campaign-icon" class="size-6 sm:size-5" />
          <span> Active <span class="text-muted-fg">Campaign</span> </span>
        </NuxtLink>
      </UiNavStart>
      <UiNavGap />
      <UiNavSection>
        <UiNavItem :to="route.path">Home </UiNavItem>
        <UiNavItem href="#">Shop</UiNavItem>
        <UiNavItem href="#">Offers</UiNavItem>
        <UiNavItem href="#">Orders</UiNavItem>
        <UiDropdownMenu>
          <UiDropdownMenuTrigger as-child>
            <UiNavItem>
              Categories
              <Icon name="lucide:chevron-down" class="col-start-3" />
            </UiNavItem>
          </UiDropdownMenuTrigger>
          <UiDropdownMenuContent class="min-w-(--reka-dropdown-menu-trigger-width) sm:min-w-56">
            <UiDropdownMenuGroup>
              <UiDropdownMenuItem
                v-for="(item, i) in categories"
                :key="i"
                :text-value="item.label"
                as-child
              >
                <NuxtLink :to="item.url">
                  {{ item.label }}
                </NuxtLink>
              </UiDropdownMenuItem>
            </UiDropdownMenuGroup>
          </UiDropdownMenuContent>
        </UiDropdownMenu>
      </UiNavSection>
      <UiNavSpacer />
      <UiNavSection class="max-md:hidden">
        <UiButton variant="ghost" size="icon-sm" aria-label="Search for products">
          <Icon name="lucide:search" />
        </UiButton>
        <UiButton variant="ghost" size="icon-sm" aria-label="Your Bag">
          <Icon name="lucide:shopping-bag" />
        </UiButton>
        <UiSeparator orientation="vertical" class="mr-3 ml-1 h-5" />
        <!-- <UserMenu /> -->
      </UiNavSection>
    </UiNav>
    <UiNavMobile>
      <UiNavTrigger />
      <UiNavSpacer />
      <UiButton variant="ghost" size="icon-sm" aria-label="Search for products">
        <Icon name="lucide:search" />
      </UiButton>
      <UiButton variant="ghost" size="icon-sm" aria-label="Your Bag">
        <Icon name="lucide:shopping-bag" />
      </UiButton>
      <UiNavSeparator class="mr-2.5" />
      <!-- <UserMenu /> -->
    </UiNavMobile>
  </UiNavProvider>
</template>

<script lang="ts" setup>
  const route = useRoute();
  const categories = [
    {
      id: 1,
      label: "Electronics",
      url: "#",
    },
    {
      id: 2,
      label: "Fashion",
      url: "#",
    },
    {
      id: 3,
      label: "Home & Kitchen",
      url: "#",
    },
    {
      id: 4,
      label: "Sports",
      url: "#",
    },
    {
      id: 5,
      label: "Books",
      url: "#",
    },
    {
      id: 6,
      label: "Beauty & Personal Care",
      url: "#",
    },
    {
      id: 7,
      label: "Grocery",
      url: "#",
    },
    {
      id: 8,
      label: "Toys & Games",
      url: "#",
    },
    {
      id: 9,
      label: "Automotive",
      url: "#",
    },
    {
      id: 10,
      label: "Health & Wellness",
      url: "#",
    },
  ];
</script>
```

<!-- /automd -->

::
