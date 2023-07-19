import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import HomePage from "@/components/Pages/Home/Index";
import ScrollToTop from "@/components/ScrollToTop";
import getHomeData from "@/lib/data-hooks/getHomeData";

export default async function Home() {
  // const data = await getHomeData("Ar");

  return (
    <div className="rtl">
      <ScrollToTop />
      <Cta arabic />

      <Nav home arabic />
      {/* <HomePage arabic data={data.entry} /> */}
      <Footer arabic />
    </div>
  );
}
