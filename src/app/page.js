import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import HomePage from "@/components/Pages/Home/Index";
import ScrollToTop from "@/components/ScrollToTop";
import getFABData from "@/lib/data-hooks/getFABData";
import getHomeData from "@/lib/data-hooks/getHomeData";
import { Suspense } from "react";
import Loading from "./loading";
import getGlobalMetaData from "@/lib/data-hooks/getGlobalMetaData";
import ErrorComponent from "@/components/ErrorComponent";
import { revalidateTime } from "@/lib/client";
export const revalidate = 300;

export async function generateMetadata({ params, searchParams }, parent) {
  // fetch data
  const data = await getHomeData();
  const globalData = await getGlobalMetaData();

  const previousImages = (await parent).openGraph?.images || [];
  let newImages;
  if (data?.entry?.seo_image?.path) {
    newImages = [data?.entry?.seo_image?.path, ...previousImages];
  } else {
    newImages = [...previousImages];
  }

  return {
    title:
      data?.entry?.seo_title +
      " " +
      globalData?.globalSEO?.website_general_prefix,
    description: data?.entry?.seo_description,
    openGraph: {
      images: [...newImages],
    },
  };
}

export default async function Home() {
  const data = await getHomeData();
  const fabData = await getFABData();

  if (data == "error") {
    return <ErrorComponent error />;
  }

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="ltr">
          {/* {JSON.stringify(data)} */}
          <ScrollToTop />
          <Cta />
          <Nav home />
          <HomePage data={data.entry} fabData={fabData} />
          <Footer />
        </div>
      </Suspense>
    </>
  );
}
