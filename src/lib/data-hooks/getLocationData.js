import { getClient } from "../client";
import { locationQuery } from "../queries/locationQuery";

const getLocationData = async (isAr) => {
  const variables = {
    site: isAr ? "arabic" : "default",
  };
  try {
    const { data } = await getClient().query({
      query: locationQuery(),
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

export default getLocationData;
