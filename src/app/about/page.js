import getAboutData from "@/lib/data-hooks/getAboutData" 



export default async function About() { 
   const data = await getAboutData()
  return (
    <h1>{data.entry.title}</h1>
    )
  }
