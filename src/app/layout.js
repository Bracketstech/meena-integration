import Nav from "@/components/Navbar";
import "swiper/css";
import "swiper/css/navigation";

import "./globals.css";
import getGlobalMetaData from "@/lib/data-hooks/getGlobalMetaData";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const revalidate = 5000;

export async function generateMetadata({ params, searchParams }, parent) {
  // fetch data
  const data = await getGlobalMetaData();
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
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
