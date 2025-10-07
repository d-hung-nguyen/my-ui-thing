---
title: Field
description: Combine labels, controls, and help text to compose accessible form fields and grouped inputs.
label: New
---

## Source code

Click :SourceCodeLink{component="Field"} to see the source code for this component on GitHub. Feel free to copy it and adjust it for your own use.

## Installation

```bash
npx ui-thing@latest add field
```

## Usage

```vue
<template>
  <UiFieldSet>
    <UiFieldLegend>Profile</UiFieldLegend>
    <UiFieldDescription>This appears on invoices and emails.</UiFieldDescription>
    <UiFieldGroup>
      <UiField>
        <UiFieldLabel for="name">Full name</UiFieldLabel>
        <UiInput id="name" autoComplete="off" placeholder="Tinker Bell" />
        <UiFieldDescription>This appears on invoices and emails.</UiFieldDescription>
      </UiField>
      <UiField>
        <UiFieldLabel for="username">Username</UiFieldLabel>
        <UiInput id="username" autoComplete="off" aria-invalid />
        <UiFieldError>Choose another username.</UiFieldError>
      </UiField>
      <UiField orientation="horizontal">
        <UiSwitch id="newsletter" />
        <UiFieldLabel for="newsletter">Subscribe to the newsletter</UiFieldLabel>
      </UiField>
    </UiFieldGroup>
  </UiFieldSet>
</template>
```

## Anatomy

The `Field` family is designed for composing accessible forms. A typical field is structured as follows:

```vue
<template>
  <UiField>
    <UiFieldLabel for="input-id">Label</UiFieldLabel>
    <!-- Input, Select, Switch, etc. -->
    <UiFieldDescription>Optional helper text.</UiFieldDescription>
    <UiFieldError>Validation message.</UiFieldError>
  </UiField>
</template>
```

- `Field` is the core wrapper for a single field.
- `FieldContent` is a flex column that groups label and description. Not required if you have no description.
- Wrap related fields with `FieldGroup`, and use `FieldSet` with `FieldLegend` for semantic grouping.

## Examples

### Basic

::ShowCase

:DocsFieldBasic

#code

<!-- automd:file src="../../app/components/content/Docs/Field/DocsFieldBasic.vue" code lang="vue" -->

