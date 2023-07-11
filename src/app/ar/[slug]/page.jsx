import AboutMeena from "@/components/Pages/AboutMeena/Index"
import Careers from "@/components/Pages/Careers/Index"
import HelpAndSupport from '@/components/Pages/HelpAndSupport/Index'
import Locations from '@/components/Pages/Locations/Index'
import Services from '@/components/Pages/Services/Index'
import usePageId from "@/hooks/usePageId"

export default async function Page({ params }) { 
    const {slug} =params 
    const id = await usePageId(slug,"arabic") 
   switch (id) {
            case "a4ebcba3-3ba6-4d3b-bd01-29ea514119ed":
                    return <> 
                    <Services arabic/>
                    </>
            case "e9a0fcb1-57be-499d-ae50-ec17fb7bc69a":
                    return <> 
                    <Locations arabic/>
                    </>
            case "e1880864-7e75-491a-a301-fad016620580":
                    return <> 
                    <HelpAndSupport arabic/>
                    </>
            case "b6f20761-83c3-4cff-8090-aac0b7ab9b9d":
                    return <> 
                    <AboutMeena arabic/>
                    </>
            case "4b5b6411-a391-4f04-a5e1-ffb4918636ae":
                    return <> 
                    <Careers arabic/>
                    </>
              
        
            default:
                return <h1>Page Not Found {id}</h1>
              
        }
   
  }