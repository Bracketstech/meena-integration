import getNavData from "@/lib/data-hooks/getNavData";
import Link from "next/link";
import LangSwitcher from "./LangSwitcher";
import getTopNavData from "@/lib/data-hooks/getTopNavData";
import getBottomNavData from "@/lib/data-hooks/getBottomNavData";

export default async function Nav({ arabic, home }) {
  const data = await getNavData(arabic);
  const topData = await getTopNavData();
  const bottomData = await getBottomNavData();

  return (
    //     <nav className='flex  justify-between   flex-wrap  p-2 px-4' >
    //       <div className='flex flex-row-reverse gap-x-3'>
    //         {data.nav.tree.map(({page})=> <Link key={page.url} href={page.url}><strong>{page.title}</strong></Link>  )}
    //       </div>
    //       <div className='flex flex-row-reverse gap-x-3'>
    //       <LangSwitcher arabic={arabic}/>
    // </div>
    //     </nav>
    <header
      className={`${
        home ? "home__Page" : "sub__Page"
      } absolute leftRightFixer1 w-full lg:pt-[1.66666666667vw] pt-[8.33333333333vw] z-[3]"`}
    >
      <div className="relative z-[3] Container1680 flex items-center lg:items-start justify-between">
        <div>
          <a href="./index.html">
            <img
              src="/images/icons/header-logo.svg"
              alt="logo"
              className="whiteLogo lg:w-[12.7083333333vw] w-[31.7948717949vw]"
            />
          </a>
          <a href="./index.html">
            <img
              src="/images/icons/header-logo-blue.svg"
              alt="logo"
              className="blueLogo lg:w-[12.7083333333vw] w-[31.7948717949vw]"
            />
          </a>
        </div>
        <div className="flex flex-col lg:gap-y-[1.14583333333vw]">
          <div className="flex navTopList items-center justify-end lg:gap-x-[2.91666666667vw]">
            <ul className="hidden links PingAR-Regular lg:text-[0.9375vw] lg:leading-[1.45833333333vw] lg:flex items-center lg:gap-x-[2.08333333333vw]">
              {topData.nav.treeEn.map((item) => (
                <li key={item.page.url}>
                  <Link href={item.page.url}>{item.page.title}</Link>
                  <img src="/images/icons/links-style2.svg" alt="style" />
                </li>
              ))}
            </ul>
            <div className="flex items-end lg:items-center gap-x-[5vw] lg:gap-x-[0.625vw]">
              <span
                // onclick="handleLang(this)"
                className="hidden lg:block enToggler cursor-pointer"
              >
                English
              </span>
              <div
                // onclick="handleLang(this)"
                className="hidden lg:block toggle cursor-pointer"
              >
                <span> </span>
              </div>
              <span
                // onclick="handleLang(this)"
                className="hidden lg:block arToggler cursor-pointer"
              >
                العربية
              </span>
              <span
                // onclick="handleLang(this)"
                className="mob__Ar sm:text-[3.41463414634vw] text-[4.61538461538vw] lg:hidden block arToggler cursor-pointer"
              >
                ع
              </span>
              <div className="menu lg:hidden block w-[6.15384615385vw] sm:w-[4.26829268293vw]">
                <span className="line-1 h-[0.51282051282vw]" />
                <span className="line-2 h-[0.51282051282vw]" />
                <span className="line-3 h-[0.51282051282vw]" />
              </div>
            </div>
          </div>
          <div className="hidden lg:flex items-center lg:gap-x-[2.08333333333vw]">
            <ul className="links navList PingAR-Regular lg:text-[1.04166666667vw] lg:leading-[1.45833333333vw] flex items-center lg:gap-x-[2.08333333333vw]">
              {bottomData.nav.treeEn.map((item) => (
                <li key={item.page.url}>
                  <Link href={item.page.url}>{item.page.title}</Link>
                  <img
                    src="/images/icons/links-style.svg"
                    alt="style"
                    //  className="active"
                  />
                </li>
              ))}
            </ul>
            <Link
              href="./about-app.html"
              className="download__App bg-[#845FFF] text-[#FFFFFF] PingAR-Light text18 lg:rounded-[1.35416666667vw] lg:w-[9.47916666667vw] lg:py-[0.625vw] flex justify-center items-center hover:bg-[#3B3659] transition-all duration-300"
            >
              <span className="relative top-[0.15vw]"> Download app </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="block lg:hidden sidebar bg-[#3B3659] bg-opacity-[0.9] w-full h-[100vh] absolute top-0 leftRightFixer1 opacity-0">
        <div className="sm:pt-[37.8048780488vw] w-[90%] mx-[auto] h-full flex flex-col pt-[54.8717948718vw]">
          <ul className="sm:text-[3.41463414634vw] PingAr-Regular links w-full text-white text-[4.87179487179vw] flex flex-col gap-y-[4.10256410256vw]">
            {bottomData.nav.treeEn.map((item) => (
              <li key={item.page.url}>
                <Link href={item.page.url}>{item.page.title}</Link>
                <img
                  src="/images/icons/links-style.svg"
                  alt="style"
                  //  className="active"
                />
              </li>
            ))}
            {topData.nav.treeEn.map((item) => (
              <li key={item.page.url}>
                <Link href={item.page.url}>{item.page.title}</Link>
                <img
                  src="/images/icons/links-style.svg"
                  alt="style"
                  //  className="active"
                />
              </li>
            ))}
          </ul>
          <a
            href="./about-app.html"
            className="sm:mt-[6.82926829268vw] sm:h-[7.31707317073vw] sm:text-[2.43902439024vw] mt-[12.3076923077vw] bg-[#845FFF] text-white text-[3.84615384615vw] rounded-[7.94871794872vw] w-full h-[10.5128205128vw] flex justify-center items-center"
          >
            <span> Download app </span>
          </a>
        </div>
      </div>
    </header>
  );
}
