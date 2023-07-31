import React, { useState } from "react";

const Faqs = ({ arabic, questions, openIndex, setOpenIndex }) => {
  const handleQuestionClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="lg:w-[52.1875vw] w-[88.7179487179vw] mx-[auto] lg:mx-[unset] flex flex-col lg:gap-y-[1.25vw] gap-y-[4.10256410256vw] sm:gap-y-[3.65853658537vw]">
      {questions.length != 0 ? (
        questions.map((question, index) => (
          <div
            onClick={() => handleQuestionClick(index)}
            key={index}
            className={`faq ${index == openIndex ? "active" : ""}`}
          >
            <div className="faq__Question">
              <h5 className="PingAR-Medium">{question.title}</h5>
              <svg
                className="sm:w-[3.90243902439vw] sm:min-w-[3.90243902439vw] w-[8.20512820513vw] lg:h-[2.1875vw] lg:w-[2.1875vw] lg:min-w-[2.1875vw] min-w-[8.20512820513vw] transition-all duration-300"
                xmlns="http://www.w3.org/2000/svg"
                id="Group_109"
                data-name="Group 109"
                width={42}
                height={42}
                viewBox="0 0 42 42"
              >
                <circle
                  id="Ellipse_1"
                  data-name="Ellipse 1"
                  cx={21}
                  cy={21}
                  r={21}
                  fill="#3b3659"
                  opacity={1}
                />
                <g
                  id="Group_89665"
                  data-name="Group 89665"
                  transform="translate(12 15)"
                >
                  <path
                    id="Path_101469"
                    data-name="Path 101469"
                    d="M6.652,8.993c-.3.335-.669.745-.839.91-1.7,1.641-3.518,3.064-5.265,4.627a1.876,1.876,0,0,0-.287,2.285,1.2,1.2,0,0,0,1.877.35c1.774-1.587,3.612-3.033,5.341-4.7A11.377,11.377,0,0,0,9.155,10.6a3.552,3.552,0,0,0,.58-1.7,2.376,2.376,0,0,0-.443-1.435A16.08,16.08,0,0,0,7.834,5.947,29.126,29.126,0,0,1,3.523.7,1.2,1.2,0,0,0,1.656.292a1.868,1.868,0,0,0-.338,2.273A32.228,32.228,0,0,0,6.051,8.39c.068.075.337.342.6.6Z"
                    transform="matrix(0.087, 0.996, -0.996, 0.087, 17.416, 0)"
                    fill="#fff"
                    fillRule="evenodd"
                  />
                </g>
              </svg>
            </div>
            <div className="faq__Answer">
              <div
                dangerouslySetInnerHTML={{ __html: question.content }}
                className="PingAR-Regular"
              ></div>
            </div>
          </div>
        ))
      ) : (
        <div className={`faq }`}>
          <div className="faq__Question">
            <h5 className="PingAR-Medium">
              There are no questinons for this category.
            </h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default Faqs;
