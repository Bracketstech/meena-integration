const { gql } = require("@apollo/client");

export const aboutQuery = () => {
  const query = gql`
    query MyQuery($id: String!, $site: String!) {
      entry(id: $id, site: $site) {
        ... on Entry_Pages_AboutPage {
          seo_title
          seo_description
          seo_image {
            path: url
          }
          title
          top_header_section
          top_header_content {
            header_title
            header_description
          }
          our_story_content {
            title
            image {
              path: url
            }
            title_caption
            content
          }
          values_nutshell_section_t
          coreValuesSectionTitle: section_title
          coreValuesFeatures: features {
            title
            icon {
              path: url
            }
            description
          }
          two_cards_view {
            title
            image {
              path: url
            }
            description
          }
          leaders_section_title
          leaders {
            ... on Entry_MeenaLeaders_MeenaLeader {
              title
              picture {
                path: url
              }
              specialty: spec
            }
          }
          partners_section_title
          partners_section_description
          partners {
            ... on Entry_MeenaPartners_MeenaPartner {
              icon {
                path: url
              }
              link
            }
          }
          qualifications_section_title
          qualifications_section_description
          qualifications {
            ... on Entry_MeenaQualifications_MeenaQualification {
              icon {
                path: url
              }
              link
            }
          }
        }
      }
    }
  `;
  return query;
};
