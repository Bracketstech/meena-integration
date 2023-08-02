import { getClient } from "../client";
import { bottomNav } from "../queries/navQuery";

const getBottomNavData = async (isAr) => {
  const variables = { site: isAr ? "arabic" : "default" };
  try {
    const { data } = await getClient().query({
      query: bottomNav,
      variables,
      // context: { tags: ["revalidationTag"] },
    });
    return data;
  } catch (error) {
    return "error";
  }
};

export default getBottomNavData;
