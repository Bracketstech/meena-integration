import { getClient } from "../client";
import { bottomNav } from "../queries/navQuery";

const getBottomNavData = async (isAr) => {
  const variables = { site: isAr ? "arabic" : "default" };
  const { data } = await getClient().query({
    query: bottomNav,
    variables,
    context: {
      fetchOptions: {
        next: { revalidate: 0 },
      },
    },
  });
  return data;
};

export default getBottomNavData;
