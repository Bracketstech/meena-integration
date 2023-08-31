"use client";
import Hero from "./components/Hero";
import Info from "./components/Info";
import MeenaLocations from "./components/MeenaLocations";
import BookYourAppointment from "@/components/BookYourAppointment";
import DoctorsSwiper from "./components/DoctorsSwiper";
import PatientsSwiper from "./components/PatientsSwiper";
import useAnimations from "@/hooks/useAnimations";
import useHeader from "@/hooks/useHeader";
import LatestNewsSwiper from "./components/LatestNewsSwiper";

const HomePage = ({ data, arabic, fabData }) => {
  useAnimations();
  useHeader(arabic ? "الرئيسية" : "Home");
  return (
    <main className="overflow-hidden">
      <Hero
        arabic={arabic}
        title={data.hero_title}
        des={data.hero_caption}
        img={data.hero_image.path}
        mobImg={data.hero_image_mobile.path}
        fabData={fabData}
      />
      <Info
        arabic={arabic}
        companyValues={data.company_values}
        aboutTitle={data.aboutMeenaSectionTitle}
        aboutImg={data.aboutMeenaSectionImage.path}
        aboutData={data.aboutMeenaSection}
        nutShellTitle={data.nutshellMidValueSectionTitle}
        nutShellFeatures={data.nutshellMidValueSectionFeatures}
        cta={data?.nutshell_cta_text}
      />
      <section>
        <div>
          {data.doctors_section_hide || (
            <DoctorsSwiper
              doctors={data.doctors}
              title={data.doctorsCarouselTitle}
              arabic={arabic}
            />
          )}
          {data.section_testimonials_hide || (
            <PatientsSwiper
              testimonials={data.testimonials}
              title={data.testimonials_section_title}
              arabic={arabic}
            />
          )}
          {data.meena_clinics_section_hide || (
            <MeenaLocations
              clinics={data.clinics}
              title={data.clinics_section_title}
              des={data.clinics_section_description}
              arabic={arabic}
            />
          )}
        </div>
      </section>
      <section>
        <div>
          {data.hide_section_news || (
            <LatestNewsSwiper
              title={data.news_section_title}
              news={data.news}
              arabic={arabic}
            />
          )}
          <div className="relative">
            <span className="healthCare__Overlay top-0 absolute w-full h-full lg:h-[62.8125vw] bottom-0 leftRightFixer1"></span>
            <div className="sm:py-[14.6341463415vw] py-[20.51282051282051vw] lg:pt-[4.6875vw] lg:pb-[10.4166666667vw]">
              <BookYourAppointment
                data={data.booking_reminder_content}
                arabic={arabic}
                fabData={fabData}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
