const { gql } = require("@apollo/client");

export const   homeQuery =()=>{ 
 const  query =  gql`
  query MyQuery($id: String!,$site:String!) {
      entry(id:  $id, site: $site) {
          id
          title
          slug
          blueprint
          ... on Entry_Pages_Homepage{
            title,
            hero_image {
              id
            },
            company_values,
            about_meena_section,
            section_title,
            section_description,
            image {
              id
              pth:path
              url
            },
            values_a {
              title
              description
              image {
                id
              }
            }
            mid_title
            mid_core_values{
              title
              description
            }
            mid_mid_title
            mid_mid_caption
            mid_features{
              icon {
                id
              }
              title
              description
            }
  
          }
    }
  }
  
  ` 
  ;

  return query
}

