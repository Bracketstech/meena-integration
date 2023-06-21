import { aboutQuery } from "../queries/aboutQuery";

const { default: client } = require("../client");

const getAboutData = async (isAr)=>{
  const variables={
    id: isAr?"b6f20761-83c3-4cff-8090-aac0b7ab9b9d": "464bc255-fcaa-40f3-a9b3-6dff74e5436b",site:isAr?'arabic': 'default'
}
  const { data } =  await client.query({query:aboutQuery(),variables})
   return data
  }

  export default getAboutData