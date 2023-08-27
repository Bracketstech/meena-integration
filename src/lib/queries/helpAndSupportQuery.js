const { gql } = require("@apollo/client");

export const helpAndSupportQuery = () => {
  const query = gql`
    query MyQuery($id: String!, $site: String!) {
      entry(id: $id, site: $site) {
        id
        title
        slug
        blueprint
        ... on Entry_Pages_HelpAndSupportPage {
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
          questions_title
          slug
          url
          uri
          contact_us_content {
            main_title
            form_caption
            address
            email
            phone_number
          }
        }
      }
      socialMediaData: globalSet(handle: "footer_g", site: $site) {
        ... on GlobalSet_FooterG {
          social_media_links {
            icon_dark {
              path: url
            }
            link
          }
        }
      }
      questions: entries(collection: "faq_question", filter: { site: $site }) {
        current_page
        total
        per_page
        last_page
        data {
          locale
          ... on Entry_FaqQuestion_FaqQuestion {
            title
            content
            faq_categories {
              slug
              title
            }
          }
        }
      }
      questionsCategories: terms(
        taxonomy: "faq_categories"
        filter: { site: $site }
        sort: ["id asc"]
      ) {
        current_page
        total
        per_page
        last_page
        data {
          title
          ... on Term_FaqCategories_FaqCategory {
            title
            taxonomy {
              title
              ... on Taxonomy {
                title
              }
            }
          }
          slug
        }
      }
      contactUsForm: form(handle: "contact_us_form") {
        title
        honeypot
        fields {
          handle
          type
          display
          instructions
          config
        }
      }
    }
  `;
  return query;
};
