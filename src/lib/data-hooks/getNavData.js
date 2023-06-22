import { nav } from "../queries/navQuery";

const { default: client } = require("../client");

const getNavData = async (arabic)=>{
  const variables= {site:arabic?"arabic":"default"}
  const { data } =  await client.query({query:nav,variables})
   return data
  }

  export default getNavData