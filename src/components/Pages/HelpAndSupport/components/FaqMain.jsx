"use client";
import React, { useEffect, useState } from "react";
import FaqCategories from "./FaqCategories";
import Faqs from "./Faqs";
import QuestionsSvgs from "./QuestionsSvgs";

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
    question: "FAQ DATA 2 Example Dummy Dataa",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    questionAr:
      "22 لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت",
    answerAr:
      "22 لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج",
  },
  {
    question: "FAQ DATA 2 Example Dummy Dataa",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    questionAr:
      "22 لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت",
    answerAr:
      "22 لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج",
  },
  {
    question: "FAQ DATA 2 Example Dummy Dataa",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    questionAr:
      "22 لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت",
    answerAr:
      "22 لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج",
  },
  {
    question: "FAQ DATA 2 Example Dummy Dataa",
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
    question: " FAQ DATA 3 Example Dummy Dataa",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    questionAr:
      "33 لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت",
    answerAr:
      "33 لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج",
  },
  {
    question: " FAQ DATA 3 Example Dummy Dataa",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    questionAr:
      "33 لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت",
    answerAr:
      "33 لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج",
  },
  {
    question: " FAQ DATA 3 Example Dummy Dataa",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    questionAr:
      "33 لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت",
    answerAr:
      "33 لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج",
  },
  {
    question: " FAQ DATA 3 Example Dummy Dataa",
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

const Faq = ({ arabic, questionsCategories, questionsData }) => {
  const [data, setData] = useState(faqData1);
  const [currentCategory, setCurrentCategory] = useState("");
  const [questions, setQuestions] = useState([]);

  const updateQuestions = (newCategory) => {
    let newQuestions = [];
    questionsData?.data.forEach((question) => {
      let questionToBeAdded = false;
      question.faq_categories.forEach(({ slug }) => {
        if (slug == newCategory) {
          questionToBeAdded = true;
        }
      });
      if (questionToBeAdded) {
        newQuestions.push(question);
      }
    });
    setQuestions(newQuestions);
  };

  const handleCategoryActive = (index) => {
    document.querySelectorAll(".question").forEach((q, i) => {
      if (i == index) {
        q.classList.add("active");
      } else q.classList.remove("active");
    });
  };
  const handleQuestionActive = (index) => {
    const faqEl = document.querySelectorAll(".faq");
    faqEl.forEach((faq, index) => {
      if (index == 0) {
        faq.classList.add("active");
      } else {
        faq.classList.remove("active");
      }
    });
  };
  const updateData = (newCategory, index) => {
    setCurrentCategory(newCategory);
    updateQuestions(newCategory);
    handleCategoryActive(index ? index : 0);
    handleQuestionActive(index ? index : 0);
  };

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
  }, [questions]);
  useEffect(() => {
    let newCategory = questionsCategories?.data[0].slug;
    updateData(newCategory);
  }, []);
  // const handleClick = (newData, index) => {
  //   const faqEl = document.querySelectorAll(".faq");
  //   faqEl.forEach((faq, index) => {
  //     if (index == 0) {
  //       faq.classList.add("active");
  //     } else {
  //       faq.classList.remove("active");
  //     }
  //   });
  //   setData(newData);
  //   document.querySelectorAll(".question").forEach((q, i) => {
  //     if (i == index) {
  //       q.classList.add("active");
  //     } else q.classList.remove("active");
  //   });
  // };
  return (
    <div className="relative lg:pt-[2.5vw] pt-[6.15384615385vw] lg:pb-[10.41666666666667vw] pb-[20.5128205128vw] sm:pt-[4.87804878049vw] sm:pb-[14.6341463415vw]">
      <QuestionsSvgs />
      <div className="relative z-[2] flex justify-center items-start flex-col lg:flex-row lg:gap-x-[7.29166666667vw] sm:gap-y-[4.87804878049vw] gap-y-[4.10256410256vw]">
        <FaqCategories
          handleClick={updateData}
          // categories={categories}
          categories={questionsCategories}
          arabic={arabic}
        />
        <Faqs questions={questions} data={data} arabic={arabic} />
      </div>
    </div>
  );
};

export default Faq;
