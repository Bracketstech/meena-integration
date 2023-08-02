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
      // context: { tags: ["revalidationTag"] },
    });
    return data;
  } catch (error) {
    return "error";
  }
};

export default getNewsDetails;
