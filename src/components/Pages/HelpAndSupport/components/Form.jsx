import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Form = ({ arabic, title, formContent }) => {
  const [state, setState] = useState({});
  const [isVerified, setIsVerified] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const captchaRef = useRef(null);

  const initiateFormValues = () => {
    let newStates = {};
    formContent.fields.forEach((field) => {
      newStates[field.handle] = "";
    });
    setState({ ...newStates });
  };
  useEffect(() => {
    initiateFormValues();
  }, []);
  const honeyPot = formContent?.honeypot;
  const hanldeChange = (event) => {
    setState({ ...state, [event.target.id]: event.target.value });
  };

  const emailIsValid = (value) => {
    // Basic email validation using a regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  };
  function getOffsetTop(element) {
    let offsetTop = 0;
    while (element) {
      offsetTop += element.offsetTop;
      element = element.offsetParent;
    }
    return offsetTop;
  }

  const handleRecaptchaChange = (token) => {
    // This callback will be called when the user verifies the CAPTCHA
    setIsVerified(true);
  };
  const resetForm = () => {
    initiateFormValues();
    setIsVerified(false);
    captchaRef.current.reset();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let isNoError = false;
    let firstErrorElement = null;
    document
      .querySelectorAll(["form input", "form textarea"])
      .forEach((item) => {
        if (item.id !== honeyPot) {
          if (!item.value) {
            if (!isNoError) {
              firstErrorElement = item;
            }
            item.parentElement.parentElement.classList.add("error");
            isNoError = true;
            setTimeout(() => {
              item.parentElement.parentElement.classList.remove("error");
            }, 8000);
          }
          if (item.type == "email" && !emailIsValid(item.value)) {
            item.parentElement.parentElement.classList.add("emailError");
            isNoError = true;
            setTimeout(() => {
              item.parentElement.parentElement.classList.remove("emailError");
            }, 8000);
          }
        }
      });

    if (!isNoError) {
      if (isVerified) {
        axios
          .post(
            `https://meenacms.brackets-tech.com/!/forms/contact_us_form`,
            {
              ...state,
            },
            {
              headers: {
                "X-Requested-With": "XMLHttpRequest",
              },
            }
          )
          .then((res) => {
            if (res.data.success) {
              resetForm();
              setIsSuccess(true);
              setTimeout(() => {
                setIsSuccess(false);
              }, 12000);
            }
          });
      }
    }
    if (firstErrorElement) {
      let vw = window.innerWidth;
      const headerHeight =
        vw > 1024 ? (vw / 100) * 6 : vw > 640 ? (vw / 100) * 8.0125 : 55;
      let offsetTop = getOffsetTop(firstErrorElement) - headerHeight;
      console.log(offsetTop);
      // window.scrollTo(0, offsetTop);
      window.scrollTo(0, offsetTop);
    }
  };
  return (
    <div className="lg:w-[39.2708333333vw]">
      <h4
        className={`PingAR-Medium lg:text-[1.14583333333vw] text-[4.87179487179vw] text-[#3B3659] text-center ${
          arabic ? "lg:text-right" : "lg:text-left"
        }`}
      >
        {title}
      </h4>
      <form action="" onSubmit={handleSubmit}>
        <div className="lg:pt-[0.78125vw] pt-[4.10256410256vw] flex flex-col lg:gap-y-[0.83333333333vw] gap-y-[3.07692307692vw]">
          {formContent?.fields?.map((field) => {
            let splitted = field.display.split("/");
            let placeholder = arabic ? splitted[1] : splitted[0];
            if (field.type == "textarea") {
              return (
                <div
                  key={field.display}
                  className="flex flex-col lg:gap-y-[0.625vw] gap-y-[1.53846153846vw]"
                >
                  <div className="sm:h-[23.1707317073vw] lg:h-[11.9791666667vw] h-[43.3333333333vw] bg-[#F0F0F0] lg:rounded-[0.52083333333vw] rounded-[1.53846153846vw] lg:px-[1.25vw] px-[4.10256410256vw] lg:pt-[0.98958333333vw] pt-[3.84615384615vw]">
                    <textarea
                      placeholder={placeholder}
                      value={state[field.handle]}
                      id={field.handle}
                      onChange={hanldeChange}
                      name=""
                      className="resize-none PingAR-Regular w-full PingAR-Light outline-none bg-transparent h-full sm:text-[1.9512195122vw] lg:text-[0.9375vw] text-[3.58974358974vw] text-[#3B3659]"
                      defaultValue={""}
                    />
                  </div>
                  <span className="sm:text-[1.70731707317vw] sm:leading-[1] hidden lg:text-[0.83333333333vw] text-[3.07692307692vw] text-[red]">
                    {arabic ? "هذه الخانة مطلوبه" : "This field is Required"}
                  </span>
                </div>
              );
            } else {
              return (
                <div
                  key={field.display}
                  className={`flex flex-col lg:gap-y-[0.625vw] gap-y-[1.53846153846vw] ${
                    field.handle == honeyPot &&
                    "absolute opacity-0 pointer-events-none "
                  }`}
                >
                  <div className="sm:h-[7.31707317073vw] lg:h-[3.22916666667vw] h-[13.3333333333vw] bg-[#F0F0F0] lg:rounded-[0.52083333333vw] rounded-[1.53846153846vw] lg:px-[1.25vw] px-[4.10256410256vw]">
                    <input
                      type={
                        field.config.input_type == "email"
                          ? "text"
                          : field.config.input_type == "tel"
                          ? "number"
                          : field.config.input_type
                      }
                      id={field.handle}
                      onChange={hanldeChange}
                      value={state[field.handle]}
                      placeholder={placeholder}
                      className="w-full PingAR-Light outline-none bg-transparent h-full sm:text-[1.9512195122vw] lg:text-[0.9375vw] text-[3.58974358974vw] text-[#3B3659]"
                    />
                  </div>
                  <span className="sm:text-[1.70731707317vw] sm:leading-[1] hidden lg:text-[0.83333333333vw] text-[3.07692307692vw] text-[red]">
                    {arabic ? "هذه الخانة مطلوبه" : "This field is required"}
                  </span>
                  <p className="sm:text-[1.70731707317vw] sm:leading-[1] hidden lg:text-[0.83333333333vw] text-[3.07692307692vw] text-[red]">
                    {arabic
                      ? "البريد الإلكتروني غير صالح!"
                      : "Email is not Valid!"}
                  </p>
                </div>
              );
            }
          })}
        </div>
        <div className="mt-[10px] sm:mt-[1vw] ">
          <ReCAPTCHA
            ref={captchaRef}
            sitekey="6Le7MFgnAAAAAMjfxdVsrOkEhIB1-R7ugcl4ept6"
            // sitekey="6Les-1QnAAAAAGg82FEaIT2MjE4Di0_oi_McPYd9"
            onChange={handleRecaptchaChange}
          />
        </div>
        {isSuccess && (
          <div className="mt-[10px] sm:mt-[1vw] ">
            <span className="sm:text-[2vw] sm:leading-[1]  lg:text-[1.2vw] text-[4.4vw] text-[green]">
              {arabic
                ? "شكرًا لتركك لنا رسالة ، وسنعاود الاتصال بك قريبًا!"
                : "Thanks for leaving us a message, we will get back to you soon!"}
            </span>
          </div>
        )}

        <button className="sm:mt-[3.05853658537vw] sm:h-[7.31707317073vw] lg:w-[8.22916666667vw] lg:h-[3.22916666667vw] bg-[#8450FF] lg:-[5.20833333333vw] rounded-[7.94871794872vw] h-[9.23076923077vw] w-full lg:mt-[1.26666666667vw] mt-[5.15384615385vw]">
          <span className="sm:text-[1.9512195122vw] lg:text-[0.9375vw] text-[3.07692307692vw] text-[#FFFFFF] PingAR-Regular">
            {arabic ? "ارسل" : "Submit"}
          </span>
        </button>
      </form>
    </div>
  );
};

export default Form;
