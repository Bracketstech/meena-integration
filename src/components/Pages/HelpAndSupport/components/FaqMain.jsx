"use client";
import React, { useEffect, useState } from "react";
import FaqCategories from "./FaqCategories";
import Faqs from "./Faqs";
import QuestionsSvgs from "./QuestionsSvgs";

const Faq = ({ arabic, questionsCategories, questionsData }) => {
  // const [data, setData] = useState(faqData1);
  const [currentCategory, setCurrentCategory] = useState("");
  const [questions, setQuestions] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);

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
    setOpenIndex(0);
  };

  useEffect(() => {
    let newCategory = questionsCategories?.data[0].slug;
    updateData(newCategory);
  }, []);

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
        <Faqs
          setOpenIndex={setOpenIndex}
          openIndex={openIndex}
          // questions={questions}
          arabic={arabic}
        />
      </div>
    </div>
  );
};

export default Faq;
