<template>
  <UiCard title="Notifications" description="Choose what you want to be notified about.">
    <template #content>
      <UiCardContent class="grid gap-1">
        <ToggleGroupRoot>
          <template v-for="(n, k) in notes" :key="k">
            <ToggleGroupItem
              :value="n.title"
              class="group flex w-full items-start gap-4 rounded-md p-4 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground"
            >
              <Icon :name="n.icon" class="mt-px size-5 group-data-[state=on]:text-primary" />
              <div class="flex flex-col gap-0.5 text-left">
                <p class="text-sm leading-none font-medium">{{ n.title }}</p>
                <p class="text-sm text-muted-foreground">{{ n.description }}</p>
              </div>
            </ToggleGroupItem>
          </template>
        </ToggleGroupRoot>
      </UiCardContent>
    </template>
  </UiCard>
</template>

<script lang="ts" setup>
  const notes = [
    {
      icon: "lucide:bell",
      title: "Everything",
      description: "Email digest, mentions & all activity.",
    },
    {
      icon: "lucide:user",
      title: "Available",
      description: "Only mentions and comments.",
    },
    {
      icon: "lucide:eye-off",
      title: "Ignoring",
      description: "Turn off all notifications.",
    },
  ];
</script>
