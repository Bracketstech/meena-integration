import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import ArticlePage from "@/components/Pages/Article/Index";
import ScrollToTop from "@/components/ScrollToTop";
import getFABData from "@/lib/data-hooks/getFABData";
import getNewsDetails from "@/lib/data-hooks/getNewsDetails";

export const revalidate = 0;

export async function generateMetadata({ params, searchParams }, parent) {
  // fetch data
  const { slug } = params;
  const data = await getNewsDetails(slug, "arabic");
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

export default async function Article({ params }) {
  const { slug } = params;
  const data = await getNewsDetails(slug, "arabic");
  const fabData = await getFABData("ar");

  return (
    <div className="rtl">
      <Cta arabic />

      <ScrollToTop />
      <Nav arabic />
      <ArticlePage arabic data={data?.entry} fabData={fabData} />
      <Footer arabic />
    </div>
  );
}
