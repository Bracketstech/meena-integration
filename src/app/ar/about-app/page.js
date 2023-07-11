import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import AboutApp from "@/components/Pages/AboutApp/Index";
export default async function DownloadApp() {
  return (
    <div className="rtl">
      <Nav arabic />
      <AboutApp arabic />
      <Footer arabic />
    </div>
  );
}
