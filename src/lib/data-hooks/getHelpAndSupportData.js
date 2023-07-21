import { getClient } from "../client";
import { helpAndSupportQuery } from "../queries/helpAndSupportQuery";

const getHelpAndSupportData = async (id, isAr) => {
  const variables = {
    id: id,
    site: isAr ? "arabic" : "default",
  };
  const { data } = await getClient().query({
    query: helpAndSupportQuery(),
    variables,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  return data;
};

export default getHelpAndSupportData;
