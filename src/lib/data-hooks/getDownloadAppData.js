import { getClient } from "../client";
import { downloadAppQuery } from "../queries/downloadAppQuery";

const getDownloadAppData = async (slug, isAr) => {
  const variables = {
    slug: slug,
    site: isAr ? "arabic" : "default",
  };
  try {
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
  } catch (error) {
    return null;
  }
};

export default getDownloadAppData;
