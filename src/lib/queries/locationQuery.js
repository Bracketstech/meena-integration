const { gql } = require("@apollo/client");

export const locationQuery = () => {
  const query = gql`
    query MyQuery($site: String!) {
      entry(id: "b797d4f3-9da1-48c2-9b37-89250fd85a84", site: "default") {
        id
        title
        slug
        blueprint
        ... on Entry_Pages_LocationsPage {
          seo_title
          seo_description
          seo_image {
            path: url
          }
          title
          hide_map_section
          coming_soon_image {
            path: url
          }

          top_header_content {
            header_title
            header_description
          }
          slug
        }
      }

      branches: entries(collection: "meena_clincs", filter: { site: $site }) {
        current_page
        total
        per_page
        last_page
        data {
          locale
          ... on Entry_MeenaClincs_MeenaClinc {
            seo_title
            seo_description
            seo_image {
              path: url
            }
            title
            coming_soon
            images {
              id
              path: url
            }
            show_on_map
            coordinates {
              lat
              lng
            }
            clinic_phone
            working_days_span
            working_time {
              from_time
              to_time
            }
            clinic_type {
              title
            }
          }
        }
      }
    }
  `;
  return query;
};
