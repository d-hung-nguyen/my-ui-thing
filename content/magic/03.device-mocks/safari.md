---
title: Safari
description: A mockup of the Safari browser that can be used to showcase websites or web apps.
links:
  - title: Magic UI
    href: https://magicui.design/docs/components/safari
    icon: "lucide:wand"
---

::ShowCase

:MagicDocsSafariImage

#code

<!-- automd:file src="../../../app/components/content/Magic/Safari/MagicDocsSafariImage.vue" code lang="vue" -->

```vue [MagicDocsSafariImage.vue]
<template>
  <div class="relative">
    <MagicSafari
      url="ui.thing"
      class="size-full"
      image-src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=70&w=964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
  </div>
</template>
```

<!-- /automd -->

::

## Source code

Click :SourceCodeLink{component="Safari.vue" folder="Magic" collection="magic"} to see the source code for this component on GitHub.

Feel free to copy it and adjust it for your own use.

## Usage

### Video

::ShowCase

:MagicDocsSafariVideo

#code

<!-- automd:file src="../../../app/components/content/Magic/Safari/MagicDocsSafariVideo.vue" code lang="vue" -->

```vue [MagicDocsSafariVideo.vue]
<template>
  <div class="relative">
    <MagicSafari
      url="ui.thing"
      class="size-full"
      video-src="https://videos.pexels.com/video-files/2231485/2231485-uhd_2560_1440_24fps.mp4"
      aria-label="Video by Ruvim Miksanskiy from Pexels"
    />
  </div>
</template>
```

<!-- /automd -->

::

### Simple

::ShowCase

:MagicDocsSafariSimple

#code

<!-- automd:file src="../../../app/components/content/Magic/Safari/MagicDocsSafariSimple.vue" code lang="vue" -->

```vue [MagicDocsSafariSimple.vue]
<template>
  <div class="relative">
    <MagicSafari url="ui.thing" class="size-full" mode="simple" />
  </div>
</template>
```

<!-- /automd -->

::
