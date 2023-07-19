import { getClient } from "../client";
import { careerQuery } from "../queries/careerQuery";

const getCareerData = async (id, isAr) => {
  const variables = {
    id: id,
    site: isAr ? "arabic" : "default",
  };
  const { data } = await getClient().query({ query: careerQuery(), variables });
  return data;
};

export default getCareerData;
