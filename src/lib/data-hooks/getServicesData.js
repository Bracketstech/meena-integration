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
  });
  return data;
};

export default getServicesData;
