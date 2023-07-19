const { gql } = require("@apollo/client");

export const servicesQuery = () => {
  const query = gql`
    query MyQuery($id: String!, $site: String!) {
      entry(id: $id, site: $site) {
        id
        title
        slug
        blueprint
        ... on Entry_Pages_ServicesPage {
          top_header {
            header_title
            header_description
          }
          vertical_carousel_title
          vertical_carousel_description
          vertical_carousel_content {
            image {
              path: url
            }
            title
            description
          }
          nuttshelValuesTitle: section_title
          nuttshelValuesFeatures: features {
            icon {
              path: url
            }
            title
            description
          }
          infograph_section_content {
            image {
              path: url
            }
            title
            description
          }
          booking_reminder_content {
            image {
              path: url
            }
            booking_section_title
            description
          }
        }
      }
    }
  `;
  return query;
};
