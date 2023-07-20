import { getClient } from "../client";
import { servicesQuery } from "../queries/servicesQuery.js";

const getServicesData = async (id, isAr) => {
  const variables = {
    id: id,
    site: isAr ? "arabic" : "default",
  };
  const { data } = await getClient().query({
    query: servicesQuery(),
    variables,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  return data;
};

export default getServicesData;