```vue [DocsFieldBasic.vue]
<template>
  <div class="mx-auto w-full max-w-md">
    <form>
      <UiFieldGroup>
        <UiFieldSet>
          <UiFieldLegend>Payment Method</UiFieldLegend>
          <UiFieldDescription> All transactions are secure and encrypted </UiFieldDescription>
          <UiFieldGroup>
            <UiField>
              <UiFieldLabel for="checkout-7j9-card-name-43j"> Name on Card </UiFieldLabel>
              <UiInput id="checkout-7j9-card-name-43j" placeholder="Evil Rabbit" required />
            </UiField>
            <UiField>
              <UiFieldLabel for="checkout-7j9-card-number-uw1"> Card Number </UiFieldLabel>
              <UiInput
                id="checkout-7j9-card-number-uw1"
                placeholder="1234 5678 9012 3456"
                required
              />
              <UiFieldDescription> Enter your 16-digit card number </UiFieldDescription>
            </UiField>
            <div class="grid grid-cols-3 gap-4">
              <UiField>
                <UiFieldLabel for="checkout-exp-month-ts6"> Month </UiFieldLabel>
                <UiSelect default-value="">
                  <UiSelectTrigger id="checkout-exp-month-ts6">
                    <UiSelectValue placeholder="MM" />
                  </UiSelectTrigger>
                  <UiSelectContent>
                    <UiSelectItem value="01">01</UiSelectItem>
                    <UiSelectItem value="02">02</UiSelectItem>
                    <UiSelectItem value="03">03</UiSelectItem>
                    <UiSelectItem value="04">04</UiSelectItem>
                    <UiSelectItem value="05">05</UiSelectItem>
                    <UiSelectItem value="06">06</UiSelectItem>
                    <UiSelectItem value="07">07</UiSelectItem>
                    <UiSelectItem value="08">08</UiSelectItem>
                    <UiSelectItem value="09">09</UiSelectItem>
                    <UiSelectItem value="10">10</UiSelectItem>
                    <UiSelectItem value="11">11</UiSelectItem>
                    <UiSelectItem value="12">12</UiSelectItem>
                  </UiSelectContent>
                </UiSelect>
              </UiField>
              <UiField>
                <UiFieldLabel for="checkout-7j9-exp-year-f59"> Year </UiFieldLabel>
                <UiSelect default-value="">
                  <UiSelectTrigger id="checkout-7j9-exp-year-f59">
                    <UiSelectValue placeholder="YYYY" />
                  </UiSelectTrigger>
                  <UiSelectContent>
                    <UiSelectItem value="2024">2024</UiSelectItem>
                    <UiSelectItem value="2025">2025</UiSelectItem>
                    <UiSelectItem value="2026">2026</UiSelectItem>
                    <UiSelectItem value="2027">2027</UiSelectItem>
                    <UiSelectItem value="2028">2028</UiSelectItem>
                    <UiSelectItem value="2029">2029</UiSelectItem>
                  </UiSelectContent>
                </UiSelect>
              </UiField>
              <UiField>
                <UiFieldLabel for="checkout-7j9-cvv">CVV</UiFieldLabel>
                <UiInput id="checkout-7j9-cvv" placeholder="123" required />
              </UiField>
            </div>
          </UiFieldGroup>
        </UiFieldSet>
        <UiFieldSeparator />
        <UiFieldSet>
          <UiFieldLegend>Billing Address</UiFieldLegend>
          <UiFieldDescription>
            The billing address associated with your payment method
          </UiFieldDescription>
          <UiFieldGroup>
            <UiField orientation="horizontal">
              <UiCheckbox id="checkout-7j9-same-as-shipping-wgm" default-checked />
              <UiFieldLabel for="checkout-7j9-same-as-shipping-wgm" class="font-normal">
                Same as shipping address
              </UiFieldLabel>
            </UiField>
          </UiFieldGroup>
        </UiFieldSet>
        <UiFieldSet>
          <UiFieldGroup>
            <UiField>
              <UiFieldLabel for="checkout-7j9-optional-comments"> Comments </UiFieldLabel>
              <UiTextarea
                id="checkout-7j9-optional-comments"
                placeholder="Add any additional comments"
                class="resize-none"
              />
            </UiField>
          </UiFieldGroup>
        </UiFieldSet>
        <UiField orientation="horizontal">
          <UiButton type="submit">Submit</UiButton>
          <UiButton variant="outline" type="button"> Cancel </UiButton>
        </UiField>
      </UiFieldGroup>
    </form>
  </div>
</template>

<script lang="ts" setup></script>
```

<!-- /automd -->

::

### Input

::ShowCase

:DocsFieldInput

#code

<!-- automd:file src="../../app/components/content/Docs/Field/DocsFieldInput.vue" code lang="vue" -->

```vue [DocsFieldInput.vue]
<template>
  <div class="mx-auto w-full max-w-md">
    <UiFieldSet>
      <UiFieldGroup>
        <UiField>
          <UiFieldLabel :for="usernameId">Username</UiFieldLabel>
          <UiInput :id="usernameId" type="text" placeholder="james_bond" pattern="[a-z0-9_]+" />
          <UiFieldDescription> Choose a unique username for your account. </UiFieldDescription>
        </UiField>
        <UiField>
          <UiFieldLabel :for="passwordId">Password</UiFieldLabel>
          <UiFieldDescription> Must be at least 8 characters long. </UiFieldDescription>
          <UiInput :id="passwordId" type="password" placeholder="••••••••" />
        </UiField>
      </UiFieldGroup>
    </UiFieldSet>
  </div>
</template>

<script lang="ts" setup>
  const passwordId = useId();
  const usernameId = useId();
</script>
```

<!-- /automd -->

::

### Textarea

::ShowCase

:DocsFieldTextarea

#code

<!-- automd:file src="../../app/components/content/Docs/Field/DocsFieldTextarea.vue" code lang="vue" -->

