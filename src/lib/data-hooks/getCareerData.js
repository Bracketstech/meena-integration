import { getClient } from "../client";
import { careerQuery } from "../queries/careerQuery";

const getCareerData = async (id, isAr) => {
  const variables = {
    id: id,
    site: isAr ? "arabic" : "default",
  };
  const { data } = await getClient().query({
    query: careerQuery(),
    variables,
    context: {
      fetchOptions: {
        next: { revalidate: 0 },
      },
    },
  });
  return data;
};

export default getCareerData;
