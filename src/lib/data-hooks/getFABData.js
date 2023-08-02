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
      // context: { tags: ["revalidationTag"] },
    });
    return data;
  } catch (error) {
    return "error";
  }
};

export default getFABData;
