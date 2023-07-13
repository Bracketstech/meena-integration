"use client";
import SubPageHero from "@/components/SubPageHero";
import MapContainer from "./MapContainer";
import useAnimations from "@/hooks/useAnimations";
import useHeader from "@/hooks/useHeader";

const Index = ({ arabic }) => {
  useAnimations();
  useHeader("Locations");

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="flipped hidden lg:block absolute top-[15.3125vw] leftRightFixer2 w-[31.4583333333vw]">
          <svg
            id="arrowAnimation"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[12.05vw] w-[31.82vw]"
            viewBox="0 0 611.04 231.577"
          >
            <g
              id="Group_89960"
              data-name="Group 89960"
              transform="translate(-1313.203 -290.408)"
            >
              <path
                id="Path_101703"
                data-name="Path 101703"
                d="M-5038.082,422.788S-5209.445,251.069-5359.918,214.5s-280.054,62.019-280.054,62.019"
                transform="translate(6958.082 94.955)"
                fill="none"
                stroke="#8450ff"
                strokeLinecap="round"
                strokeWidth={6}
                style={{
                  strokeDasharray: "682.589px",
                  strokeDashoffset: "682.589px",
                  animation: "1s ease 0s 1 normal forwards running line-anime",
                }}
              />
              <path
                id="Path_101704"
                data-name="Path 101704"
                d="M-5608.006,199.983s-27.579,75.273-33.419,78.193,94.415,0,94.415,0"
                transform="translate(6957.901 94.275)"
                fill="none"
                stroke="#8450ff"
                strokeLinecap="round"
                strokeWidth={6}
                style={{
                  strokeDasharray: "180.451px",
                  strokeDashoffset: "180.451px",
                  animation:
                    "0.5s ease-in 0.7s 1 normal forwards running line-anime",
                }}
              />
            </g>
          </svg>
        </div>

        <SubPageHero
          title={arabic ? "مواقع " : "Meena"}
          boldtext={arabic ? "مينا" : "locations"}
          text={
            arabic
              ? "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور نكايديديونتيوت لابوري ات"
              : " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
          }
        />
        <MapContainer arabic={arabic} />
      </section>
    </main>
  );
};

export default Index;