```vue [DocsFieldTextarea.vue]
<template>
  <div class="mx-auto w-full max-w-md">
    <UiFieldSet>
      <UiFieldGroup>
        <UiField>
          <UiFieldLabel :for="feedbackId">Feedback</UiFieldLabel>
          <UiTextarea :id="feedbackId" placeholder="Your feedback helps us improve..." :rows="4" />
          <UiFieldDescription> Share your thoughts about our service. </UiFieldDescription>
        </UiField>
      </UiFieldGroup>
    </UiFieldSet>
  </div>
</template>

<script lang="ts" setup>
  const feedbackId = useId();
</script>
```

<!-- /automd -->

::

### Select

::ShowCase

:DocsFieldSelect

#code

<!-- automd:file src="../../app/components/content/Docs/Field/DocsFieldSelect.vue" code lang="vue" -->

```vue [DocsFieldSelect.vue]
<template>
  <div class="mx-auto w-full max-w-md">
    <UiField>
      <UiFieldLabel :for="id">Department</UiFieldLabel>
      <UiSelect>
        <UiSelectTrigger :id="id" class="w-full">
          <UiSelectValue placeholder="Choose department" />
        </UiSelectTrigger>
        <UiSelectContent>
          <UiSelectItem value="engineering">Engineering</UiSelectItem>
          <UiSelectItem value="design">Design</UiSelectItem>
          <UiSelectItem value="marketing">Marketing</UiSelectItem>
          <UiSelectItem value="sales">Sales</UiSelectItem>
          <UiSelectItem value="support">Customer Support</UiSelectItem>
          <UiSelectItem value="hr">Human Resources</UiSelectItem>
          <UiSelectItem value="finance">Finance</UiSelectItem>
          <UiSelectItem value="operations">Operations</UiSelectItem>
        </UiSelectContent>
      </UiSelect>
      <UiFieldDescription>Select your department or area of work.</UiFieldDescription>
    </UiField>
  </div>
</template>

<script lang="ts" setup>
  const id = useId();
</script>
```

<!-- /automd -->

::

### Slider

::ShowCase

:DocsFieldSlider

#code

<!-- automd:file src="../../app/components/content/Docs/Field/DocsFieldSlider.vue" code lang="vue" -->

```vue [DocsFieldSlider.vue]
<template>
  <div class="mx-auto w-full max-w-md">
    <UiField>
      <UiFieldTitle>Price Range</UiFieldTitle>
      <UiFieldDescription>
        Set your budget range ($
        <span class="font-medium tabular-nums">{{ value[0] }}</span> -
        <span class="font-medium tabular-nums">{{ value[1] }}</span
        >).
      </UiFieldDescription>
      <UiSlider
        v-model="value"
        :max="1000"
        :min="0"
        :step="10"
        class="mt-2 w-full"
        aria-label="Price Range"
      />
    </UiField>
  </div>
</template>

<script lang="ts" setup>
  const value = ref<[number, number]>([200, 800]);
</script>
```

<!-- /automd -->

::

### FieldSet

::ShowCase

:DocsFieldFieldSet

#code

<!-- automd:file src="../../app/components/content/Docs/Field/DocsFieldFieldSet.vue" code lang="vue" -->

```vue [DocsFieldFieldSet.vue]
<template>
  <div class="mx-auto w-full max-w-md space-y-6">
    <UiFieldSet>
      <UiFieldLegend>Address Information</UiFieldLegend>
      <UiFieldDescription> We need your address to deliver your order. </UiFieldDescription>
      <UiFieldGroup>
        <UiField>
          <UiFieldLabel :for="streetId">Street Address</UiFieldLabel>
          <UiInput :id="streetId" placeholder="123 Main St" />
        </UiField>
        <div class="grid grid-cols-2 gap-4">
          <UiField>
            <UiFieldLabel :for="cityId">City</UiFieldLabel>
            <UiInput :id="cityId" placeholder="New York" />
          </UiField>
          <UiField>
            <UiFieldLabel :for="zipId">Postal Code</UiFieldLabel>
            <UiInput :id="zipId" placeholder="90502" />
          </UiField>
        </div>
      </UiFieldGroup>
    </UiFieldSet>
  </div>
</template>

<script lang="ts" setup>
  const streetId = useId();
  const cityId = useId();
  const zipId = useId();
</script>
```

