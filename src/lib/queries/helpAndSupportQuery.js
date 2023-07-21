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
          title
          top_header_content {
            header_title
            header_description
          }
          questions_title
          slug
          url
          uri
        }
      }
      questions: entries(
        collection: "faq_question"
        filter: { site: "arabic" }
      ) {
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
        filter: { site: "arabic" }
        sort: ["title asc"]
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
    }
  `;
  return query;
};
