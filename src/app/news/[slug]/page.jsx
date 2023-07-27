import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import ArticlePage from "@/components/Pages/Article/Index";
import ScrollToTop from "@/components/ScrollToTop";
import getNewsDetails from "@/lib/data-hooks/getNewsDetails";

export const revalidate = 50000;

export async function generateMetadata({ params, searchParams }, parent) {
  // fetch data
  const { slug } = params;
  const data = await getNewsDetails(slug);
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

export default async function Article({ params }) {
  const { slug } = params;
  const data = await getNewsDetails(slug);
  return (
    <div className="ltr">
      <Cta />
      <ScrollToTop />
      <Nav />
      <ArticlePage data={data?.entry} />
      <Footer />
    </div>
  );
}
