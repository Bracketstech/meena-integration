import getHomeData from "@/lib/data-hooks/getHomeData"



export default async function Home() { 
   const data = await getHomeData('ar')
  return (
    <h1>{data.entry.title}</h1>
    )
  }
