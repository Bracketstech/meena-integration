import { getClient } from "../client";
import { newsDetailQuery } from "../queries/newsDetailQuery";

const getNewsDetails = async (slug, isAr) => {
  const variables = {
    slug: slug,
    site: isAr ? "arabic" : "default",
  };
  const { data } = await getClient().query({
    query: newsDetailQuery(),
    variables,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  return data;
};

export default getNewsDetails;
