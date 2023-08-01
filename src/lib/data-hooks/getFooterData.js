import { getClient } from "../client";
import { footerData } from "../queries/navQuery";

const getFooterData = async () => {
  try {
    const { data } = await getClient().query({
      query: footerData,
      context: { tags: ["revalidationTag"] },
    });
    return data;
  } catch (error) {
    return null;
  }
};

export default getFooterData;
