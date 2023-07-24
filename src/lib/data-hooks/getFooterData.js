import { getClient } from "../client";
import { footerData } from "../queries/navQuery";

const getFooterData = async () => {
  const { data } = await getClient().query({
    query: footerData,
    context: {
      fetchOptions: {
        next: { revalidate: 0 },
      },
    },
  });
  return data;
};

export default getFooterData;
