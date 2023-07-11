import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import PrivacyPolicy from "@/components/Pages/PrivacyPolicy/Index";
export default async function PrivacyPolicyPage() {
  return (
    <div className="ltr">
      <Nav />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}
