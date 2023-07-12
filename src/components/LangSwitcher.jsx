'use client'
import Link from 'next/link';
import {usePathname, useSearchParams} from 'next/navigation'
import Menu from './Menu';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
const LangSwitcher = ({arabic}) => {
  useEffect(()=>{
    document.querySelector('body').classList.remove('active')
  },[])
    const pathname = usePathname(); 
    let newPath =pathname.includes('/ar') ? pathname.replace('/ar',""): "/ar" +pathname
    const searchParams = useSearchParams()
    const page = searchParams.get('page')
    newPath = page ? newPath + "?page="+page :newPath

    const router = useRouter()
    const handleLang = () => {
      document.getElementById("langToggler").classList.add('active')
      setTimeout(() => {
         router.push(newPath || "/")
      }, 800);
    };
  return (
      // <Link href={ newPath || "/" }>{arabic ? "En" : "Ar"}</Link> 
      <div id='langToggler' className="flex items-end lg:items-center gap-x-[5vw] sm:gap-x-[2vw]  lg:gap-x-[0.625vw]">
              <span
              
                onClick={handleLang}
                className="hidden lg:block enToggler cursor-pointer"
              >
                {arabic? "العربية" :"English"}
              </span>
              <span
              
                onClick={handleLang}
                className="hidden lg:block toggle cursor-pointer"
              >
                <span> </span>
              </span>
              <span
              
                onClick={handleLang}
                className="hidden lg:block arToggler cursor-pointer"
              >
                {!arabic? "العربية" :"English"}
              
              </span>
              <span
              
                onClick={handleLang}
                className={`mob__Ar sm:text-[3.41463414634vw] text-[4.61538461538vw] lg:hidden block arToggler cursor-pointer relative ${arabic? "top-[0.5vw]":"top-[-0.5vw]"}`}
              >
                {arabic? "En" :"ع"}
                
              </span>
              <Menu />
        </div>
      
  )
}

export default LangSwitcher
