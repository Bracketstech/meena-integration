import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import PrivacyPolicy from "@/components/Pages/PrivacyPolicy/Index";
export default async function PrivacyPolicyPage() {
  return (
    <div className="rtl">
      <Nav arabic />
      <PrivacyPolicy arabic />
      <Footer arabic />
    </div>
  );
}
