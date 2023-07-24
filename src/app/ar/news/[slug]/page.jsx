import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import ArticlePage from "@/components/Pages/Article/Index";
import ScrollToTop from "@/components/ScrollToTop";
import getNewsDetails from "@/lib/data-hooks/getNewsDetails";
export default async function Article({ params }) {
  const { slug } = params;
  const data = await getNewsDetails(slug, "arabic");
  return (
    <div className="rtl">
      <Cta arabic />

      <ScrollToTop />
      <Nav arabic />
      <ArticlePage arabic data={data?.entry} />
      <Footer arabic />
    </div>
  );
}
