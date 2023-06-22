import About from "@/components/Pages/About"
import Pagination from "@/components/Pagination"
import getData from "@/lib/data-hooks/getData"
import getNavData from "@/lib/data-hooks/getNavData"

export default async function Page({ params,searchParams }) {
    const {slug} =params 
    const navData = await getNavData("arabic")
    const filteredData = navData.nav.tree.filter(({page})=>page.url.replace('/ar/',"") == slug ) 
    const id = filteredData[0]?.page.id
   switch (id) {
            case "b6f20761-83c3-4cff-8090-aac0b7ab9b9d":
                    return <>
                    {id}
                    <About arabic/> 
                    </>
              
        
            default:
                return <h1>Page Not Found {id} <br/> {JSON.stringify(navData)}</h1>
              
        }
   
  }