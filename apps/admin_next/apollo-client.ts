import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://monitoring-admin-playground.onrender.com/graphql',
  cache: new InMemoryCache(),
});

export default client;
