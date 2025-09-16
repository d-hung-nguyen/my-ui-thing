<template>
  <MagicArcTimeline
    class="[--description-color:var(--muted-foreground)] [--icon-active-color:var(--primary)] [--step-line-active-color:var(--primary)]"
    :data
    :default-active-step="{ time: '2025 Q2', stepIndex: 0 }"
    :arc-config="{
      circleWidth: 4500,
      angleBetweenMinorSteps: 0.4,
      lineCountFillBetweenSteps: 8,
      boundaryPlaceholderLinesCount: 50,
    }"
  />
</template>

<script lang="ts" setup>
  import { Icon } from "#components";
  import type { ArcTimelineItem } from "~/components/Magic/ArcTimeline/ArcTimeline.vue";

  const data: ArcTimelineItem[] = [
    {
      time: "2022",
      steps: [
        {
          icon: h(Icon, { name: "radix-icons:rocket", width: 20, height: 20 }),
          content: "Founded Visionary Tech, a cutting-edge AI development company.",
        },
        {
          icon: h(Icon, { name: "radix-icons:cube", width: 20, height: 20 }),
          content: "Launched first AI-powered mobile app for personalized recommendations.",
        },
      ],
    },
    {
      time: "2023",
      steps: [
        {
          icon: h(Icon, { name: "radix-icons:lock-closed", width: 20, height: 20 }),
          content: "Raised $3M seed round at a $20M valuation.",
        },
        {
          icon: h(Icon, { name: "radix-icons:globe", width: 20, height: 20 }),
          content: "Expanded to global markets with localized app versions in 5 countries.",
        },
        {
          icon: h(Icon, { name: "radix-icons:gear", width: 20, height: 20 }),
          content: "Implemented enhanced machine learning algorithms for data prediction.",
        },
      ],
    },
    {
      time: "2024",
      steps: [
        {
          icon: h(Icon, { name: "radix-icons:rocket", width: 20, height: 20 }),
          content: "Introduced AI-powered virtual assistant for customer service.",
        },
        {
          icon: h(Icon, { name: "radix-icons:globe", width: 20, height: 20 }),
          content: "Partnered with several tech giants to enhance app capabilities.",
        },
        {
          icon: h(Icon, { name: "radix-icons:magic-wand", width: 20, height: 20 }),
          content: "Launched AR-based features for more immersive user experiences.",
        },
      ],
    },
    {
      time: "2025 Q1",
      steps: [
        {
          icon: h(Icon, { name: "radix-icons:star", width: 20, height: 20 }),
          content: "Rolled out AI-driven marketplace for personalized product discovery.",
        },
        {
          icon: h(Icon, { name: "radix-icons:lightning-bolt", width: 20, height: 20 }),
          content: "Introduced blockchain integration for secure transactions.",
        },
        {
          icon: h(Icon, { name: "radix-icons:rocket", width: 20, height: 20 }),
          content: "Showcased at CES with revolutionary AI-powered consumer products.",
        },
      ],
    },
    {
      time: "2025 Q2",
      steps: [
        {
          icon: h(Icon, { name: "radix-icons:gear", width: 20, height: 20 }),
          content: "Rebranded company with new logo and visual identity.",
        },
        {
          icon: h(Icon, { name: "radix-icons:star", width: 20, height: 20 }),
          content: "Launched AI-driven content creation tool for marketing teams.",
        },
        {
          icon: h(Icon, { name: "radix-icons:cube", width: 20, height: 20 }),
          content: "Acquired a competitor in the AI space to strengthen market position.",
        },
      ],
    },
    {
      time: "2025 Q3",
      steps: [
        {
          icon: h(Icon, { name: "radix-icons:cube", width: 20, height: 20 }),
          content: "Launched self-driving AI platform for industrial automation.",
        },
        {
          icon: h(Icon, { name: "radix-icons:magic-wand", width: 20, height: 20 }),
          content: "Added virtual reality integration to the product suite.",
        },
      ],
    },
    {
      time: "2025 Q4",
      steps: [
        {
          icon: h(Icon, { name: "radix-icons:star", width: 20, height: 20 }),
          content: "Introduced AI-driven analytics dashboard for enterprise clients.",
        },
        {
          icon: h(Icon, { name: "radix-icons:lightning-bolt", width: 20, height: 20 }),
          content: "Launched international expansion into Asian and European markets.",
        },
        {
          icon: h(Icon, { name: "radix-icons:rocket", width: 20, height: 20 }),
          content: "Hosted first global conference showcasing AI innovations.",
        },
      ],
    },
    {
      time: "2026 Q1",
      steps: [
        {
          icon: h(Icon, { name: "radix-icons:gear", width: 20, height: 20 }),
          content: "Released API for developers to integrate AI into their applications.",
        },
        {
          icon: h(Icon, { name: "radix-icons:star", width: 20, height: 20 }),
          content: "Launched new AI-powered voice assistant with multi-language support.",
        },
        {
          icon: h(Icon, { name: "radix-icons:globe", width: 20, height: 20 }),
          content: "Partnered with government agencies for AI-driven policy making.",
        },
      ],
    },
    {
      time: "2026 Q2",
      steps: [
        {
          icon: h(Icon, { name: "radix-icons:gear", width: 20, height: 20 }),
          content: "Unveiled new AI-powered robotics platform for manufacturing.",
        },
        {
          icon: h(Icon, { name: "radix-icons:magic-wand", width: 20, height: 20 }),
          content: "Introduced machine learning models for sustainable energy solutions.",
        },
      ],
    },
  ];
</script>
