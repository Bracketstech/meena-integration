import { getClient } from "../client";
import { bottomNav } from "../queries/navQuery";

const getBottomNavData = async () => {
  const { data } = await getClient().query({
    query: bottomNav,
    context: {
      fetchOptions: {
        next: { revalidate: 0 },
      },
    },
  });
  return data;
};

export default getBottomNavData;
