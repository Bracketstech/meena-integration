import AboutMeena from "@/components/Pages/AboutMeena/Index";
import Careers from "@/components/Pages/Careers/Index";
import HelpAndSupport from "@/components/Pages/HelpAndSupport/Index";
import Locations from "@/components/Pages/Locations/Index";
import Services from "@/components/Pages/Services/Index";
import TermsAndConditions from "@/components/Pages/TermsAndConditions/Index";
import PrivacyPolicy from "@/components/Pages/PrivacyPolicy/Index";
import usePageId from "@/hooks/usePageId";
import getData from "@/lib/data-hooks/getData";

export default async function Page({ params }) {
  const { slug } = params;
  const id = await usePageId(slug);
  const data = await getData(id);
  switch (id) {
    case "300942ec-7d92-4f42-b8b2-15250cbf1c04":
      return (
        <>
          <Services data={data?.entry} />
        </>
      );
    case "b797d4f3-9da1-48c2-9b37-89250fd85a84":
      return (
        <>
          <Locations data={data?.entry} />
        </>
      );
    case "ab9bc9b1-cd72-42b7-b086-14ea9e1489ff":
      return (
        <>
          <HelpAndSupport data={data?.entry} />
        </>
      );
    case "464bc255-fcaa-40f3-a9b3-6dff74e5436b":
      return (
        <>
          <AboutMeena data={data?.entry} />
        </>
      );
    case "2f433ac6-6b0b-4a65-bcb8-2f84b7e6b211":
      return (
        <>
          <Careers data={data?.entry} />
        </>
      );
    case "7e1edd52-c907-43c4-8076-36dada4fc25c":
      return (
        <>
          <TermsAndConditions data={data?.entry} />
        </>
      );
    case "cd61ee96-9117-4b4e-9663-40764ac4ee6f":
      return (
        <>
          <PrivacyPolicy data={data?.entry} />
        </>
      );

    default:
      return <h1>Page Not Found {id}</h1>;
  }
}
