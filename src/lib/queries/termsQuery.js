const { gql } = require("@apollo/client");

export const termsQuery = () => {
  const query = gql`
    query MyQuery($id: String!, $site: String!) {
      entry(id: $id, site: $site) {
        id
        title
        slug
        blueprint
        ... on Entry_Pages_TermsConditions {
          title
          content
          slug
          url
          uri
        }
      }
    }
  `;
  return query;
};
