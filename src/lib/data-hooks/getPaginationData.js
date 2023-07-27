import { getClient } from "../client";
import { aboutQuery } from "../queries/aboutQuery";
import { paginationQuery } from "../queries/paginationQuery";

const getPaginationData = async (pageNo, limit) => {
  const variables = {
    page: pageNo,
    limit: 3,
  };
  try {
    const { data } = await getClient().query({
      query: paginationQuery(),
      variables,
    });
    return data;
  } catch (error) {
    return null;
  }
};

export default getPaginationData;
