import { aboutQuery } from "../queries/aboutQuery";
import { paginationQuery } from "../queries/paginationQuery";

const { default: client } = require("../client");

const getPaginationData = async (pageNo,limit)=>{
  const variables={
    page:pageNo,limit:3
}
  const { data } =  await client.query({query:paginationQuery(),variables})
   return data
  }

  export default getPaginationData