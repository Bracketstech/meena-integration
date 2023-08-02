import { getClient } from "../client";
import { homeQuery } from "../queries/homeQuery";

const getHomeData = async (isAr) => {
  const variables = {
    id: isAr
      ? "fb9612c0-d197-4525-a1f0-508fbf9b596e"
      : "cda5ec94-a33e-4f57-9eae-dff69cef1cca",
    site: isAr ? "arabic" : "default",
  };
  try {
    const { data } = await getClient().query({
      query: homeQuery(),
      variables,
      // context: { tags: ["revalidationTag"] },
    });
    return data;
  } catch (error) {
    return "error";
  }
};

export default getHomeData;
