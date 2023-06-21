

const { gql } = require("@apollo/client");

export const paginationQuery =()=>{
const query = gql`
query MyQuery($page: Int!,$limit:Int!) {
    entry(id: "5fee2e92-bcc9-4efc-9dc3-0e13def0d3db", site: "default") {
        ... on Entry_Pages_Page{
          title

        }
  	}
    specialities:entries(collection: "specialities", limit: $limit, page:$page) {
      from
      to
    	total
    	per_page
    	current_page
      data{
        ... on Entry_Specialities_Speciality{
          title
          image{
            url
          }
        }
      }
    }
}

`;
return query
}