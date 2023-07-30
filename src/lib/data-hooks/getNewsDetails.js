import { getClient } from "../client";
import { newsDetailQuery } from "../queries/newsDetailQuery";

const getNewsDetails = async (slug, isAr) => {
  const variables = {
    slug: slug,
    site: isAr ? "arabic" : "default",
  };
  try {
    const { data } = await getClient().query({
      query: newsDetailQuery(),
      variables,
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

export default getNewsDetails;
