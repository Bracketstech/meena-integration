import getBottomNavData from "@/lib/data-hooks/getBottomNavData";
import getTopNavData from "@/lib/data-hooks/getTopNavData";

const usePageId = async (slug, arabic) => {
  const topNavData = await getTopNavData();
  const bottomNavData = await getBottomNavData();
  const filteredDataTop = arabic
    ? topNavData.nav.treeAr.filter(
        ({ page }) => page.url.replace("/ar/", "") == slug
      )
    : topNavData.nav.treeEn.filter(
        ({ page }) => page.url.replace("/", "") == slug
      );
  const filteredDataBottom = arabic
    ? bottomNavData.nav.treeAr.filter(
        ({ page }) => page.url.replace("/ar/", "") == slug
      )
    : bottomNavData.nav.treeEn.filter(
        ({ page }) => page.url.replace("/", "") == slug
      );
  const id = filteredDataTop[0]
    ? filteredDataTop[0].page.id
    : filteredDataBottom[0]?.page.id;
  return id;
};

export default usePageId;
