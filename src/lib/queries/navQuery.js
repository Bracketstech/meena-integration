const { gql } = require("@apollo/client");

export const nav = gql`
query MyQuery($site:String) {
  nav(handle: "top_navigation" ) {
      handle
      title
  ... on Navigation{
      handle
      title
      tree(site: $site){
        page{
          title
          url
          id:entry_id
        }

      }
    }
  }
}

`;