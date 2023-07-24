import React from "react";

const Articles = ({ arabic, content }) => {
  return (
    <div className="sm:pt-[7.31707317073vw] sm:pb-[14.6341463415vw] lg:mt-[-10.4166666667vw] mt-[-9.23076923077vw] lg:pt-[5.46875vw] pt-[8.20512820513vw] bg-[#FFFFFF] lg:w-[62.5vw] w-[88.7179487179vw] mx-[auto] relative z-[1] lg:pb-[10.4166666667vw] pb-[20.5128205128vw] lg:rounded-[1.04166666667vw] rounded-[3.84615384615vw]">
      <div className="bg-[#FFFFFF]">
        <div className="lg:w-[55.8333333333vw] mx-[auto] w-[80.5128205128vw]">
          <div
            className="newsContent"
            dangerouslySetInnerHTML={{ __html: content }}
          >
            {/* <div>
              <h3 className="sm:text-[3.65853658537vw] sm:leading-[5.48780487805vw] lg:text-[2.29166666667vw] text-[4.87179487179vw] lg:leading-[3.09027777778vw] leading-[7.52136752136vw] text-[#3B3659] PingAR-Medium line_clamp3">
                {arabic
                  ? "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سي دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور"
                  : " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam  nonumy eirmod tempor invidunt ut labore et"}
              </h3>
              <p className="sm:mt-[1.46341463415vw] sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] text-[#505050] PingAR-Regular lg:text-[0.9375vw] text-[3.58974358974vw] lg:mt-[1.25vw] mt-[4.10256410256vw] lg:w-[57.5vw] lg:leading-[1.46875vw] leading-[6.15384615385vw]">
                {arabic
                  ? "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور"
                  : " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"}
              </p>
            </div>
            <div className="sm:gap-y-[3.41463414634vw] sm:mt-[3.41463414634vw] lg:mt-[1.66666666667vw] mt-[6.15384615385vw] flex flex-col lg:gap-y-[1.66666666667vw] gap-y-[6.15384615385vw]">
              <div>
                <h5 className="lg:text-[1.35416666667vw] lg:leading-[2.1875vw] text-[#3B3659] text-[4.10256410256vw] leading-[6.66666666667vw]">
                  {arabic
                    ? "لوريم ايبسوم دولار سيت أميت ,كونسيكتيت,سيت دو أيوسمود تيمبور"
                    : "Lorem ipsum dolor sit amet, consetetur sadipscing"}
                </h5>
                <p className="sm:mt-[1.46341463415vw] sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] text-[#505050] PingAR-Regular lg:text-[0.9375vw] text-[3.58974358974vw] lg:mt-[1.25vw] mt-[4.10256410256vw] lg:w-[57.5vw] lg:leading-[1.46875vw] leading-[6.15384615385vw]">
                  {arabic
                    ? "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور"
                    : " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"}
                </p>
              </div>
              <div>
                <h5 className="lg:text-[1.35416666667vw] lg:leading-[2.1875vw] text-[#3B3659] text-[4.10256410256vw] leading-[6.66666666667vw]">
                  {arabic
                    ? "لوريم ايبسوم دولار سيت أميت ,كونسيكتيت,سيت دو أيوسمود تيمبور"
                    : "Lorem ipsum dolor sit amet, consetetur sadipscing"}
                </h5>
                <ul className="sm:mt-[1.46341463415vw] sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] text-[#505050] PingAR-Regular lg:text-[0.9375vw] text-[3.58974358974vw] lg:mt-[1.25vw] mt-[4.10256410256vw] lg:w-[57.5vw] lg:leading-[1.46875vw] leading-[6.15384615385vw]">
                  <li>
                    •{" "}
                    {arabic
                      ? "لوريم ايبسوم دولار سيت أميت ,كونسيكتيت,سيت دو أيوسمود تيمبور"
                      : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"}
                  </li>
                  <li>
                    •{" "}
                    {arabic
                      ? "لوريم ايبسوم دولار سيت أميت ,كونسيكتيت,سيت دو أيوسمود تيمبور لوريم ايبسوم دولار سيت أميت ,كونسيكتيت,سيت دو أيوسمود تيمبور"
                      : "invidunt ut labore et dolore magna aliquyam erat, sed diam  voluptua. At vero"}
                  </li>
                  <li>
                    •{" "}
                    {arabic
                      ? "لوريم ايبسوم دولار سيت أميت ,كونسيكتيت,سيت دو أيوسمود تيمبور لوريم ايبسوم دولار سيت أميت ,كونسيكتيت,سيت دو أيوسمود تيمبور"
                      : "invidunt ut labore et dolore magna aliquyam erat, sed diam  voluptua. At vero"}
                  </li>
                  <li>
                    •{" "}
                    {arabic
                      ? "لوريم ايبسوم دولار سيت أميت ,كونسيكتيت,سيت دو أيوسمود تيمبور"
                      : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"}
                  </li>
                  <li>
                    •{" "}
                    {arabic
                      ? "لوريم ايبسوم دولار سيت أميت ,كونسيكتيت,سيت دو أيوسمود تيمبور"
                      : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"}
                  </li>
                  <li>
                    •{" "}
                    {arabic
                      ? "لوريم ايبسوم دولار سيت أميت ,كونسيكتيت,سيت دو أيوسمود تيمبور لوريم ايبسوم دولار سيت أميت ,كونسيكتيت,سيت دو أيوسمود تيمبور"
                      : "invidunt ut labore et dolore magna aliquyam erat, sed diam  voluptua. At vero"}
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="lg:text-[1.35416666667vw] lg:leading-[2.1875vw] text-[#3B3659] text-[4.10256410256vw] leading-[6.66666666667vw]">
                  {arabic
                    ? "لوريم ايبسوم دولار سيت أميت ,كونسيكتيت,سيت دو أيوسمود تيمبور"
                    : "Lorem ipsum dolor sit amet, consetetur sadipscing"}
                </h5>
                <p className="sm:mt-[1.46341463415vw] sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] text-[#505050] PingAR-Regular lg:text-[0.9375vw] text-[3.58974358974vw] lg:mt-[1.25vw] mt-[4.10256410256vw] lg:w-[57.5vw] lg:leading-[1.46875vw] leading-[6.15384615385vw]">
                  {arabic
                    ? "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دوت دو أيوسمود تيمبور لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور"
                    : " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est  Lorem ipsum "}{" "}
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
