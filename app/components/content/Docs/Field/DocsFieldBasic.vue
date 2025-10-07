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
