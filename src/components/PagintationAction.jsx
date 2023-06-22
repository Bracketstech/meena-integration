'use client'

import Link from "next/link" 
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

const PagintationAction = ({pageNo,limt,numberOfPages}) => { 
    const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
 
  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )


  return (
    <div className="flex gap-x-3 my-3">
        <Link  className={`${+pageNo ===1 && 'opacity-[0.5]'}`} href={`?page=${ +pageNo ===1 ? 1 :  +pageNo - 1}`}>Prev Page</Link>
        <span ><strong>{pageNo}</strong></span>
        <Link
        // href={pathname + '?' + createQueryString('page', +pageNo + 1)}
        href={`?page=${+pageNo === numberOfPages? numberOfPages : +pageNo + 1}`}
        className={`${+pageNo === numberOfPages && 'opacity-[0.5]'}`}
         >Next Page</Link>
    </div>
  )
}

export default PagintationAction
