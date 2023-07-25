import AboutMeena from "@/components/Pages/AboutMeena/Index";
import Careers from "@/components/Pages/Careers/Index";
import HelpAndSupport from "@/components/Pages/HelpAndSupport/Index";
import Locations from "@/components/Pages/Locations/Index";
import Services from "@/components/Pages/Services/Index";
import TermsAndConditions from "@/components/Pages/TermsAndConditions/Index";
import PrivacyPolicy from "@/components/Pages/PrivacyPolicy/Index";
import usePageId from "@/hooks/usePageId";
import getData from "@/lib/data-hooks/getData";
import getFABData from "@/lib/data-hooks/getFABData";

export default async function Page({ params }) {
  const { slug } = params;
  const id = await usePageId(slug, "arabic");
  const data = await getData(id, "arabic");
  const fabData = await getFABData("arabic");

  switch (id) {
    case "a4ebcba3-3ba6-4d3b-bd01-29ea514119ed":
      return (
        <>
          <Services arabic data={data?.entry} fabData={fabData} />
        </>
      );
    case "e9a0fcb1-57be-499d-ae50-ec17fb7bc69a":
      return (
        <>
          <Locations arabic data={data?.branches?.data} />
        </>
      );
    case "e1880864-7e75-491a-a301-fad016620580":
      return (
        <>
          <HelpAndSupport arabic data={data} />
        </>
      );
    case "b6f20761-83c3-4cff-8090-aac0b7ab9b9d":
      return (
        <>
          <AboutMeena arabic data={data?.entry} />
        </>
      );
    case "4b5b6411-a391-4f04-a5e1-ffb4918636ae":
      return (
        <>
          <Careers arabic data={data?.entry} />
        </>
      );
    case "feaab073-9016-4bba-8ae2-992c2ddd4015":
      return (
        <>
          <TermsAndConditions arabic data={data?.entry} />
        </>
      );
    case "291a2fb2-b0ba-4ffd-a670-514e9f6405ff":
      return (
        <>
          <PrivacyPolicy arabic data={data?.entry} />
        </>
      );

    default:
      return <h1>Page Not Found {id}</h1>;
  }
}
