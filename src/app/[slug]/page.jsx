import getBottomNavData from "@/lib/data-hooks/getBottomNavData"
import getTopNavData from "@/lib/data-hooks/getTopNavData"
import Locations from '../../components/Pages/Locations/Index'
import Services from '../../components/Pages/Services/Index'
import HelpAndSupport from '../../components/Pages/HelpAndSupport/Index'
import About from "@/components/Pages/About"
import Careers from "@/components/Pages/Careers/Index"

export default async function Page({ params }) { 
    const {slug} =params 
    const topNavData = await getTopNavData()
    const bottomNavData = await getBottomNavData()
    const filteredDataTop = topNavData.nav.treeEn.filter(({page})=>page.url.replace('/',"") == slug ) 
    const filteredDataBottom = bottomNavData.nav.treeEn.filter(({page})=>page.url.replace('/',"") == slug ) 
    const id = filteredDataTop[0] ? filteredDataTop[0].page.id :filteredDataBottom[0]?.page.id
   switch (id) {
            case "300942ec-7d92-4f42-b8b2-15250cbf1c04":
                    return <> 
                    <Services/>
                    </>
            case "b797d4f3-9da1-48c2-9b37-89250fd85a84":
                    return <> 
                    <Locations/>
                    </>
            case "ab9bc9b1-cd72-42b7-b086-14ea9e1489ff":
                    return <> 
                    <HelpAndSupport/>
                    </>
            case "464bc255-fcaa-40f3-a9b3-6dff74e5436b":
                    return <> 
                    <About/>
                    </>
            case "2f433ac6-6b0b-4a65-bcb8-2f84b7e6b211":
                    return <> 
                    <Careers/>
                    </>
              
        
            default:
                return <h1>Page Not Found {id}</h1>
              
        }
   
  }