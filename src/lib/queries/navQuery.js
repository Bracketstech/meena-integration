const { gql } = require("@apollo/client");

export const nav = gql`
  query MyQuery($site: String) {
    nav(handle: "top_navigation") {
      handle
      title
      ... on Navigation {
        handle
        title
        tree(site: $site) {
          page {
            title
            url
            id: entry_id
          }
        }
      }
    }
  }
`;
export const topNav = gql`
  query MyQuery {
    nav(handle: "upper_top_navigation") {
      handle
      title
      ... on Navigation {
        handle
        title
        treeEn: tree(site: "default") {
          page {
            title
            url
            id: entry_id
          }
        }
        treeAr: tree(site: "arabic") {
          page {
            title
            url
            id: entry_id
          }
        }
      }
    }
  }
`;
export const bottomNav = gql`
  query MyQuery($site: String!) {
    headerLogo: globalSet(handle: "header_logo", site: $site) {
      ... on GlobalSet_HeaderLogo {
        header_logo_dark {
          path: url
        }
        header_logo_light {
          path: url
        }
      }
    }

    nav(handle: "top_navigation") {
      handle
      title
      ... on Navigation {
        handle
        title
        treeEn: tree(site: "default") {
          page {
            title
            url
            id: entry_id
          }
        }
        treeAr: tree(site: "arabic") {
          page {
            title
            url
            id: entry_id
          }
        }
      }
    }
  }
`;
export const footerData = gql`
  query MyQuery {
    nav(handle: "footer_navigation") {
      handle
      title
      ... on Navigation {
        handle
        title
        treeEn: tree {
          page {
            title
          }
          children {
            page {
              title
              url
              id: entry_id
            }
          }
        }
        treeAr: tree(site: "arabic") {
          page {
            title
          }
          children {
            page {
              title
              url
              id: entry_id
            }
          }
        }
      }
    }
    footerDataEn: globalSet(handle: "footer_g", site: "default") {
      ... on GlobalSet_FooterG {
        logo {
          path: url
        }
        description
        follow_us_title
        social_media_links {
          icon {
            path: url
          }
          link
        }
        copyrights_text
      }
    }
    footerDataAr: globalSet(handle: "footer_g", site: "arabic") {
      ... on GlobalSet_FooterG {
        logo {
          path: url
        }
        description
        follow_us_title
        social_media_links {
          icon {
            path: url
          }
          link
        }
        copyrights_text
      }
    }
  }
`;
