import Nav from "@/components/Navbar";
import "swiper/css";
import "swiper/css/navigation";

import "./globals.css";
import getGlobalMetaData from "@/lib/data-hooks/getGlobalMetaData";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params, searchParams }, parent) {
  // fetch data
  const data = await getGlobalMetaData();
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: {
      default: data?.globalSEO?.seo_title,
      template: `%s   ${data?.globalSEO?.website_general_prefix}`,
    },
    description: data?.globalSEO.seo_description,
    openGraph: {
      images: [data?.globalSEO.seo_image?.path, ...previousImages],
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
