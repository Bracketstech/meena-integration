import { getClient } from "../client";
import { servicesQuery } from "../queries/servicesQuery.js";

const getServicesData = async (id, isAr) => {
  const variables = {
    id: id,
    site: isAr ? "arabic" : "default",
  };
  try {
    const { data } = await getClient().query({
      query: servicesQuery(),
      variables,
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

export default getServicesData;
