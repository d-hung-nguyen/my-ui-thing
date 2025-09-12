---
title: Highlighter
description: The Highlighter component emphasizes text with animated highlights, underlines, and other annotation effects.
links:
  - title: Magic UI
    href: https://magicui.design/docs/components/highlighter
    icon: "lucide:wand"
---

::ShowCase

:MagicDocsHighlighter

#code

<!-- automd:file src="../../../app/components/content/Magic/Highlighter/MagicDocsHighlighter.vue" code lang="vue" -->

```vue [MagicDocsHighlighter.vue]
<template>
  <div class="text-center">
    <p class="leading-relaxed">
      The
      <MagicHighlighter type="underline" color="#FF9800"> Magic UI Highlighter </MagicHighlighter>
      makes important
      <MagicHighlighter type="highlight" color="#87CEFA"> text stand out </MagicHighlighter>
      effortlessly.
    </p>
  </div>
</template>
```

<!-- /automd -->

::

## Source code

Click :SourceCodeLink{component="Highlighter.vue" folder="Magic" collection="magic"} to see the source code for this component on GitHub.

Feel free to copy it and adjust it for your own use.

## Installation

This component requires the [`rough-notation`](https://github.com/rough-stuff/rough-notation) package.

```bash
npx ni rough-notation
```

## Usage

### Article

::ShowCase

:MagicDocsHighlighterBlog

#code

<!-- automd:file src="../../../app/components/content/Magic/Highlighter/MagicDocsHighlighterBlog.vue" code lang="vue" -->

```vue [MagicDocsHighlighterBlog.vue]
<template>
  <article class="max-w-none leading-relaxed">
    <h1 :class="styles().h1()">What Makes a Great Nuxt Developer?</h1>

    <p :class="styles().p()">
      A strong Nuxt developer blends technical skill with thoughtful decision making. The foundation
      is
      <MagicHighlighter
        type="highlight"
        class="text-primary-foreground"
        color="var(--color-primary)"
        >practical curiosity</MagicHighlighter
      >
      — a desire to learn how things work and why they fail, paired with the willingness to iterate.
    </p>

    <p :class="styles().p()">
      Good engineers focus on clarity. They design with
      <MagicHighlighter type="underline" color="#FFB74D">clear APIs</MagicHighlighter>
      and predictable data flows so teammates can move quickly and confidently.
    </p>

    <p :class="styles().p()">
      Reliability matters. Shipping features that people depend on means prioritising tests,
      observability, and graceful error handling. Treat reliability as a feature — something you
      <MagicHighlighter type="box" color="#C8E6C9">build into every release</MagicHighlighter>.
    </p>

    <p :class="styles().p()">
      UX awareness keeps products delightful. Small details like transitions, focus states, and
      accessibility choices are signs of craftsmanship. A developer pays attention to
      <MagicHighlighter type="circle" color="#BBDEFB">how intertypes feel</MagicHighlighter>
      and designs for real users.
    </p>

    <p :class="styles().p()">
      Avoid unnecessary complexity. Resist
      <MagicHighlighter type="strike-through" color="#FFCDD2">over-engineering</MagicHighlighter>
      and quick shortcuts that create more work later. Equally, call out and remove
      <MagicHighlighter type="crossed-off" color="#E1BEE7">unsafe shortcuts</MagicHighlighter>
      before they become technical debt.
    </p>

    <p :class="styles().p()">
      <MagicHighlighter type="bracket" :brackets="['left', 'right']" color="#FFE0B2"
        >Communication and empathy are core skills. Write documentation that helps others and use
        contracts and tests to set expectations across teams. A reliable teammate explains
        trade-offs and helps land decisions.</MagicHighlighter
      >
    </p>

    <p :class="styles().p()">
      Finally, <MagicHighlighter type="box">be kind to the future</MagicHighlighter> — write code
      you and your colleagues will thank you for. Consistent maintenance, thoughtful defaults, and a
      culture of feedback make a Nuxt developer truly great.
    </p>
  </article>
</template>

<script lang="ts" setup>
  const styles = tv({
    slots: {
      h1: "mb-6 text-2xl leading-tight font-black",
      p: "mb-6 text-foreground/80 last:mb-0",
    },
  });
</script>
```

<!-- /automd -->

::
