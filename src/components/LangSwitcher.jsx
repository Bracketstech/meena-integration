'use client'
import Link from 'next/link';
import {usePathname, useSearchParams} from 'next/navigation'
const LangSwitcher = ({arabic}) => {
    const pathname = usePathname();
    console.log(pathname)
    let newPath =pathname.includes('/ar') ? pathname.replace('/ar',""): "/ar" +pathname
    const searchParams = useSearchParams()
    const page = searchParams.get('page')
    newPath = page ? newPath + "?page="+page :newPath
  return (
      <Link href={ newPath || "/" }>{arabic ? "En" : "Ar"}</Link> 
      
  )
}

export default LangSwitcher
