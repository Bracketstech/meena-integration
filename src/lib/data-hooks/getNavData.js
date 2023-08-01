import { getClient } from "../client";
import { nav } from "../queries/navQuery";

const getNavData = async (arabic) => {
  const variables = { site: arabic ? "arabic" : "default" };

  try {
    const { data } = await getClient().query({
      query: nav,
      variables,
      // context: { tags: ["revalidationTag"] },
    });
    return data;
  } catch (error) {
    return null;
  }
};

export default getNavData;
