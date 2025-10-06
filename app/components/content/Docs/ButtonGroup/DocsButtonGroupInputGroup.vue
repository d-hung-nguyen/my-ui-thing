<template>
  <div class="flex items-center justify-center">
    <UiButtonGroup class="[--radius:9999rem]">
      <UiButtonGroup>
        <UiButton variant="outline" size="icon">
          <Icon name="lucide:plus" />
        </UiButton>
      </UiButtonGroup>
      <UiButtonGroup>
        <UiInputGroup>
          <UiInputGroupInput
            :placeholder="voiceEnabled ? 'Record and send audio...' : 'Send a message...'"
            :disabled="voiceEnabled"
          />
          <UiInputGroupAddon align="inline-end">
            <UiTooltip>
              <UiTooltipTrigger as-child>
                <UiInputGroupButton
                  class="data-[active=true]:bg-orange-100 data-[active=true]:text-orange-700 dark:data-[active=true]:bg-orange-800 dark:data-[active=true]:text-orange-100"
                  size="icon-xs"
                  :data-active="voiceEnabled"
                  :aria-pressed="voiceEnabled"
                  @click="voiceEnabled = !voiceEnabled"
                >
                  <Icon name="lucide:audio-lines" />
                </UiInputGroupButton>
              </UiTooltipTrigger>
              <UiTooltipContent>Voice Mode</UiTooltipContent>
            </UiTooltip>
          </UiInputGroupAddon>
        </UiInputGroup>
      </UiButtonGroup>
    </UiButtonGroup>
  </div>
</template>

<script lang="ts" setup>
  const voiceEnabled = ref(false);
</script>
