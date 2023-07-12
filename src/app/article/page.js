import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import ArticlePage from "@/components/Pages/Article/Index";
import ScrollToTop from "@/components/ScrollToTop";
export default async function Article() {
  return (
    <div className="ltr">
      <Cta />
      <ScrollToTop />
      <Nav />
      <ArticlePage />
      <Footer />
    </div>
  );
}
