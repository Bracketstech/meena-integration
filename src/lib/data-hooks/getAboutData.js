import { getClient } from "../client";
import { aboutQuery } from "../queries/aboutQuery";

const getAboutData = async (id, isAr) => {
  const variables = {
    id: id,
    site: isAr ? "arabic" : "default",
  };
  try {
    const { data } = await getClient().query({
      query: aboutQuery(),
      variables,
      //  // context: { tags: ["revalidationTag"] },
    });
    return data;
  } catch (error) {
    return "error";
  }
};

export default getAboutData;
