const { gql } = require("@apollo/client");

export const homeQuery = () => {
  const query = gql`
    query MyQuery($id: String!, $site: String!) {
      entry(id: $id, site: $site) {
        id
        title
        slug
        blueprint
        ... on Entry_Pages_Homepage {
          seo_title
          seo_description
          seo_image {
            path: url
          }
          title

          hero_image {
            id
            path: url
            extension
          }
          hero_image_mobile {
            path: url
          }
          hero_title
          hero_caption
          company_values {
            value_title
            value_description
          }
          aboutMeenaSectionTitle: section_title
          aboutMeenaSectionImage: image {
            path: url
            extension
          }
          aboutMeenaSection: values_a {
            id
            description
            title
            icon {
              path: url
              extension
            }
          }
          nutshellMidValueSectionTitle: mid_section_title
          nutshellMidValueSectionFeatures: mid_features {
            icon {
              path: url
              extension
            }
            title
            description
          }
          doctorsCarouselTitle: doctors_carousel_title
          doctors {
            ... on Entry_MeenaDoctors_MeenaDoctor {
              title
              speci
              picture {
                path: url
                extension
              }
            }
          }
          testimonials_section_title
          testimonials {
            ... on Entry_Testimonials_Testimonial {
              title
              content
            }
          }
          clinics_section_title
          clinics_section_description
          clinics {
            ... on Entry_MeenaClincs_MeenaClinc {
              title
              coming_soon
              images {
                path: url
                extension
              }
            }
          }
          news_section_title
          news {
            ... on Entry_News_News {
              title
              thumbnail {
                path: url
                extension
              }
              slug
              date
              description
            }
          }
          booking_reminder_content {
            image {
              id
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
