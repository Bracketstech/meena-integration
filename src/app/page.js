import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import HomePage from "@/components/Pages/Home/Index";
import AboutMeena from "@/components/Pages/AboutMeena/Index";
import AboutApp from "@/components/Pages/AboutApp/Index";

export default async function Home({ searchParams }) {
  //  const data = await getHomeData()
  return (
    <div className="ltr">
      <Nav home />
      {/* <h1>{data.entry.title}</h1> */}
      <HomePage />
      {/* <Services /> */}
      {/* <Locations /> */}
      {/* <HelpAndSupport /> */}
      {/* <AboutMeena /> */}
      {/* <AboutApp /> */}
      {/* <Careers /> */}
      {/* <LatestNews /> */}
      {/* <Article /> */}
      {/* <TermsAndConditions /> */}
      {/* <PrivacyPolicy /> */}
      {/* <Pagination searchParams={searchParams} /> */}
      <Footer />

    </div>
  );
}