<!-- /automd -->

::

### Checkbox

::ShowCase

:DocsFieldCheckbox

#code

<!-- automd:file src="../../app/components/content/Docs/Field/DocsFieldCheckbox.vue" code lang="vue" -->

```vue [DocsFieldCheckbox.vue]
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
```

<!-- /automd -->

::

### Radio

::ShowCase

:DocsFieldRadio

#code

<!-- automd:file src="../../app/components/content/Docs/Field/DocsFieldRadio.vue" code lang="vue" -->

```vue [DocsFieldRadio.vue]
<template>
  <div class="mx-auto w-full max-w-md">
    <UiFieldSet>
      <UiFieldLabel>Subscription Plan</UiFieldLabel>
      <UiFieldDescription>
        Yearly and lifetime plans offer significant savings.
      </UiFieldDescription>
      <UiRadioGroup default-value="monthly">
        <UiField orientation="horizontal">
          <UiRadioGroupItem :id="id1" value="monthly" />
          <UiFieldLabel :for="id1" class="font-normal"> Monthly ($9.99/month) </UiFieldLabel>
        </UiField>
        <UiField orientation="horizontal">
          <UiRadioGroupItem :id="id2" value="yearly" />
          <UiFieldLabel :for="id2" class="font-normal"> Yearly ($99.99/year) </UiFieldLabel>
        </UiField>
        <UiField orientation="horizontal">
          <UiRadioGroupItem :id="id3" value="lifetime" />
          <UiFieldLabel :for="id3" class="font-normal"> Lifetime ($299.99) </UiFieldLabel>
        </UiField>
      </UiRadioGroup>
    </UiFieldSet>
  </div>
</template>

<script lang="ts" setup>
  const id1 = useId();
  const id2 = useId();
  const id3 = useId();
</script>
```

<!-- /automd -->

::

### Switch

::ShowCase

:DocsFieldSwitch

#code

<!-- automd:file src="../../app/components/content/Docs/Field/DocsFieldSwitch.vue" code lang="vue" -->

```vue [DocsFieldSwitch.vue]
<template>
  <div class="mx-auto w-full max-w-md">
    <UiField orientation="horizontal">
      <UiFieldContent>
        <UiFieldLabel :for="id1">Multi-factor authentication</UiFieldLabel>
        <UiFieldDescription>
          Enable multi-factor authentication. If you do not have a two-factor device, you can use a
          one-time code sent to your email.
        </UiFieldDescription>
      </UiFieldContent>
      <UiSwitch :id="id1" />
    </UiField>
  </div>
</template>

<script lang="ts" setup>
  const id1 = useId();
</script>
```

<!-- /automd -->

::

### Choice Card

Wrap `Field` components inside `FieldLabel` to create selectable field groups. This works with `RadioItem`, `Checkbox` and `Switch` components.

::ShowCase

:DocsFieldChoiceCard

#code

<!-- automd:file src="../../app/components/content/Docs/Field/DocsFieldChoiceCard.vue" code lang="vue" -->

```vue [DocsFieldChoiceCard.vue]
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
```

<!-- /automd -->

::

### Field Group

Stack `Field` components with `FieldGroup`. Add `FieldSeparator` to divide them.

::ShowCase

:DocsFieldFieldGroup

#code

<!-- automd:file src="../../app/components/content/Docs/Field/DocsFieldFieldGroup.vue" code lang="vue" -->

