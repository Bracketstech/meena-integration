import Nav from "@/components/Navbar";
import Footer from "@/components/Footer";
import getPageId from "@/hooks/getPageId";
import Cta from "@/components/Cta";
import ScrollToTop from "@/components/ScrollToTop";

export default async function RootLayout({ children, params }) {
  const { slug } = params;
  const id = await getPageId(slug);
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
