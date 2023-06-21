'use client'
import {useSearchParams} from 'next/navigation'
import Link from "next/link"  
const LangButton = () => {
    const router = useSearchParams()
    console.log(router)
  return (
  
       <Link href={'ar'}><strong>Ar</strong></Link>
    
  )
}

export default LangButton
