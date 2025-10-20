<template>
  <div class="px-8">
    <h3 class="mt-0">Basic Usage</h3>
    <ProseIconList variant="success">
      <p>Successfully implemented authentication</p>
      <p>Database connection established</p>
      <p>API endpoints configured</p>
    </ProseIconList>

    <h3>Mixed Variants</h3>
    <ProseIconList>
      <ProseLi variant="success">Feature is working correctly</ProseLi>
      <ProseLi variant="warning">Needs further testing</ProseLi>
      <ProseLi variant="error">Bug found in production</ProseLi>
      <ProseLi variant="info">Documentation pending</ProseLi>
    </ProseIconList>

    <h3>Custom Icons</h3>
    <ProseIconList>
      <ProseLi icon="lucide:check-circle-2" variant="success">Completed task</ProseLi>
      <ProseLi icon="lucide:clock" variant="warning">In progress</ProseLi>
      <ProseLi icon="lucide:x-circle" variant="error">Failed step</ProseLi>
      <ProseLi icon="lucide:help-circle" variant="info">Needs clarification</ProseLi>
    </ProseIconList>

    <h3>Default Icon Override</h3>
    <ProseIconList icon="lucide:star" variant="default">
      <ProseLi>Premium feature</ProseLi>
      <ProseLi>Advanced analytics</ProseLi>
      <ProseLi>Priority support</ProseLi>
    </ProseIconList>

    <h3>Advanced Example</h3>
    <ProseIconList>
      <ProseLi icon="lucide:check-circle-2" variant="success">
        <ProseStrong>Installation:</ProseStrong> Run npm <code>install ui-thing</code>
      </ProseLi>
      <ProseLi icon="lucide:settings" variant="info">
        <ProseStrong>Configuration:</ProseStrong> Update your <code>config.json</code> file with
        necessary settings.
      </ProseLi>
      <ProseLi icon="lucide:play-circle" variant="warning">
        <ProseStrong>Usage:</ProseStrong> Start the application using <code>npm start</code> and
        monitor the console for logs.
      </ProseLi>
      <ProseLi icon="lucide:bug" variant="error">
        <ProseStrong>Troubleshooting:</ProseStrong> If you encounter issues, refer to the FAQ or
        open an issue on GitHub.
      </ProseLi>
    </ProseIconList>
  </div>
</template>
