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
      context: { tags: ["revalidationTag"] },
    });
    return data;
  } catch (error) {
    return null;
  }
};

export default getDownloadAppData;
