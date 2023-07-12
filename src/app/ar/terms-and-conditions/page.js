import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import TermsAndConditions from "@/components/Pages/TermsAndConditions/Index";
import ScrollToTop from "@/components/ScrollToTop";
export default async function TermsAndConditionsPage() {
  return (
    <div className="rtl">
      <Cta />
      <ScrollToTop />
      <Nav arabic />
      <TermsAndConditions arabic />
      <Footer arabic />
    </div>
  );
}
