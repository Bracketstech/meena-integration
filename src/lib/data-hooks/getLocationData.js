import { getClient } from "../client";
import { locationQuery } from "../queries/locationQuery";

const getLocationData = async (isAr) => {
  const variables = {
    id: isAr
      ? "e9a0fcb1-57be-499d-ae50-ec17fb7bc69a"
      : "b797d4f3-9da1-48c2-9b37-89250fd85a84",
    site: isAr ? "arabic" : "default",
  };
  try {
    const { data } = await getClient().query({
      query: locationQuery(),
      variables,
      // context: { tags: ["revalidationTag"] },
    });
    return data;
  } catch (error) {
    return "error";
  }
};

export default getLocationData;
