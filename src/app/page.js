import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import HomePage from "@/components/Pages/Home/Index";
import ScrollToTop from "@/components/ScrollToTop";

export default async function Home() {
  return (
    <div className="ltr">
      <ScrollToTop />
      <Cta />
      <Nav home />
      <HomePage />
      <Footer />
    </div>
  );
}
