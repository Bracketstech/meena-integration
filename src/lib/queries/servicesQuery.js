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
          seo_title
          seo_description
          seo_image {
            path: url
          }
          top_header {
            header_title
            header_description
          }
          vertical_carousel_title
          vertical_carousel_description
          vertical_carousel_content {
            hide_this_service
            image {
              path: url
            }
            title
            description
          }
          service_fees_and_timing_section{
            fees_title
            timing_titles
            services{
            ... on Set_Services_NewSet{
              service_name
              single_service{
                type
                fee
                }
              }
            }
            timing
            due_time
            from_and_to{
              from
              to
            }
          }
          nutshell_section_hide
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
