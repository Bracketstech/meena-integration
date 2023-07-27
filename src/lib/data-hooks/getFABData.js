import { getClient } from "../client";
import { fabQuery } from "../queries/fabQuery";

const getFABData = async (isAr) => {
  const variables = {
    site: isAr ? "arabic" : "default",
  };
  try {
    const { data } = await getClient().query({
      query: fabQuery(),
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

export default getFABData;
