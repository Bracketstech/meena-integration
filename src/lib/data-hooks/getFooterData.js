import { getClient } from "../client";
import { footerData } from "../queries/navQuery";

const getFooterData = async () => {
  try {
    const { data } = await getClient().query({
      query: footerData,
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

export default getFooterData;
