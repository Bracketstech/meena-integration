import Nav from "@/components/Navbar";
import HomePage from "@/components/Pages/Home/Index";
import Services from "@/components/Pages/Services/Index";
import Locations from "@/components/Pages/Locations/Index";
import HelpAndSupport from "@/components/Pages/HelpAndSupport/Index";
import Careers from "@/components/Pages/Careers/Index";
import LatestNews from "@/components/Pages/LatestNews/Index";
import Article from "@/components/Pages/Article/Index";
import TermsAndConditions from "@/components/Pages/TermsAndConditions/Index";
import PrivacyPolicy from "@/components/Pages/PrivacyPolicy/Index";
import Pagination from "@/components/Pagination";
import getHomeData from "@/lib/data-hooks/getHomeData";

export default async function Home({ searchParams }) {
  //  const data = await getHomeData()
  return (
    <>
      <Nav home />
      {/* <h1>{data.entry.title}</h1> */}
      <HomePage/>
      {/* <Services/> */}
      {/* <Locations/> */}
      {/* <HelpAndSupport/> */}
      {/* <Careers/> */}
      {/* <LatestNews/> */}
      {/* <Article/> */}
      {/* <TermsAndConditions/> */}
      {/* <PrivacyPolicy/> */}
      {/* <Pagination searchParams={searchParams}/> */}
    </>
  );
}
