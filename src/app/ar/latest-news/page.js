import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import LatestNewsPage from "@/components/Pages/LatestNews/Index";
import ScrollToTop from "@/components/ScrollToTop";
import getNewsData from "@/lib/data-hooks/getNewsData";
export const revalidate = 5;

export async function generateMetadata({ params, searchParams }, parent) {
  // fetch data
  const limit = 3;

  const data = await getNewsData(
    "a96a1991-7ad2-406b-95e2-c98e68388b64",
    true,
    searchParams.page ? +searchParams.page : 1,
    limit
  );
  const previousImages = (await parent).openGraph?.images || [];
  const previousTitle = (await parent).title;
  const previousDescription = (await parent).description;
  let newImages;
  if (data?.entry?.seo_image?.path) {
    newImages = [data?.entry?.seo_image?.path, ...previousImages];
  } else {
    newImages = [...previousImages];
  }
  return {
    title: data?.entry?.seo_title ? data?.entry?.seo_title : previousTitle,
    description: data?.entry?.seo_description
      ? data?.entry?.seo_description
      : previousDescription,
    openGraph: {
      images: [...newImages],
    },
  };
}

export default async function LatestNews({ searchParams }) {
  const limit = 3;
  const data = await getNewsData(
    "a96a1991-7ad2-406b-95e2-c98e68388b64",
    true,
    searchParams.page ? +searchParams.page : 1,
    limit
  );
  const numberOfPages = Math.ceil(data.NewsEn.total / limit);
  return (
    <div className="rtl">
      <Cta arabic />

      <ScrollToTop />
      <Nav arabic />
      <LatestNewsPage
        arabic
        data={data}
        numberOfPages={numberOfPages}
        currentPage={searchParams.page ? +searchParams.page : 1}
      />
      <Footer arabic />
    </div>
  );
}
