import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import AboutApp from "@/components/Pages/AboutApp/Index";
import ScrollToTop from "@/components/ScrollToTop";
export default async function DownloadApp() {
  return (
    <div className="rtl">
      <Cta />
      <ScrollToTop />
      <Nav arabic />
      <AboutApp arabic />
      <Footer arabic />
    </div>
  );
}
