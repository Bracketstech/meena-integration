import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const cache = new InvalidationPolicyCache({
  invalidationPolicies: {
    timeToLive: 600000, // 1hr TTL on all types in the cache
    renewalPolicy: RenewalPolicy.WriteOnly,
  },
});

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    // cache: new InMemoryCache(),
    cache: cache,
    link: new HttpLink({
      uri: "https://meenacms.brackets-tech.com/graphql",
    }),
  });
});
