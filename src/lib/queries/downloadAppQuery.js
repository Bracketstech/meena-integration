const { gql } = require("@apollo/client");

export const downloadAppQuery = () => {
  const query = gql`
    query MyQuery($id: String!, $site: String!) {
      entry(id: $id, site: $site) {
        id
        title
        slug
        ... on Entry_Pages_AboutAppPage {
          seo_title
          seo_description
          seo_image {
            path: url
          }
          title
          top_header_content {
            header_title
            header_description
          }
          mobile_download_content {
            text_content
            android_download_icon {
              path: url
            }
            android_download_link
            ios_download_icon {
              path: url
            }
            ios_download_link
            main_phone_image {
              path: url
            }
            feature_on_phone_screen {
              icon {
                path: url
              }
              display_text
            }
          }
          experience_section_title
          experience_slider_content {
            main_image {
              path: url
            }
            icon {
              path: url
            }
            title
            description
          }
          other_features_content {
            title
            items {
              icon {
                path: url
              }
              caption
            }
          }
        }
      }
    }
  `;
  return query;
};
