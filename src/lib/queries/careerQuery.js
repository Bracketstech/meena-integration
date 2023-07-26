const { gql } = require("@apollo/client");

export const careerQuery = () => {
  const query = gql`
    query MyQuery($id: String!, $site: String!) {
      entry(id: $id, site: $site) {
        id
        title
        slug
        blueprint
        ... on Entry_Pages_CareerPage {
          seo_title
          seo_description
          seo_image {
            path: url
          }
          top_header_section {
            header_title
            header_description
          }
          jobs_category_content {
            title
            description
            cat_button_text
            jobs_categories {
              image {
                path: url
              }
              title
              description
            }
          }
          nuttshellValuesTitle: section_title
          nuttshellValuesDescription: description
          nuttshellValuesFeatures: features_content {
            image {
              path: url
            }
            title
            description
          }
        }
      }
    }
  `;
  return query;
};
