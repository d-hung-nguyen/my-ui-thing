<template>
  <div>
    <UiBreadcrumbs class="justify-center" :items="crumbs" />
  </div>
</template>

<script lang="ts" setup>
  import type { BreadcrumbItem } from "~/components/Ui/Breadcrumbs.vue";

  const crumbs: BreadcrumbItem[] = [
    {
      label: "Home",
      click: () => {
        console.log("clicked");
      },
    },
    { label: "Sales", link: "#" },
    {
      label: "Dashboard",
      link: "/examples/dashboard",
      icon: "heroicons:squares-plus",
      disabled: true,
    },
  ];
</script>
