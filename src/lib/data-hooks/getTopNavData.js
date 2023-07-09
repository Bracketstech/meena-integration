import { getClient } from "../client";
import { topNav } from "../queries/navQuery";

const getTopNavData = async () => {
  const { data } = await getClient().query({
    query: topNav,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  return data;
};

export default getTopNavData;
