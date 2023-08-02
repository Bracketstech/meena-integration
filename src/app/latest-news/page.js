import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import LatestNewsPage from "@/components/Pages/LatestNews/Index";
import ScrollToTop from "@/components/ScrollToTop";
import getNewsData from "@/lib/data-hooks/getNewsData";
import { revalidateTime } from "@/lib/client";
import ErrorComponent from "@/components/ErrorComponent";
export const revalidate = revalidateTime;

export async function generateMetadata({ params, searchParams }, parent) {
  // fetch data
  const limit = 3;

  const data = await getNewsData(
    "9d62a577-0afb-428f-92f0-52b643d41636",
    false,
    searchParams.page ? +searchParams.page : 1,
    limit
  );
  const previousImages = (await parent).openGraph?.images || [];
  let newImages;
  if (data?.entry?.seo_image?.path) {
    newImages = [data?.entry?.seo_image?.path, ...previousImages];
  } else {
    newImages = [...previousImages];
  }
  return {
    title: data?.entry?.seo_title,
    description: data?.entry?.seo_description,
    openGraph: {
      images: [...newImages],
    },
  };
}

export default async function LatestNews({ searchParams }) {
  const limit = 3;

  const data = await getNewsData(
    "9d62a577-0afb-428f-92f0-52b643d41636",
    false,
    searchParams.page ? +searchParams.page : 1,
    limit
  );
  if (data == "error") {
    return <ErrorComponent error />;
  }
  const numberOfPages = Math.ceil(data.NewsEn.total / limit);
  return (
    <div className="ltr">
      <Cta />
      <ScrollToTop />
      <Nav />
      <LatestNewsPage
        data={data}
        numberOfPages={numberOfPages}
        currentPage={searchParams.page ? +searchParams.page : 1}
      />
      <Footer />
    </div>
  );
}
