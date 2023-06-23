import { getClient } from "../client";
import { nav } from "../queries/navQuery";
 

const getNavData = async (arabic)=>{
  const variables= {site:arabic?"arabic":"default"}
    
  const { data } =  await getClient().query({query:nav,variables})
   return data
  }

  export default getNavData