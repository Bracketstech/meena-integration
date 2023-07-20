import { getClient } from "../client";
import { locationQuery } from "../queries/locationQuery";

const getLocationData = async (isAr) => {
  const variables = {
    site: isAr ? "arabic" : "default",
  };
  const { data } = await getClient().query({
    query: locationQuery(),
    variables,
  });
  return data;
};

export default getLocationData;