'use client'
import Link from 'next/link';
import {usePathname} from 'next/navigation'
const LangSwitcher = ({arabic}) => {
    const pathname = usePathname();
    console.log(pathname)
    let newPath =pathname.includes('/ar') ? pathname.replace('/ar',""): "/ar" +pathname
    
  return (
      <Link href={ newPath || "/" }>{arabic ? "En" : "Ar"}</Link> 
  )
}

export default LangSwitcher
