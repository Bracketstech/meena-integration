import { getClient } from "../client";
import { nav } from "../queries/navQuery";

const getNavData = async (arabic) => {
  const variables = { site: arabic ? "arabic" : "default" };

  const { data } = await getClient().query({
    query: nav,
    variables,
    context: {
      fetchOptions: {
        next: { revalidate: 0 },
      },
    },
  });
  return data;
};

export default getNavData;
