---
title: Android
description: A mockup of an Android device that can be used to showcase mobile apps or websites.
links:
  - title: Magic UI
    href: https://magicui.design/docs/components/android
    icon: "lucide:wand"
---

::ShowCase

:MagicDocsAndroid

#code

<!-- automd:file src="../../../app/components/content/Magic/Android/MagicDocsAndroid.vue" code lang="vue" -->

```vue [MagicDocsAndroid.vue]
<template>
  <div class="flex items-center justify-center">
    <MagicAndroid />
  </div>
</template>
```

<!-- /automd -->

::

## Source code

Click :SourceCodeLink{component="Android.vue" folder="Magic" collection="magic"} to see the source code for this component on GitHub.

Feel free to copy it and adjust it for your own use.

## Usage

### Image

::ShowCase

:MagicDocsAndroidImage

#code

<!-- automd:file src="../../../app/components/content/Magic/Android/MagicDocsAndroidImage.vue" code lang="vue" -->

```vue [MagicDocsAndroidImage.vue]
<template>
  <div class="flex items-center justify-center">
    <MagicAndroid
      src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=70&w=900&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
  </div>
</template>
```

<!-- /automd -->

::

### Video

::ShowCase

:MagicDocsAndroidVideo

#code

<!-- automd:file src="../../../app/components/content/Magic/Android/MagicDocsAndroidVideo.vue" code lang="vue" -->

```vue [MagicDocsAndroidVideo.vue]
<template>
  <div class="flex items-center justify-center">
    <MagicAndroid video-src="https://www.pexels.com/download/video/3327058/" />
  </div>
</template>
```

<!-- /automd -->

::
