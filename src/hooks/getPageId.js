import getBottomNavData from "@/lib/data-hooks/getBottomNavData";
import getFooterData from "@/lib/data-hooks/getFooterData";

const getPageId = async (slug, arabic) => {
  const footerData = await getFooterData();
  const bottomData = await getBottomNavData();

  const filteredDataSiteMapLinks = arabic
    ? footerData.nav.treeAr[0].children.filter(
        ({ page }) => page.url.replace("/ar/", "") == slug
      )
    : footerData.nav.treeEn[0].children.filter(
        ({ page }) => page.url.replace("/", "") == slug
      );
  const filteredDataOtherLinks = arabic
    ? footerData.nav.treeAr[1].children.filter(
        ({ page }) => page.url.replace("/ar/", "") == slug
      )
    : footerData.nav.treeEn[1].children.filter(
        ({ page }) => page.url.replace("/", "") == slug
      );
  const id = filteredDataSiteMapLinks[0]
    ? filteredDataSiteMapLinks[0].page.id
    : filteredDataOtherLinks[0]?.page.id;

  if (!id) {
    if (arabic) {
      if (
        bottomData?.nav?.treeAr[
          bottomData?.nav?.treeAr?.length - 1
        ]?.page?.url?.replace("/ar/", "") == slug
      ) {
        return bottomData?.nav?.treeAr[bottomData?.nav?.treeAr?.length - 1]
          ?.page?.id;
      }
    } else {
      if (
        bottomData?.nav?.treeEn[
          bottomData?.nav?.treeEn?.length - 1
        ]?.page?.url?.replace("/", "") == slug
      ) {
        return bottomData?.nav?.treeEn[bottomData?.nav?.treeEn?.length - 1]
          ?.page?.id;
      }
    }
  }
  return id;
};

export default getPageId;
