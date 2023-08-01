import { getClient } from "../client";
import { privacyQuery } from "../queries/privacyQuery";

const getPrivacyData = async (id, isAr) => {
  const variables = {
    id: id,
    site: isAr ? "arabic" : "default",
  };
  try {
    const { data } = await getClient().query({
      query: privacyQuery(),
      variables,
      context: { tags: ["revalidationTag"] },
    });
    return data;
  } catch (error) {
    return null;
  }
};

export default getPrivacyData;
