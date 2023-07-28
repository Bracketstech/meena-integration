import { getClient } from "../client";
import { topNav } from "../queries/navQuery";

const getTopNavData = async () => {
  try {
    const { data } = await getClient().query({
      query: topNav,
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

export default getTopNavData;
