import ErrorComponent from "@/components/ErrorComponent";
import AboutMeena from "@/components/Pages/AboutMeena/Index";
import Careers from "@/components/Pages/Careers/Index";
import HelpAndSupport from "@/components/Pages/HelpAndSupport/Index";
import Locations from "@/components/Pages/Locations/Index";
import PrivacyPolicy from "@/components/Pages/PrivacyPolicy/Index";
import Services from "@/components/Pages/Services/Index";
import AboutApp from "@/components/Pages/AboutApp/Index";
import TermsAndConditions from "@/components/Pages/TermsAndConditions/Index";
import getPageId from "@/hooks/getPageId";
import getData from "@/lib/data-hooks/getData";
import getFABData from "@/lib/data-hooks/getFABData";

import { revalidateTime } from "@/lib/client";
import getFooterData from "@/lib/data-hooks/getFooterData";
export const revalidate = 300;

export async function generateMetadata({ params, searchParams }, parent) {
  // fetch data
  const { slug } = params;
  const id = await getPageId(slug);
  const data = await getData(id);
  const previousImages = (await parent).openGraph?.images || [];
  const previousTitle = (await parent).title;
  const previousDescription = (await parent).description;

  let newImages;
  if (data?.entry?.seo_image?.path) {
    newImages = [data?.entry?.seo_image?.path, ...previousImages];
  } else {
    newImages = [...previousImages];
  }
  return {
    title: data?.entry?.seo_title ? data?.entry?.seo_title : previousTitle,
    description: data?.entry?.seo_description
      ? data?.entry?.seo_description
      : previousDescription,
    openGraph: {
      images: [...newImages],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = params;
  const id = await getPageId(slug);
  const data = await getData(id);
  const fabData = await getFABData();

  const footerData = await getFooterData();
  const fData = footerData.footerDataEn;

  if (data == "error") {
    return <ErrorComponent error />;
  }

  switch (id) {
    case "300942ec-7d92-4f42-b8b2-15250cbf1c04":
      return (
        <>
          <Services data={data?.entry} fabData={fabData} />
        </>
      );
    case "b797d4f3-9da1-48c2-9b37-89250fd85a84":
      return (
        <>
          <Locations aboveMapData={data?.entry} data={data?.branches?.data} />
        </>
      );
    case "ab9bc9b1-cd72-42b7-b086-14ea9e1489ff":
      return (
        <>
          <HelpAndSupport data={data} bcd={fData.hide_sm_area} />
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
    case "fd59b077-71ee-4fbf-bc35-d627d367ed6b":
      return (
        <>
          <AboutApp data={data?.entry} />
        </>
      );

    default:
      return <ErrorComponent />;
  }
}
