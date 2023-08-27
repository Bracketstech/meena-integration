import React from "react";
import AboutMeena from "./AboutMeena";
import NutShell from "./NutShell";

const Info = ({
  arabic,
  companyValues,
  aboutTitle,
  aboutImg,
  aboutData,
  nutShellTitle,
  nutShellFeatures,
  cta,
}) => {
  return (
    <section>
      <div>
        <AboutMeena
          arabic={arabic}
          companyValues={companyValues}
          title={aboutTitle}
          img={aboutImg}
          data={aboutData}
        />

        <NutShell
          arabic={arabic}
          title={nutShellTitle}
          features={nutShellFeatures}
          cta={cta}
        />
      </div>
    </section>
  );
};

export default Info;
