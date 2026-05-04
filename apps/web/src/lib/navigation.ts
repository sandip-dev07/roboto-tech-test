import { sanityFetch } from "@workspace/sanity/live";
import {
  queryGlobalSeoSettings,
  queryNavbarData,
  querySettingsData,
} from "@workspace/sanity/query";

export const getNavigationData = async () => {
  const [navbarData, settingsData, settingsMeta] = await Promise.all([
    sanityFetch({ query: queryNavbarData }),
    sanityFetch({ query: queryGlobalSeoSettings }),
    sanityFetch({ query: querySettingsData }),
  ]);

  return {
    navbarData: navbarData.data,
    settingsData: settingsData.data
      ? {
          ...settingsData.data,
          contactEmail: settingsMeta.data?.contactEmail ?? null,
        }
      : settingsData.data,
  };
};
