const { gql } = require("@apollo/client");

export const newsQuery = () => {
  const query = gql`
    query MyQuery(
      $id: String!
      $site: String!
      $current_page: Int!
      $limit: Int!
    ) {
      entry(id: $id, site: $site) {
        id
        title
        slug
        blueprint
        ... on Entry_Pages_Page {
          title
          header_title
          header_description
          slug
          url
          uri
        }
      }
      NewsEn: entries(
        collection: "news"
        filter: { site: "default" }
        sort: ["date asc"]
        limit: $limit
        page: $current_page
      ) {
        current_page
        total
        per_page
        last_page
        data {
          locale
          ... on Entry_News_News {
            newsId: id
            locale
            slug
            title
            thumbnail {
              path: url
            }
            description
            last_modified
            published
            date
          }
        }
      }
      NewsAr: entries(
        collection: "news"
        filter: { site: "arabic" }
        sort: ["date asc"]
        limit: $limit
        page: $current_page
      ) {
        current_page
        total
        per_page
        last_page
        data {
          locale
          ... on Entry_News_News {
            newsId: id
            locale
            slug
            title
            thumbnail {
              path: url
            }
            description
            last_modified
            published
            date
            uri
            parent {
              id
            }
          }
        }
      }
    }
  `;
  return query;
};
