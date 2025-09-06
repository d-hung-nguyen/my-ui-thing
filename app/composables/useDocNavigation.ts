import { cloneDeep, kebabCase, merge } from "lodash-es";

export const useDocNavigation = async () => {
  const route = useRoute();
  const { data } = await useAsyncData(kebabCase(route.path) + "-navigation", async () => {
    const content = await queryCollectionNavigation("content", [
      "icon",
      "label",
      "links",
      "layout",
    ]);
    const magic = await queryCollectionNavigation("magic", ["icon", "label", "links", "layout"]);
    return { content, magic };
  });
  const mergedNavigation = merge(cloneDeep(data.value?.content), cloneDeep(data.value?.magic));
  return { magic: data.value?.magic, content: data.value?.content, mergedNavigation };
};
