import { nav } from "../queries/navQuery";

const { default: client } = require("../client");

const getNavData = async ()=>{
  const { data } =  await client.query({query:nav})
   return data
  }

  export default getNavData