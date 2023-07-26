const { gql } = require("@apollo/client");

export const privacyQuery = () => {
  const query = gql`
    query MyQuery($id: String!, $site: String!) {
      entry(id: $id, site: $site) {
        id
        title
        slug
        blueprint
        ... on Entry_Pages_TermsConditions {
          seo_title
          seo_description
          seo_image {
            path: url
          }
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
