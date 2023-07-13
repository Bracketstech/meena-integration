"use client";
import React, { useEffect, useState } from "react";
import FaqCategories from "./components/FaqCategories";
import Faqs from "./components/Faqs";

const faqData1 = [
  {
    question: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr?",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    questionAr:
      "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت",
    answerAr:
      "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج",
  },
  {
    question: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr?",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    questionAr:
      "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت",
    answerAr:
      "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج",
  },
  {
    question: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr?",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    questionAr:
      "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت",
    answerAr:
      "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج",
  },
  {
    question: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr?",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    questionAr:
      "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت",
    answerAr:
      "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج",
  },
];
const faqData2 = [
  {
    question: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr? 22",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    questionAr:
      "22 لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت",
    answerAr:
      "22 لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج",
  },
  {
    question: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr? 22",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    questionAr:
      "22 لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت",
    answerAr:
      "22 لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج",
  },
  {
    question: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr? 22",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    questionAr:
      "22 لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت",
    answerAr:
      "22 لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج",
  },
  {
    question: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr? 22",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    questionAr:
      "22 لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت",
    answerAr:
      "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج",
  },
];
const faqData3 = [
  {
    question: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr? 33",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    questionAr:
      "33 لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت",
    answerAr:
      "33 لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج",
  },
  {
    question: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr? 33",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    questionAr:
      "33 لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت",
    answerAr:
      "33 لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج",
  },
  {
    question: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr? 33",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    questionAr:
      "33 لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت",
    answerAr:
      "33 لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج",
  },
  {
    question: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr? 33",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    questionAr:
      "33 لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت",
    answerAr:
      "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج",
  },
];

const categories = [
  { titleAr: "معلومات عامة", titleEn: "General info", data: faqData1 },
  { titleAr: "الوصفات الطبية", titleEn: " Prescriptions", data: faqData2 },
  {
    titleAr: "الفواتير والتأمين",
    titleEn: "Billing and insurance",
    data: faqData3,
  },
  { titleAr: "الطب العام", titleEn: " General medical", data: faqData1 },
  { titleAr: "الصحة النفسية", titleEn: " Mental health", data: faqData2 },
  { titleAr: "معلومات الحساب", titleEn: "Account info", data: faqData3 },
  { titleAr: "طرق المساعدة", titleEn: "Ways we help", data: faqData1 },
];

const Faq = ({ arabic }) => {
  const [data, setData] = useState(faqData1);

  useEffect(() => {
    const faqEl = document.querySelectorAll(".faq");

    faqEl.forEach((faq) => {
      faq.addEventListener("click", () => {
        const selectedFaq = faq;
        const isActive = selectedFaq.classList.contains("active");

        faqEl.forEach((v) => {
          const otherFaq = v;
          if (otherFaq === selectedFaq) {
            otherFaq.classList.toggle("active");
          } else {
            otherFaq.classList.remove("active");
          }
        });
        // if (!isActive) {
        //   setTimeout(() => {
        //     const yOffset =
        //       window.innerWidth > 768
        //         ? -((window.innerWidth / 100) * 4.97135416667)
        //         : -65;
        //     const y =
        //       selectedFaq.getBoundingClientRect().top +
        //       window.pageYOffset +
        //       yOffset;
        //     window.scrollTo({ top: y, behavior: "smooth" });
        //   }, 800);
        // }
      });
    });
  }, []);
  const handleClick = (newData, index) => {
    setData(newData);
    document.querySelectorAll(".question").forEach((q, i) => {
      if (i == index) {
        q.classList.add("active");
      } else q.classList.remove("active");
    });
  };
  return (
    <div className="relative lg:pt-[2.5vw] pt-[6.15384615385vw] lg:pb-[10.41666666666667vw] pb-[20.5128205128vw] sm:pt-[4.87804878049vw] sm:pb-[14.6341463415vw]">
      {/* <img
        src="/images/help-and-support/bgDesign.png"
        alt="bgDesign"
        className="hidden lg:block absolute lg:top-[-0.625vw] leftRightFixer2 w-full h-full"
      /> */}
      <svg
        className="hidden flipped lg:h-[56.209375vw] lg:block absolute lg:top-[-6.925vw] leftRightFixer2 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1965.025 1104.528"
      >
        <path
          id="heartLine"
          data-name="Path 101509"
          d="M953.05,934.915c-30.579,89.189,9.9,703.736-91.877,731.008s-75.868-85.853-6.934-54.765S858.552,1903.49,505,1927.246s-1309.751-219.748-1511.682,106.9"
          transform="translate(1009.435 -932.375)"
          fill="none"
          stroke="#8450ff"
          strokeLinecap="round"
          strokeWidth={4}
        />
      </svg>
      <svg
        className="sm:bottom-[-7.31707317073vw] flipped lg:hidden block absolute bottom-[-2.05128205128vw] leftRightFixer2 w-full h-[56.1538461538vw]"
        xmlns="http://www.w3.org/2000/svg"
        width="392.647"
        height="221.402"
        viewBox="0 0 392.647 221.402"
      >
        <path
          id="Path_101667"
          data-name="Path 101667"
          d="M-616.682,934.916c-6.086,17.749,1.971,140.048-18.284,145.476s-15.1-17.085-1.38-10.9.858,58.176-69.5,62.9-260.65-43.732-300.835,21.274"
          transform="translate(1008.058 -933.645)"
          fill="none"
          stroke="#8450ff"
          strokeLinecap="round"
          strokeWidth={2}
        />
      </svg>
      {/* <img
        src="/images/help-and-support/bgDesign-mob.png"
        alt="bgDesign"
        className="sm:bottom-[-7.31707317073vw] lg:hidden block absolute bottom-[-2.05128205128vw] leftRightFixer2 w-full h-[56.1538461538vw]"
      /> */}
      <div className="relative z-[2] flex justify-center items-start flex-col lg:flex-row lg:gap-x-[7.29166666667vw] sm:gap-y-[4.87804878049vw] gap-y-[4.10256410256vw]">
        <FaqCategories
          handleClick={handleClick}
          categories={categories}
          arabic={arabic}
        />
        <Faqs data={data} arabic={arabic} />
      </div>
    </div>
  );
};

export default Faq;
