const { gql } = require("@apollo/client");

export const newsDetailQuery = () => {
  const query = gql`
    query MyQuery($slug: String!, $site: String!) {
      entry(slug: $slug, site: $site) {
        id
        title
        slug
        blueprint
        ... on Entry_News_News {
          title
          thumbnail {
            path: url
          }
          image {
            path: url
          }
          content
          date
          url
          last_modified
          status
          published
        }
      }
    }
  `;
  return query;
};