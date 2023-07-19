import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import HomePage from "@/components/Pages/Home/Index";
import ScrollToTop from "@/components/ScrollToTop";
import getHomeData from "@/lib/data-hooks/getHomeData";
import Head from "next/head";

export default async function Home() {
  const data = await getHomeData();
  return (
    <>
      <div className="ltr">
        {/* {JSON.stringify(data)} */}
        <ScrollToTop />
        <Cta />
        <Nav home />
        <HomePage data={data.entry} />
        <Footer />
      </div>
    </>
  );
}
