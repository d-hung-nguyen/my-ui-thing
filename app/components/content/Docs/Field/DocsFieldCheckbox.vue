<template>
  <div class="mx-auto w-full max-w-md">
    <UiFieldGroup>
      <UiFieldSet>
        <UiFieldLegend variant="label"> Show these items on the desktop </UiFieldLegend>
        <UiFieldDescription> Select the items you want to show on the desktop. </UiFieldDescription>
        <UiFieldGroup class="gap-3">
          <UiField orientation="horizontal">
            <UiCheckbox id="finder-pref-9k2-hard-disks-ljj" default-value />
            <UiFieldLabel for="finder-pref-9k2-hard-disks-ljj" class="font-normal">
              Hard disks
            </UiFieldLabel>
          </UiField>
          <UiField orientation="horizontal">
            <UiCheckbox id="finder-pref-9k2-external-disks-1yg" />
            <UiFieldLabel for="finder-pref-9k2-external-disks-1yg" class="font-normal">
              External disks
            </UiFieldLabel>
          </UiField>
          <UiField orientation="horizontal">
            <UiCheckbox id="finder-pref-9k2-cds-dvds-fzt" />
            <UiFieldLabel for="finder-pref-9k2-cds-dvds-fzt" class="font-normal">
              CDs, DVDs, and iPods
            </UiFieldLabel>
          </UiField>
          <UiField orientation="horizontal">
            <UiCheckbox id="finder-pref-9k2-connected-servers-6l2" />
            <UiFieldLabel for="finder-pref-9k2-connected-servers-6l2" class="font-normal">
              Connected servers
            </UiFieldLabel>
          </UiField>
        </UiFieldGroup>
      </UiFieldSet>
      <UiFieldSeparator />
      <UiField orientation="horizontal">
        <UiCheckbox id="finder-pref-9k2-sync-folders-nep" default-value />
        <UiFieldContent>
          <UiFieldLabel for="finder-pref-9k2-sync-folders-nep">
            Sync Desktop & Documents folders
          </UiFieldLabel>
          <UiFieldDescription>
            Your Desktop & Documents folders are being synced with iCloud Drive. You can access them
            from other devices.
          </UiFieldDescription>
        </UiFieldContent>
      </UiField>
    </UiFieldGroup>
  </div>
</template>
