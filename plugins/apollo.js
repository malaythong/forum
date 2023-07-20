import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-boost';

export default (ctx) => {
  return new ApolloClient({
    uri: 'http://localhost:4000', // Replace this with your GraphQL API endpoint
    cache: new InMemoryCache(),
    // Additional options if needed
  });
};
