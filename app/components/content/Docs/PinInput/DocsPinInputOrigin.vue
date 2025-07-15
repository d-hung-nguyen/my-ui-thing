<template>
  <div class="mx-auto grid max-w-xs grid-cols-1 gap-10">
    <div class="flex flex-col gap-3">
      <UiLabel for="otp-single">OTP input single</UiLabel>
      <UiPinInput id="otp-single" otp>
        <UiPinInputGroup>
          <UiPinInputInput
            v-for="n in 4"
            :key="n"
            :index="n"
            class="rounded-s-none rounded-e-none border-l-0 will-change-[box-shadow] first:rounded-s-md first:border-l last:rounded-e-md focus:z-20 focus:border-l"
          />
        </UiPinInputGroup>
      </UiPinInput>
    </div>
    <div class="flex flex-col gap-3">
      <UiLabel for="otp-double">OTP input double</UiLabel>
      <UiPinInput id="otp-double" otp>
        <UiPinInputGroup>
          <template v-for="n in [1, 2, 3]" :key="n">
            <UiPinInputInput
              :index="n"
              class="rounded-s-none rounded-e-none border-l-0 will-change-[box-shadow] first:rounded-s-md first:border-l last:rounded-e-md focus:z-20 focus:border-l"
            />
          </template>
        </UiPinInputGroup>
        <Icon name="lucide:minus" />
        <UiPinInputGroup>
          <template v-for="n in [4, 5, 6]" :key="n">
            <UiPinInputInput
              :index="n"
              class="rounded-s-none rounded-e-none border-l-0 will-change-[box-shadow] first:rounded-s-md first:border-l last:rounded-e-md focus:z-20 focus:border-l"
            />
          </template>
        </UiPinInputGroup>
      </UiPinInput>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
