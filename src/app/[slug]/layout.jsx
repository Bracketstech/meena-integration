import Nav from "@/components/Navbar";
import Footer from "@/components/Footer";
import usePageId from "@/hooks/usePageId";
import Cta from "@/components/Cta";
import ScrollToTop from "@/components/ScrollToTop";

export default async function RootLayout({ children, params }) {
  const { slug } = params;
  const id = await usePageId(slug);
  return (
    <div className="ltr">
      <Cta />
      <ScrollToTop />
      <Nav id={id} />
      {children}
      <Footer />
    </div>
  );
}
