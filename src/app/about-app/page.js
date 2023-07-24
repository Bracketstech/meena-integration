import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import AboutApp from "@/components/Pages/AboutApp/Index";
import ScrollToTop from "@/components/ScrollToTop";
import getDownloadAppData from "@/lib/data-hooks/getDownloadAppData";
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
