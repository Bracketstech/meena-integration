import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import HomePage from "@/components/Pages/Home/Index";
import ScrollToTop from "@/components/ScrollToTop";
import getFABData from "@/lib/data-hooks/getFABData";
import getGlobalMetaData from "@/lib/data-hooks/getGlobalMetaData";
import getHomeData from "@/lib/data-hooks/getHomeData";
export const revalidate = process.env.REVALIDATION_TIME;

export async function generateMetadata({ params, searchParams }, parent) {
  // fetch data
  const data = await getHomeData("arabic");
  const globalData = await getGlobalMetaData("arabic");

  const previousImages = (await parent).openGraph?.images || [];
  let newImages;
  if (data?.entry?.seo_image?.path) {
    newImages = [data?.entry?.seo_image?.path, ...previousImages];
  } else {
    newImages = [...previousImages];
  }
  return {
    title: {
      absolute:
        data?.entry?.seo_title +
        " " +
        globalData?.globalSEO?.website_general_prefix,
    },
    description: data?.entry?.seo_description,
    openGraph: {
      images: [...newImages],
    },
  };
}

export default async function Home() {
  const data = await getHomeData("Ar");
  const fabData = await getFABData("Ar");

  return (
    <div className="rtl">
      <ScrollToTop />
      <Cta arabic />

      <Nav home arabic />
      <HomePage arabic data={data.entry} fabData={fabData} />
      <Footer arabic />
    </div>
  );
}
