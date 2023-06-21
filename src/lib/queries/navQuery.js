const { gql } = require("@apollo/client");

export const nav = gql`
query MyQuery {
  nav(handle: "top_navigation") {
    handle
    title
    ... on Navigation {
      handle
      title
      tree {
        page {
          title
          url
        }
      }
    }
  }
}

`;