const { gql } = require("@apollo/client");

export const aboutQuery =()=>{
const query = gql`
query MyQuery($id: String!,$site:String!) {
    entry(id: $id, site: $site) {
        ... on Entry_Pages_AboutPage{
          title
          banner_title
          banner_image{
            path
            extension
            is_image
            is_video
            url
          }

        }
  }
}

`;
return query
}