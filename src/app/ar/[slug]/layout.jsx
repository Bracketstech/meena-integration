import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import usePageId from "@/hooks/usePageId";

export default async function RootLayout({ children, params }) {
  const { slug } = params;
  const id = await usePageId(slug, "arabic");
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
