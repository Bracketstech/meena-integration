import { getClient } from "../client";
import { aboutQuery } from "../queries/aboutQuery";
import { paginationQuery } from "../queries/paginationQuery";
 

const getPaginationData = async (pageNo,limit)=>{
  const variables={
    page:pageNo,limit:3
}
  const { data } =  await getClient().query({query:paginationQuery(),variables})
   return data
  }

  export default getPaginationData