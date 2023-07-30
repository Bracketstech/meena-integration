import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import AboutApp from "@/components/Pages/AboutApp/Index";
import ScrollToTop from "@/components/ScrollToTop";
import getDownloadAppData from "@/lib/data-hooks/getDownloadAppData";
// export const revalidate = 5;

export async function generateMetadata({ params, searchParams }, parent) {
  // fetch data
  const data = await getDownloadAppData("about-app");
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

export default async function DownloadApp() {
  const data = await getDownloadAppData("about-app");

  return (
    <div className="ltr">
      <Cta />
      <ScrollToTop />
      <Nav />
      <AboutApp data={data?.entry} />
      <Footer />
    </div>
  );
}
