const { gql } = require("@apollo/client");

export const globalQuery = () => {
  const query = gql`
    query MyQuery($site: String!) {
      globalSEO: globalSet(handle: "seo_global", site: $site) {
        ... on GlobalSet_SeoGlobal {
          seo_title
          seo_description
          seo_image {
            path: url
          }
        }
      }
    }
  `;
  return query;
};
