<template>
  <div class="flex justify-center">
    <div class="flex flex-col items-center justify-center gap-2">
      <div class="flex w-full flex-wrap justify-center gap-2">
        <UiBadge>Badge</UiBadge>
        <UiBadge variant="secondary">Secondary</UiBadge>
        <UiBadge variant="destructive">Destructive</UiBadge>
        <UiBadge variant="outline">Outline</UiBadge>
      </div>
      <div class="flex w-full flex-wrap justify-center gap-2">
        <UiBadge variant="secondary" class="bg-blue-500 text-white dark:bg-blue-600">
          <Icon name="lucide:badge-check" />
          Verified
        </UiBadge>
        <UiBadge class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"> 8 </UiBadge>
        <UiBadge class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="destructive">
          99
        </UiBadge>
        <UiBadge class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="outline">
          20+
        </UiBadge>
      </div>
    </div>
  </div>
</template>
