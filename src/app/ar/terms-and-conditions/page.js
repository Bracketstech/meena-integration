import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import TermsAndConditions from "@/components/Pages/TermsAndConditions/Index";
export default async function TermsAndConditionsPage() {
  return (
    <div className="rtl">
      <Nav arabic />
      <TermsAndConditions arabic />
      <Footer arabic />
    </div>
  );
}
