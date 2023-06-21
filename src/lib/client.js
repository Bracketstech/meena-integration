import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://meenacms.brackets-tech.com/graphql",
    cache: new InMemoryCache(),
});

export default client;