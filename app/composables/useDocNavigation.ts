import { kebabCase } from "lodash-es";

export const useDocNavigation = async () => {
  const route = useRoute();
  const { data } = await useAsyncData(kebabCase(route.path) + "-navigation", async () => {
    // Query the navigation tree from content directory
    const navigation = await queryCollectionNavigation("content");

    // Map through and ensure icons are included from navigation.yml files
    const content = navigation?.map((item: any) => {
      return {
        ...item,
        // The icon from navigation.icon in .navigation.yml files
        icon: item.navigation?.icon || item.icon || undefined,
      };
    });

    return { content };
  });
  return { content: data.value?.content };
};
