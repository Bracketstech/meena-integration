import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import HomePage from "@/components/Pages/Home/Index";
import ScrollToTop from "@/components/ScrollToTop";
import getFABData from "@/lib/data-hooks/getFABData";
import getHomeData from "@/lib/data-hooks/getHomeData";
export const revalidate = 5;

export async function generateMetadata({ params, searchParams }, parent) {
  // fetch data
  const data = await getHomeData("arabic");
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
