import About from "@/components/Pages/About"
import getData from "@/lib/data-hooks/getData"
import getNavData from "@/lib/data-hooks/getNavData"

export default async function Page({ params }) {
    const {slug} =params 
    const navData = await getNavData()
    const filteredData = navData.nav.tree.filter(({page})=>page.url.replace('/',"") == slug ) 
    const id = filteredData[0]?.page.id
   switch (id) {
            case "464bc255-fcaa-40f3-a9b3-6dff74e5436b":
                    return <>
                    {id}
                    <About/>
                    </>
              
        
            default:
                return <h1>Page Not Found {id}</h1>
              
        }
   
  }