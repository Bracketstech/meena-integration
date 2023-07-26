import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import getPageId from "@/hooks/getPageId";

export default async function RootLayout({ children, params }) {
  const { slug } = params;
  const id = await getPageId(slug, "arabic");
  return (
    <div className="rtl">
      <Cta arabic />
      <ScrollToTop />
      <Nav arabic id={id} />
      {children}
      <Footer arabic />
    </div>
  );
}
