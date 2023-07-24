import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import LatestNewsPage from "@/components/Pages/LatestNews/Index";
import ScrollToTop from "@/components/ScrollToTop";
import getNewsData from "@/lib/data-hooks/getNewsData";
export default async function LatestNews({ searchParams }) {
  const limit = 1;
  const data = await getNewsData(
    "9d62a577-0afb-428f-92f0-52b643d41636",
    false,
    searchParams.page ? +searchParams.page : 1,
    limit
  );
  const numberOfPages = Math.ceil(data.NewsEn.total / limit);
  return (
    <div className="ltr">
      <Cta />
      <ScrollToTop />
      <Nav />
      <LatestNewsPage
        data={data}
        numberOfPages={numberOfPages}
        currentPage={searchParams.page ? +searchParams.page : 1}
      />
      <Footer />
    </div>
  );
}
