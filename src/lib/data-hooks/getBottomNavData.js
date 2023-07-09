import { getClient } from "../client";
import { bottomNav } from "../queries/navQuery";

const getBottomNavData = async () => {
  const { data } = await getClient().query({
    query: bottomNav,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  return data;
};

export default getBottomNavData;
