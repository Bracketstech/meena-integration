import { getClient } from "../client";
import { termsQuery } from "../queries/termsQuery";

const getTermsData = async (id, isAr) => {
  const variables = {
    id: id,
    site: isAr ? "arabic" : "default",
  };
  try {
    const { data } = await getClient().query({
      query: termsQuery(),
      variables,
      context: {
        fetchOptions: {
          next: { revalidate: 0 },
        },
      },
    });
    return data;
  } catch (error) {
    return null;
  }
};

export default getTermsData;
