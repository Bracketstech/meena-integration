import { getClient } from "../client";
import { helpAndSupportQuery } from "../queries/helpAndSupportQuery";

const getHelpAndSupportData = async (id, isAr) => {
  const variables = {
    id: id,
    site: isAr ? "arabic" : "default",
  };
  try {
    const { data } = await getClient().query({
      query: helpAndSupportQuery(),
      variables,
      // context: {
      //   fetchOptions: {
      //     next: { revalidate: 0 },
      //   },
      // },
    });
    return data;
  } catch (error) {
    return null;
  }
};

export default getHelpAndSupportData;
