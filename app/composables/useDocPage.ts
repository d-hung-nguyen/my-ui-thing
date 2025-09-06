import { kebabCase, merge } from "lodash-es";

export const useDocPage = async () => {
  const route = useRoute();
  const { data } = await useAsyncData(kebabCase(route.path) + "-page", async () => {
    const content = await queryCollection("content").path(route.path).first();
    const magic = await queryCollection("magic").path(route.path).first();
    return { content, magic };
  });
  const mergedPages = merge([], data.value?.content, data.value?.magic);
  return { magicPage: data.value?.magic, contentPage: data.value?.content, mergedPages };
};
