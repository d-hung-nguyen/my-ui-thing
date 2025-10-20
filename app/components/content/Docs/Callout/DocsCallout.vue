<template>
  <div class="space-y-6">
    <div>
      <h3 class="mt-0">All Variants</h3>
      <div class="space-y-4">
        <Callout variant="default" title="Default" description="This is a default callout." />
        <Callout variant="info" title="Info" description="This is an info callout." />
        <Callout variant="success" title="Success" description="This is a success callout." />
        <Callout variant="warning" title="Warning" description="This is a warning callout." />
        <Callout variant="error" title="Error" description="This is an error callout." />
        <Callout variant="tip" title="Tip" description="This is a tip callout." />
        <Callout variant="note" title="Note" description="This is a note callout." />
        <Callout variant="example" title="Example" description="This is an example callout." />
      </div>
    </div>

    <div>
      <h3>Filled Style</h3>
      <div class="space-y-4">
        <Callout
          variant="info"
          title="Filled Info"
          description="This uses the filled style."
          filled
        />
        <Callout
          variant="success"
          title="Filled Success"
          description="This uses the filled style."
          filled
        />
        <Callout
          variant="warning"
          title="Filled Warning"
          description="This uses the filled style."
          filled
        />
        <Callout
          variant="error"
          title="Filled Error"
          description="This uses the filled style."
          filled
        />
      </div>
    </div>

    <div>
      <h3>With Slots</h3>
      <Callout variant="tip">
        <template #icon>
          <Icon name="lucide:sparkles" />
        </template>
        <template #title> Custom Slotted Title </template>
        <template #default>
          <p>This callout uses slots for maximum flexibility.</p>
          <ul class="mt-2 list-inside list-disc space-y-1">
            <li>Custom icon slot</li>
            <li>Custom title slot</li>
            <li>Custom content slot</li>
          </ul>
        </template>
      </Callout>
    </div>

    <div>
      <h3>Clickable Callout</h3>
      <Callout
        variant="info"
        title="Learn More"
        description="Click this callout to navigate to the documentation."
        url="/docs"
      />
    </div>

    <div>
      <h3>Custom Icons</h3>
      <div class="space-y-4">
        <Callout
          variant="success"
          icon="lucide:trophy"
          title="Achievement Unlocked"
          description="You've earned a new badge!"
        />
        <Callout
          variant="info"
          icon="lucide:rocket"
          title="Launch Ready"
          description="Your application is ready to deploy."
        />
        <Callout
          variant="tip"
          icon="lucide:zap"
          title="Performance Boost"
          description="Enable caching for better performance."
        />
      </div>
    </div>
  </div>
</template>
