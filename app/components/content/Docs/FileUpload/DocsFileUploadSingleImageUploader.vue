<template>
  <div class="flex flex-col gap-2">
    <div class="relative">
      <!-- Drop area -->
      <div
        ref="dropzoneRef"
        role="button"
        class="relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed border-input p-4 transition-colors hover:bg-accent/50 has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:border-none has-[input:focus]:border-ring has-[input:focus]:ring-[3px] has-[input:focus]:ring-ring/50 data-[dragging=true]:bg-accent/50 lg:min-h-72"
        @click="openFileDialog"
      >
        <input ref="inputRef" hidden aria-label="Upload file" />
        <div v-if="currentFile" class="absolute inset-0">
          <img
            :src="currentFile.preview"
            :alt="currentFile.file.name"
            class="size-full object-cover"
          />
        </div>
        <div v-else class="flex flex-col items-center justify-center px-4 py-3 text-center">
          <div
            class="mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border bg-background"
            aria-hidden="true"
          >
            <Icon name="lucide:image-up" class="size-4 opacity-60" />
          </div>
          <p class="mb-1.5 text-sm font-medium">Drop your image here or click to browse</p>
          <p class="text-xs text-muted-foreground">Max size: {{ maxSizeMB }}MB</p>
        </div>
      </div>
      <div v-if="currentFile" class="absolute top-3 right-3">
        <button
          type="button"
          class="z-50 flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-[color,box-shadow] outline-none hover:bg-black/80 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
          aria-label="Remove image"
          @click="removeFile(currentFile.id)"
        >
          <Icon name="lucide:x" class="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>

    <div
      v-if="errors.length > 0"
      class="flex items-center gap-1 text-xs text-destructive"
      role="alert"
    >
      <Icon name="lucide:circle-alert" class="size-3 shrink-0" />
      <span>{{ errors[0] }}</span>
    </div>

    <p aria-live="polite" role="region" class="mt-2 text-center text-xs text-muted-foreground">
      Single image uploader w/ max size
    </p>
  </div>
</template>

<script lang="ts" setup>
  const maxSizeMB = 5;
  const maxSize = maxSizeMB * 1024 * 1024; // 5MB default

  const { files, errors, openFileDialog, removeFile, dropzoneRef, inputRef } = useFileUpload({
    accept: "image/*",
    maxSize,
  });

  const currentFile = computed(() => files.value?.[0]);
</script>
