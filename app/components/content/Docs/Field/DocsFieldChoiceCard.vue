<template>
  <div class="mx-auto w-full max-w-md">
    <UiFieldGroup>
      <UiFieldSet>
        <UiFieldLabel for="compute-environment-p8w"> Compute Environment </UiFieldLabel>
        <UiFieldDescription> Select the compute environment for your cluster. </UiFieldDescription>
        <UiRadioGroup default-value="kubernetes">
          <UiFieldLabel for="kubernetes-r2h">
            <UiField orientation="horizontal">
              <UiFieldContent>
                <UiFieldTitle>Kubernetes</UiFieldTitle>
                <UiFieldDescription>
                  Run GPU workloads on a K8s configured cluster.
                </UiFieldDescription>
              </UiFieldContent>
              <UiRadioGroupItem id="kubernetes-r2h" value="kubernetes" />
            </UiField>
          </UiFieldLabel>
          <UiFieldLabel for="vm-z4k">
            <UiField orientation="horizontal">
              <UiFieldContent>
                <UiFieldTitle>Virtual Machine</UiFieldTitle>
                <UiFieldDescription>
                  Access a VM configured cluster to run GPU workloads.
                </UiFieldDescription>
              </UiFieldContent>
              <UiRadioGroupItem id="vm-z4k" value="vm" />
            </UiField>
          </UiFieldLabel>
        </UiRadioGroup>
      </UiFieldSet>
    </UiFieldGroup>
  </div>
</template>
