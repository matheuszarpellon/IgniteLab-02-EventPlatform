import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o6dr7h0s3w01xx2uuz1l70/master',
  cache: new InMemoryCache(),
});