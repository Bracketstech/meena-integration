import { getClient } from "../client";
import { downloadAppQuery } from "../queries/downloadAppQuery";

const getDownloadAppData = async (id, isAr) => {
  const variables = {
    id: id,
    site: isAr ? "arabic" : "default",
  };
  try {
    const { data } = await getClient().query({
      query: downloadAppQuery(),
      variables,
      // context: { tags: ["revalidationTag"] },
    });
    return data;
  } catch (error) {
    return "error";
  }
};

export default getDownloadAppData;
