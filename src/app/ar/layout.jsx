import getGlobalMetaData from "@/lib/data-hooks/getGlobalMetaData";

export async function generateMetadata({ params, searchParams }, parent) {
  // fetch data
  const data = await getGlobalMetaData("arabic");
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: data.globalSEO.seo_title,
    description: data.globalSEO.seo_description,
    openGraph: {
      images: [data.globalSEO.seo_image?.path, ...previousImages],
    },
  };
}

export default function RootLayout({ children }) {
  return <>{children}</>;
}
