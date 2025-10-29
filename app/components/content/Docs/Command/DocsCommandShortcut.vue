<template>
  <div class="flex flex-col items-center justify-center">
    <p class="text-muted-foreground text-sm">
      Press
      <kbd
        class="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none"
      >
        <span class="text-xs">⌘</span>J
      </kbd>
    </p>
    <UiCommandDialog v-model:open="open">
      <UiCommandInput placeholder="Type a command or search..." />
      <UiCommandList>
        <UiCommandEmpty>No results found.</UiCommandEmpty>
        <UiCommandGroup heading="Suggestions">
          <UiCommandItem value="calendar" text="Calendar" icon="lucide:calendar-days" />
          <UiCommandItem value="search-emoji" text="Emoji" icon="lucide:smile-plus" />
          <UiCommandItem value="calculator" disabled text="Calculator" icon="lucide:calculator" />
        </UiCommandGroup>
        <UiCommandSeparator />
        <UiCommandGroup heading="Settings">
          <UiCommandItem value="profile"> Profile </UiCommandItem>
          <UiCommandItem value="billing"> Billing </UiCommandItem>
          <UiCommandItem value="settings"> Settings </UiCommandItem>
        </UiCommandGroup>
      </UiCommandList>
    </UiCommandDialog>
  </div>
</template>

<script setup lang="ts">
  import { useMagicKeys } from "@vueuse/core";

  const open = ref(false);

  const { Meta_J, Ctrl_J } = useMagicKeys({
    passive: false,
    onEventFired(e) {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) e.preventDefault();
    },
  });

  watch([Meta_J, Ctrl_J], (v) => {
    if (v[0] || v[1]) open.value = !open.value;
  });
</script>