```vue [DocsFieldFieldGroup.vue]
<template>
  <div class="mx-auto w-full max-w-md">
    <UiFieldGroup>
      <UiFieldSet>
        <UiFieldLabel>Responses</UiFieldLabel>
        <UiFieldDescription>
          Get notified when ChatGPT responds to requests that take time, like research or image
          generation.
        </UiFieldDescription>
        <UiFieldGroup data-slot="checkbox-group">
          <UiField orientation="horizontal">
            <UiCheckbox :id="id1" default-value disabled />
            <UiFieldLabel :for="id1" class="font-normal"> Push notifications </UiFieldLabel>
          </UiField>
        </UiFieldGroup>
      </UiFieldSet>
      <UiFieldSeparator />
      <UiFieldSet>
        <UiFieldLabel>Tasks</UiFieldLabel>
        <UiFieldDescription>
          Get notified when tasks you've created have updates.
          <a href="#">Manage tasks</a>
        </UiFieldDescription>
        <UiFieldGroup data-slot="checkbox-group">
          <UiField orientation="horizontal">
            <UiCheckbox :id="id2" />
            <UiFieldLabel :for="id2" class="font-normal"> Push notifications </UiFieldLabel>
          </UiField>
          <UiField orientation="horizontal">
            <UiCheckbox :id="id3" />
            <UiFieldLabel :for="id3" class="font-normal"> Email notifications </UiFieldLabel>
          </UiField>
        </UiFieldGroup>
      </UiFieldSet>
    </UiFieldGroup>
  </div>
</template>

<script lang="ts" setup>
  const id1 = useId();
  const id2 = useId();
  const id3 = useId();
</script>
```

<!-- /automd -->

::

### Responsive Layout

- **Vertical fields:** Default orientation stacks label, control, and helper text—ideal for mobile-first layouts.
- **Horizontal fields:** Set `orientation="horizontal"` on `Field` to align the label and control side-by-side. Pair with `FieldContent` to keep descriptions aligned.
- **Responsive fields:** Set `orientation="responsive"` for automatic column layouts inside container-aware parents. Apply `@container/field-group` classes on `FieldGroup` to switch orientations at specific breakpoints.

::ShowCase

:DocsFieldResponsiveLayout

#code

<!-- automd:file src="../../app/components/content/Docs/Field/DocsFieldResponsiveLayout.vue" code lang="vue" -->

```vue [DocsFieldResponsiveLayout.vue]
<template>
  <div class="mx-auto w-full max-w-4xl">
    <form>
      <UiFieldSet>
        <UiFieldLegend>Profile</UiFieldLegend>
        <UiFieldDescription>Fill in your profile information.</UiFieldDescription>
        <UiFieldSeparator />
        <UiFieldGroup>
          <UiField orientation="responsive">
            <UiFieldContent>
              <UiFieldLabel :for="id1">Name</UiFieldLabel>
              <UiFieldDescription> Provide your full name for identification </UiFieldDescription>
            </UiFieldContent>
            <UiInput :id="id1" placeholder="Evil Rabbit" required />
          </UiField>
          <UiFieldSeparator />
          <UiField orientation="responsive">
            <UiFieldContent>
              <UiFieldLabel :for="id2">Message</UiFieldLabel>
              <UiFieldDescription>
                You can write your message here. Keep it short, preferably under 100 characters.
              </UiFieldDescription>
            </UiFieldContent>
            <UiTextarea
              :id="id2"
              placeholder="Hello, world!"
              required
              class="min-h-[100px] resize-none sm:min-w-[300px]"
            />
          </UiField>
          <UiFieldSeparator />
          <UiField orientation="responsive">
            <UiButton type="submit">Submit</UiButton>
            <UiButton type="button" variant="outline"> Cancel </UiButton>
          </UiField>
        </UiFieldGroup>
      </UiFieldSet>
    </form>
  </div>
</template>

<script lang="ts" setup>
  const id1 = useId();
  const id2 = useId();
</script>
```

<!-- /automd -->

::

## Validation and Errors

- Add `data-invalid` to `Field` to switch the entire block into an error state.
- Add `aria-invalid` on the input itself for assistive technologies.
- Render `FieldError` immediately after the control or inside `FieldContent` to keep error messages aligned with the field.

```vue
<template>
  <UiField data-invalid>
    <UiFieldLabel for="email">Email</UiFieldLabel>
    <UiInput id="email" type="email" aria-invalid />
    <UiFieldError>Enter a valid email address.</UiFieldError>
  </UiField>
</template>
```

## Accessibility

- `FieldSet` and `FieldLegend` keep related controls grouped for keyboard and assistive tech users.
- `Field` outputs `role="group"` so nested controls inherit labeling from `FieldLabel` and `FieldLegend` when combined.
- Apply `FieldSeparator` sparingly to ensure screen readers encounter clear section boundaries.
