import { getClient } from "../client";
import { downloadAppQuery } from "../queries/downloadAppQuery";

const getDownloadAppData = async (slug, isAr) => {
  const variables = {
    slug: slug,
    site: isAr ? "arabic" : "default",
  };
  const { data } = await getClient().query({
    query: downloadAppQuery(),
    variables,
    context: {
      fetchOptions: {
        next: { revalidate: 0 },
      },
    },
  });
  return data;
};

export default getDownloadAppData;
