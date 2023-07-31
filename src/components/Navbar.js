import getNavData from "@/lib/data-hooks/getNavData";
import Link from "next/link";
import LangSwitcher from "./LangSwitcher";
import getTopNavData from "@/lib/data-hooks/getTopNavData";
import getBottomNavData from "@/lib/data-hooks/getBottomNavData";
import Menu from "./Menu";

export default async function Nav({ arabic, home, id }) {
  const topData = await getTopNavData();
  const bottomData = await getBottomNavData(arabic);
  const bottomDataAccordingToSite = arabic
    ? bottomData.nav.treeAr
    : bottomData.nav.treeEn;
  const topDataAccordingToSite = arabic
    ? topData.nav.treeAr
    : topData.nav.treeEn;
  return (
    <header
      className={`${
        home ? "home__Page" : "sub__Page"
      } absolute leftRightFixer1 w-full lg:pt-[1.66666666667vw] pt-[8.33333333333vw] z-[10]`}
    >
      <div className="relative z-[10] Container1680 flex items-center lg:items-start justify-between">
        <div>
          <Link href={arabic ? "/ar" : "/"}>
            <img
              // src={`/images/icons/${
              //   arabic ? "Ar-header-whiteLogo" : "header-logo"
              // }.svg`}
              src={bottomData?.headerLogo?.header_logo_light?.path}
              alt="logo"
              className={`whiteLogo ${
                arabic ? "lg:w-[8.95833333333vw]" : "lg:w-[12.7083333333vw]"
              }  w-[31.7948717949vw]`}
            />
          </Link>
          <Link href={arabic ? "/ar" : "/"}>
            <img
              // src={`/images/icons/${
              //   arabic ? "Ar-header-blueLogo" : "header-logo-blue"
              // }.svg`}
              src={bottomData?.headerLogo?.header_logo_dark?.path}
              alt="logo"
              className="blueLogo lg:w-[12.7083333333vw] w-[31.7948717949vw]"
            />
          </Link>
        </div>
        <div className="flex flex-col lg:gap-y-[1.14583333333vw]">
          <div className="flex navTopList items-center justify-end lg:gap-x-[2.91666666667vw]">
            <ul className="hidden links PingAR-Medium lg:text-[0.9375vw] lg:leading-[1.45833333333vw] lg:flex items-center lg:gap-x-[2.08333333333vw]">
              {topDataAccordingToSite.map((item) => (
                <li key={item.page.url}>
                  <Link href={item.page.url}>{item.page.title}</Link>
                  <img
                    src="/images/icons/links-style2.svg"
                    alt="style"
                    className={
                      (id == item.page.id && "active") ||
                      (home && item.page.url == "/" && "active")
                    }
                  />
                </li>
              ))}
            </ul>
            <LangSwitcher arabic={arabic} />
          </div>
          <div className="hidden lg:flex items-center lg:gap-x-[2.08333333333vw]">
            <ul className="links navList PingAR-Medium lg:text-[1.04166666667vw] lg:leading-[1.45833333333vw] flex items-center lg:gap-x-[2.08333333333vw]">
              {bottomDataAccordingToSite.map((item, index) => {
                if (index != bottomDataAccordingToSite.length - 1) {
                  return (
                    <li key={item.page.url}>
                      <Link href={item.page.url}>{item.page.title}</Link>
                      <img
                        src="/images/icons/links-style.svg"
                        alt="style"
                        className={
                          (id == item.page.id && "active") ||
                          (home && item.page.url == "/")
                            ? "active"
                            : home && item.page.url == "/ar" && "active"
                        }
                      />
                    </li>
                  );
                }
              })}
            </ul>
            <Link
              href={
                bottomDataAccordingToSite[bottomDataAccordingToSite.length - 1]
                  .page.url
              }
              className="download__App bg-[#845FFF] text-[#FFFFFF] PingAR-Regular text18 lg:rounded-[1.35416666667vw] lg:w-[9.47916666667vw] lg:py-[0.625vw] flex justify-center items-center hover:bg-[#3B3659] transition-all duration-300"
            >
              <span className="relative top-[0.15vw]">
                {
                  bottomDataAccordingToSite[
                    bottomDataAccordingToSite.length - 1
                  ].page.title
                }
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="block lg:hidden sidebar bg-[#3B3659] bg-opacity-[0.9] w-full h-[100vh] absolute top-0 leftRightFixer1 opacity-0">
        <div className="sm:pt-[37.8048780488vw] theekKar w-[90%] mx-[auto] h-full flex flex-col pt-[54.8717948718vw]">
          <ul className="sm:text-[3.41463414634vw] items-start PingAr-Regular links w-full text-white text-[4.87179487179vw] flex flex-col gap-y-[4.10256410256vw]">
            {bottomDataAccordingToSite.map((item) => {
              if (index != bottomDataAccordingToSite.length - 1) {
                return (
                  <li key={item.page.url}>
                    <Link href={item.page.url}>{item.page.title}</Link>
                    <img
                      src="/images/icons/links-style.svg"
                      alt="style"
                      className={
                        (id == item.page.id && "active") ||
                        (home && item.page.url == "/")
                          ? "active"
                          : home && item.page.url == "/ar" && "active"
                      }
                    />
                  </li>
                );
              }
            })}
            {topDataAccordingToSite.map((item) => (
              <li key={item.page.url}>
                <Link href={item.page.url}>{item.page.title}</Link>
                <img
                  src="/images/icons/links-style.svg"
                  alt="style"
                  className={
                    (id == item.page.id && "active") ||
                    (home && item.page.url == "/")
                      ? "active"
                      : home && item.page.url == "/ar" && "active"
                  }
                />
              </li>
            ))}
          </ul>
          <Link
            href={
              bottomDataAccordingToSite[bottomDataAccordingToSite.length - 1]
                .page.url
            }
            className="sm:mt-[6.82926829268vw] sm:h-[7.31707317073vw] sm:text-[2.43902439024vw] mt-[12.3076923077vw] bg-[#845FFF] text-white text-[3.84615384615vw] rounded-[7.94871794872vw] w-full h-[10.5128205128vw] flex justify-center items-center"
          >
            <span>
              {
                bottomDataAccordingToSite[bottomDataAccordingToSite.length - 1]
                  .page.title
              }{" "}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
