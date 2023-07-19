"use client";
import Hero from "./Hero";
import Info from "./Info";
import MeenaLocations from "./MeenaLocations";
import BookYourAppointment from "@/components/BookYourAppointment";
import DoctorsSwiper from "./DoctorsSwiper";
import PatientsSwiper from "./PatientsSwiper";
import LatestNewsSwiper from "./LatestNewsSwiper";
import useAnimations from "@/hooks/useAnimations";
import useHeader from "@/hooks/useHeader";

const HomePage = ({ data, arabic }) => {
  useAnimations();
  useHeader(arabic ? "الرئيسية" : "Home");
  return (
    <main className="overflow-hidden">
      <Hero
        arabic={arabic}
        title={data.hero_title}
        des={data.hero_caption}
        img={data.hero_image[0].path}
      />
      <Info
        arabic={arabic}
        companyValues={data.company_values}
        aboutTitle={data.aboutMeenaSectionTitle}
        aboutImg={data.aboutMeenaSectionImage.path}
        aboutData={data.aboutMeenaSection}
        nutShellTitle={data.nutshellMidValueSectionTitle}
        nutShellFeatures={data.nutshellMidValueSectionFeatures}
      />
      <section>
        <div>
          <DoctorsSwiper
            doctors={data.doctors}
            title={data.doctorsCarouselTitle}
            arabic={arabic}
          />
          <PatientsSwiper
            testimonials={data.testimonials}
            title={data.testimonials_section_title}
            arabic={arabic}
          />
          <MeenaLocations
            clinics={data.clinics}
            title={data.clinics_section_title}
            des={data.clinics_section_description}
            arabic={arabic}
          />
        </div>
      </section>
      <section>
        <div>
          {/* <LatestNewsSwiper title={data.news_section_title} news={data.news} arabic={arabic} /> */}

          <div className="relative">
            <span className="healthCare__Overlay top-0 absolute w-full h-full lg:h-[62.8125vw] bottom-0 leftRightFixer1"></span>
            <div className="sm:py-[14.6341463415vw] py-[20.51282051282051vw] lg:pt-[4.6875vw] lg:pb-[10.4166666667vw]">
              <BookYourAppointment arabic={arabic} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
