import Pagination from "@/components/Pagination"
import getHomeData from "@/lib/data-hooks/getHomeData"



export default async function Home() { 
   const data = await getHomeData()
  return (
    <>
    <h1>{data.entry.title}</h1>

      <Pagination/>
    </>
    )
  }
