<template>
  <div class="@container">
    <div
      class="grid min-h-[500px] gap-4 rounded-xl **:rounded-xl @lg:grid-cols-3 @lg:grid-rows-2 @lg:**:size-full [&_img]:object-cover [&_img]:grayscale [&_img]:transition-all [&_img]:duration-500 [&_img:hover]:scale-105 [&_img:hover]:grayscale-0"
    >
      <magic-box-reveal class="@lg:row-span-2">
        <NuxtImg
          src="https://images.unsplash.com/photo-1754045502217-f4622c7d8d99?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </magic-box-reveal>
      <magic-box-reveal class="@lg:row-span-1">
        <NuxtImg
          src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </magic-box-reveal>
      <magic-box-reveal class="@lg:col-start-2 @lg:row-span-1 @lg:row-start-2">
        <NuxtImg
          src="https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </magic-box-reveal>
      <magic-box-reveal class="@lg:row-span-2">
        <NuxtImg
          src="https://images.unsplash.com/photo-1484406566174-9da000fda645?q=80&w=1289&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </magic-box-reveal>
    </div>
  </div>
</template>
