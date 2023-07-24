const { gql } = require("@apollo/client");

export const fabQuery = () => {
  const query = gql`
    query MyQuery($site: String!) {
      fab: globalSet(handle: "contacts", site: $site) {
        ... on GlobalSet_Contacts {
          phone
          app_download_btn_text
          app_download
          title_a
        }
      }
    }
  `;
  return query;
};
