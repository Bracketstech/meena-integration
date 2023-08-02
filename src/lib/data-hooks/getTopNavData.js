import { getClient } from "../client";
import { topNav } from "../queries/navQuery";

const getTopNavData = async () => {
  try {
    const { data } = await getClient().query({
      query: topNav,
      // context: { tags: ["revalidationTag"] },
    });
    return data;
  } catch (error) {
    return "error";
  }
};

export default getTopNavData;
