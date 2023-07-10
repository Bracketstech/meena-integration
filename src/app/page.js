import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import HomePage from "@/components/Pages/Home/Index";

export default async function Home({ searchParams }) {
  //  const data = await getHomeData()
  return (
    <div className="ltr">
      <Nav home />
      {/* <h1>{data.entry.title}</h1> */}
      <HomePage />
      <Footer />
      {/* <Services /> */}
      {/* <Locations /> */}
      {/* <HelpAndSupport /> */}
      {/* <Careers /> */}
      {/* <LatestNews /> */}
      {/* <Article /> */}
      {/* <TermsAndConditions /> */}
      {/* <PrivacyPolicy /> */}
      {/* <Pagination searchParams={searchParams} /> */}
    </div>
  );
}
