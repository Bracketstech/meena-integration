import { getClient } from "../client";
import { aboutQuery } from "../queries/aboutQuery";

const getAboutData = async (id, isAr) => {
  const variables = {
    id: id,
    site: isAr ? "arabic" : "default",
  };
  const { data } = await getClient().query({
    query: aboutQuery(),
    variables,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  return data;
};

export default getAboutData;
