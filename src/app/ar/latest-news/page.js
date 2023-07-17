import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import LatestNewsPage from "@/components/Pages/LatestNews/Index";
import ScrollToTop from "@/components/ScrollToTop";
export default async function LatestNews() {
  return (
    <div className="rtl">
      <Cta arabic />

      <ScrollToTop />
      <Nav arabic />
      <LatestNewsPage arabic />
      <Footer arabic />
    </div>
  );
}
