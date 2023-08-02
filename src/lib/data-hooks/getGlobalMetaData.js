import { getClient } from "../client";
import { globalQuery } from "../queries/globalQuery";

const getGlobalMetaData = async (arabic) => {
  const variables = { site: arabic ? "arabic" : "default" };

  try {
    const { data } = await getClient().query({
      query: globalQuery(),
      variables,
      // context: { tags: ["revalidationTag"] },
    });
    return data;
  } catch (error) {
    return "error";
  }
};

export default getGlobalMetaData;
