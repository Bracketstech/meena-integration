import { homeQuery } from "../queries/homeQuery";

const { default: client } = require("../client");

const getHomeData = async (isAr)=>{
    const variables={
        id: isAr?"fb9612c0-d197-4525-a1f0-508fbf9b596e": "cda5ec94-a33e-4f57-9eae-dff69cef1cca",site:isAr?'arabic': 'default'
    }
  const { data } =  await client.query({query:homeQuery(),variables})
   return data
  }

  export default getHomeData