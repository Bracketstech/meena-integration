import AboutMeena from "@/components/Pages/AboutMeena/Index";
import Careers from "@/components/Pages/Careers/Index";
import HelpAndSupport from "@/components/Pages/HelpAndSupport/Index";
import Locations from "@/components/Pages/Locations/Index";
import Services from "@/components/Pages/Services/Index";
import TermsAndConditions from "@/components/Pages/TermsAndConditions/Index";
import PrivacyPolicy from "@/components/Pages/PrivacyPolicy/Index";
import usePageId from "@/hooks/usePageId";
import getData from "@/lib/data-hooks/getData";
import getServicesData from "@/lib/data-hooks/getServicesData";
import getLocationData from "@/lib/data-hooks/getLocationData";
import getHelpAndSupportData from "@/lib/data-hooks/getHelpAndSupportData";
import getAboutData from "@/lib/data-hooks/getAboutData";
import getCareerData from "@/lib/data-hooks/getCareerData";
import getTermsData from "@/lib/data-hooks/getTermsData";
import getPrivacyData from "@/lib/data-hooks/getPrivacyData";
import getFABData from "@/lib/data-hooks/getFABData";

export const revalidate = 5;

export default async function Page({ params }) {
  const { slug } = params;
  const id = await usePageId(slug);
  const fabData = await getFABData();

  switch (id) {
    case "300942ec-7d92-4f42-b8b2-15250cbf1c04":
      const servicesData = await getServicesData(id);
      return (
        <>
          <Services data={servicesData?.entry} fabData={fabData} />
        </>
      );
    case "b797d4f3-9da1-48c2-9b37-89250fd85a84":
      const locationsData = await getLocationData(id);

      return (
        <>
          <Locations data={locationsData?.branches?.data} />
        </>
      );
    case "ab9bc9b1-cd72-42b7-b086-14ea9e1489ff":
      const helpAndSupportData = await getHelpAndSupportData(id);

      return (
        <>
          <HelpAndSupport data={helpAndSupportData} />
        </>
      );
    case "464bc255-fcaa-40f3-a9b3-6dff74e5436b":
      const aboutData = await getAboutData(id);
      return (
        <>
          <AboutMeena data={aboutData?.entry} />
        </>
      );
    case "2f433ac6-6b0b-4a65-bcb8-2f84b7e6b211":
      const careersData = await getCareerData(id);

      return (
        <>
          <Careers data={careersData?.entry} />
        </>
      );
    case "7e1edd52-c907-43c4-8076-36dada4fc25c":
      const termsData = await getTermsData(id);

      return (
        <>
          <TermsAndConditions data={termsData?.entry} />
        </>
      );
    case "cd61ee96-9117-4b4e-9663-40764ac4ee6f":
      const privacyData = await getPrivacyData(id);
      return (
        <>
          <PrivacyPolicy data={privacyData?.entry} />
        </>
      );

    default:
      return <h1>Page Not Found {id}</h1>;
  }
}
