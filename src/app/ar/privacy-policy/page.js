import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import PrivacyPolicy from "@/components/Pages/PrivacyPolicy/Index";
import ScrollToTop from "@/components/ScrollToTop";
export default async function PrivacyPolicyPage() {
  return (
    <div className="rtl">
      <Cta />
      <ScrollToTop />
      <Nav arabic />
      <PrivacyPolicy arabic />
      <Footer arabic />
    </div>
  );
}
