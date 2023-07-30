import { getClient } from "../client";
import { newsQuery } from "../queries/newsQuery";

const getNewsData = async (id, isAr, current_page, limit) => {
  const variables = {
    id: id,
    site: isAr ? "arabic" : "default",
    current_page: current_page,
    limit: limit,
  };
  try {
    const { data } = await getClient().query({
      query: newsQuery(),
      variables,
      context: {
        fetchOptions: {
          next: { revalidate: 0 },
        },
      },
    });
    return data;
  } catch (error) {
    return null;
  }
};

export default getNewsData;
