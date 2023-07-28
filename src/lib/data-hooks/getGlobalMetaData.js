import { getClient } from "../client";
import { globalQuery } from "../queries/globalQuery";

const getGlobalMetaData = async (arabic) => {
  const variables = { site: arabic ? "arabic" : "default" };

  try {
    const { data } = await getClient().query({
      query: globalQuery(),
      variables,
      // context: {
      //   fetchOptions: {
      //     next: { revalidate: 0 },
      //   },
      // },
    });
    return data;
  } catch (error) {
    return null;
  }
};

export default getGlobalMetaData;
