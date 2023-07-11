import getBottomNavData from '@/lib/data-hooks/getBottomNavData';
import getTopNavData from '@/lib/data-hooks/getTopNavData';
import Link from 'next/link';
import React from 'react'

const Footer = async ({arabic}) => {
  const topData = await getTopNavData();
  const bottomData = await getBottomNavData();
  const bottomDataAccordingToSite = arabic
    ? bottomData.nav.treeAr
    : bottomData.nav.treeEn;
  const topDataAccordingToSite = arabic
    ? topData.nav.treeAr
    : topData.nav.treeEn;
  return (
    <footer>
    <div className="bg-[#3B3659] relative">
      {/* <img
      src="/images/icons/footerbg-design.png"
      alt="footerbg-design"
      className="hidden lg:block lg:w-[18.6458333333vw] absolute leftRightFixer2 top-0"
    /> */}
      <img
        src="/images/icons/footerbg-design.svg"
        alt="footerbg-design"
        className="hidden lg:block flipped lg:w-[18.1458333333vw] absolute leftRightFixer2 bottom-0"
      />
      <img
        src="/images/icons/footerbg-design-mob.svg"
        alt="footerbg-design"
        className="sm:w-[30.487804878vw] lg:hidden block w-[35.64102564102564vw] absolute leftRightFixer2 bottom-0"
      />
      <div className="sm:py-[7.31707317073vw] relative z-[2] Container1680 lg:pt-[4.16666666667vw] lg:pb-[4.47916666667vw] py-[12.30769230769231vw]">
        <div className="sm:gap-y-[7.31707317073vw] flex lg:gap-x-[9.375vw] flex-wrap gap-y-[12.30769230769231vw] gap-x-[12.30769230769231vw] justify-center lg:justify-normal">
          <div className="lg:w-[22.9166666667vw] text-center lg:text-start">
            <a href="./index">
              <img
                src="/images/icons/footer-logo.svg"
                alt="logo"
                className="lg:w-[15.1041666667vw] sm:w-[26.8292682927vw] w-[48.46153846153846vw] mx-[auto] lg:mx-[unset]"
              />
            </a>
            <p className="sm:mt-[1.9512195122vw] sm:text-[1.82926829268vw] sm:leading-[2.68292682927vw] lg:text-[0.8333333333333333vw] lg:leading-[1.42361111111vw] text-[3.076923076923077vw] leading-[5.38461538462vw] PingAR-Light text-[#FFFFFF] lg:mt-[1.66666666667vw] mt-[4.102564102564103vw]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
          <div className="text-[#E6E7E7]">
            <h5 className="sm:leading-[3.65853658537vw] sm:text-[2.19512195122vw] PingAR-Medium lg:text-[1.14583333333vw] lg:leading-[1.66666666667vw] leading-[6.15384615385vw] text-[3.846153846153846vw] text-center lg:text-start">
              Site map
            </h5>
            <ul className="sm:mt-[1.46341463415vw] sm:gap-y-[1.46341463415vw] sm:text-[1.82926829268vw] sm:leading-[3.0487804878vw] leading-[4.87179487179vw] items-center lg:items-start footerLinks PingAR-Light lg:text-[0.9375vw] lg:leading-[1.45833333333vw] text-[3.076923076923077vw] lg:mt-[0.41666666666vw] flex flex-col lg:gap-y-[0.26041666666vw] gap-y-[2.051282051282051vw] mt-[3.076923076923077vw]">
            {
                                  bottomDataAccordingToSite.map((item) => (
                                    <li key={item.page.title}>
                                    <Link href={item.page.url}>
                                      <span>{item.page.title}</span>
                                    </Link>
                                  </li>  
                                  ))

                }
            </ul>
          </div>
          <div className="text-[#E6E7E7]">
            <h5 className="sm:leading-[3.65853658537vw] sm:text-[2.19512195122vw] PingAR-Medium lg:text-[1.14583333333vw] lg:leading-[1.66666666667vw] leading-[6.15384615385vw] text-[3.846153846153846vw] text-center lg:text-start">
              Other links
            </h5>
            <ul className="sm:mt-[1.46341463415vw] sm:gap-y-[1.46341463415vw] sm:text-[1.82926829268vw] sm:leading-[3.0487804878vw] leading-[4.87179487179vw] items-center lg:items-start footerLinks PingAR-Light lg:text-[0.9375vw] lg:leading-[1.45833333333vw] text-[3.076923076923077vw] lg:mt-[0.41666666666vw] flex flex-col lg:gap-y-[0.26041666666vw] gap-y-[2.051282051282051vw] mt-[3.076923076923077vw]">
                {
                                  topDataAccordingToSite.map((item) => (
                                    <li key={item.page.title}>
                                    <Link href={item.page.url}>
                                      <span>{item.page.title}</span>
                                    </Link>
                                  </li>  
                                  ))

                }
              
              <li>
                <Link href="./terms-and-conditions">
                  <span>Terms &amp; conditions</span>
                </Link>
              </li>
              <li>
                <Link href="./privacy-policy">
                  <span>Privacy policy</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="sm:leading-[3.65853658537vw] sm:text-[2.19512195122vw] PingAR-Medium lg:text-[1.14583333333vw] lg:leading-[1.66666666667vw] leading-[6.15384615385vw] text-[3.846153846153846vw] text-[#E6E7E7] text-center lg:text-start">
              Follow us
            </h5>
            <ul className="sm:mt-[1.46341463415vw] sm:gap-x-[2.43902439024vw] leading-[4.87179487179vw] footerLinks flex items-center lg:gap-x-[1.25vw] lg:mt-[0.41666666666vw] mt-[3.076923076923077vw] gap-x-[4.615384615384615vw]">
              <li>
                <a href="#" target="_blank">
                  <img
                    src="/images/icons/social-links/twitter.svg"
                    alt="twitter"
                    className="sm:w-[3.65853658537vw] lg:w-[1.77083333333vw] w-[6.944444444444444vw]"
                  />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img
                    src="/images/icons/social-links/linkedin.svg"
                    alt="linkedin"
                    className="sm:w-[3.65853658537vw] lg:w-[1.77083333333vw] w-[6.944444444444444vw]"
                  />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img
                    src="/images/icons/social-links/insta.svg"
                    alt="instagram"
                    className="sm:w-[3.65853658537vw] lg:w-[1.77083333333vw] w-[6.944444444444444vw]"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#474166] lg:py-[0.390625vw] py-[3.205128205128205vw]">
      <div className="sm:text-[1.82926829268vw] sm:leading-[2.68292682927vw] PingAR-Light Container1680 flex items-center justify-center lg:justify-between text-[#E6E7E7] lg:text-[0.8333333333333333vw] lg:leading-[1.45833333333vw] text-[2.564102564102564vw]">
        <span>meena. All Rights Reserved @ 2023</span>
        <div>
          <span> Developed By </span>
          <a href="https://brackets-tech.com/" target="_blank">
            Brackets Technology
          </a>
        </div>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer
