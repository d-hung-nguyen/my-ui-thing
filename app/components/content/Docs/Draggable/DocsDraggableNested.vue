<template>
  <div>
    <DefineNestedDraggable v-slot="{ items }">
      <ui-draggable
        class="min-h-12 border border-dashed p-4 pb-0"
        :list="items"
        item-key="id"
        tag="ul"
        :group="{ name: 'nested' }"
      >
        <template #item="{ element }">
          <li>
            {{ element.name }}
            <nested-draggable :items="element.children || []" />
          </li>
        </template>
      </ui-draggable>
    </DefineNestedDraggable>
    <nested-draggable :items="familyTree" />
  </div>
</template>

<script lang="ts" setup>
  import { faker } from "@faker-js/faker";

  type Items = {
    id: string;
    name: string;
    children?: Items[];
  };
  const [DefineNestedDraggable, NestedDraggable] = createReusableTemplate<{ items: Items[] }>();

  const familyTree = useState(() => [
    {
      id: useId(),
      name: faker.person.fullName(),
      children: [
        { id: useId(), name: faker.person.fullName(), children: [] },
        {
          id: useId(),
          name: faker.person.fullName(),
          children: [
            { id: useId(), name: faker.person.fullName(), children: [] },
            { id: useId(), name: faker.person.fullName(), children: [] },
          ],
        },
      ],
    },
    { id: useId(), name: faker.person.fullName(), children: [] },
    {
      id: useId(),
      name: faker.person.fullName(),
      children: [{ id: useId(), name: faker.person.fullName(), children: [] }],
    },
  ]);
</script>
