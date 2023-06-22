import Pagination from "@/components/Pagination"
import getHomeData from "@/lib/data-hooks/getHomeData"



export default async function Home({searchParams}) { 
   const data = await getHomeData('ar')
  return (
    <>
    <h1>{data.entry.title}</h1>
    <Pagination searchParams={searchParams}/>
    
    </>
    )
  }
