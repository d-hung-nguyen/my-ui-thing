<template>
  <div class="mx-auto w-full max-w-xs">
    <UiVeeMultiSelect
      v-model="value"
      placeholder="Choose a programming language"
      :filter-results="false"
      :min-chars="0"
      :delay="400"
      :searchable="true"
      :options="fetchLanguages"
    />
  </div>
</template>

<script lang="ts" setup>
  import { promiseTimeout } from "@vueuse/core";
  import { useFilter } from "reka-ui";

  const { contains } = useFilter({ sensitivity: "base" });
  const value = ref();

  const fetchLanguages = async (q?: string) => {
    if (q) {
      // Simulate network delay if a query is provided
      await promiseTimeout(2000);
    }
    const languages = [
      { value: "javascript", label: "JavaScript" },
      { value: "python", label: "Python" },
      { value: "java", label: "Java" },
      { value: "csharp", label: "C#" },
      { value: "php", label: "PHP" },
      { value: "ruby", label: "Ruby" },
      { value: "go", label: "Go" },
      { value: "swift", label: "Swift" },
    ];

    if (!q) return [...languages];
    return languages.filter((lang) => contains(lang.label, q));
  };
</script>
