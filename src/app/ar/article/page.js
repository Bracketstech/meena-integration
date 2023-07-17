import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import ArticlePage from "@/components/Pages/Article/Index";
import ScrollToTop from "@/components/ScrollToTop";
export default async function Article() {
  return (
    <div className="rtl">
      <Cta arabic />

      <ScrollToTop />
      <Nav arabic />
      <ArticlePage arabic />
      <Footer arabic />
    </div>
  );
}
