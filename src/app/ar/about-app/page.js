import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import AboutApp from "@/components/Pages/AboutApp/Index";
import ScrollToTop from "@/components/ScrollToTop";
import getDownloadAppData from "@/lib/data-hooks/getDownloadAppData";

export const revalidate = 50000;

export async function generateMetadata({ params, searchParams }, parent) {
  // fetch data
  const data = await getDownloadAppData("about-app", "Ar");
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

export default async function DownloadApp() {
  const data = await getDownloadAppData("about-app", "Ar");
  return (
    <div className="rtl">
      <Cta arabic />

      <ScrollToTop />
      <Nav arabic />
      <AboutApp arabic data={data?.entry} />
      <Footer arabic />
    </div>
  );
}
