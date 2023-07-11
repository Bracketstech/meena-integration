'use client'
import Link from 'next/link';
import {usePathname, useSearchParams} from 'next/navigation'
import Menu from './Menu';
const LangSwitcher = ({arabic}) => {
    const pathname = usePathname();
    console.log(pathname)
    let newPath =pathname.includes('/ar') ? pathname.replace('/ar',""): "/ar" +pathname
    const searchParams = useSearchParams()
    const page = searchParams.get('page')
    newPath = page ? newPath + "?page="+page :newPath
  return (
      // <Link href={ newPath || "/" }>{arabic ? "En" : "Ar"}</Link> 
      <div className="flex items-end lg:items-center gap-x-[5vw] lg:gap-x-[0.625vw]">
              <Link
              href={ newPath || "/" }
                // onclick="handleLang(this)"
                className="hidden lg:block enToggler cursor-pointer"
              >
                {arabic? "العربية" :"English"}
              </Link>
              <Link
              href={ newPath || "/" }
                // onclick="handleLang(this)"
                className="hidden lg:block toggle cursor-pointer"
              >
                <span> </span>
              </Link>
              <Link
              href={ newPath || "/" }
                // onclick="handleLang(this)"
                className="hidden lg:block arToggler cursor-pointer"
              >
                {!arabic? "العربية" :"English"}
              
              </Link>
              <Link
              href={ newPath || "/" }
                // onclick="handleLang(this)"
                className="mob__Ar sm:text-[3.41463414634vw] text-[4.61538461538vw] lg:hidden block arToggler cursor-pointer"
              >
                {arabic? "ع" :"En"}
                
              </Link>
              <Menu />
        </div>
      
  )
}

export default LangSwitcher
