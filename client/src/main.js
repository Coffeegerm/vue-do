import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { ApolloClient } from "apollo-client";
import { onError } from "apollo-link-error";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import VueApollo from "vue-apollo";

Vue.config.productionTip = false;

const httpLink = new HttpLink({
  uri: "http://localhost:3000/graphql"
});

// Error Handling
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: errorLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

new Vue({
  vuetify,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
