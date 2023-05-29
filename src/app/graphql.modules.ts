import { HttpClientModule } from "@angular/common/http";
import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLink } from "apollo-angular/http";
import { InMemoryCache, ApolloLink } from "@apollo/client/core";
// import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { setContext } from "@apollo/client/link/context";
import { URL } from "./URLs";

const uri = URL.URL;
export function createApollo(httpLink: HttpLink) {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: ["charset=utf-8", "application/json"],
    },
  }));

  const auth = setContext((operation, context) => {
    const token = localStorage.getItem("token");

    if (token === null) {
      return {};
    } else {
      return {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    }
  });

  const link = ApolloLink.from([
    basic,
    auth,
    httpLink.create({ uri }),
    // errorLink
  ]);
  // const httpLinkWithErrorHandling = ApolloLink.from([errorLink, httpLink]);
  const cache = new InMemoryCache();

  return {
    link,
    cache,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "no-cache",
        errorPolicy: "ignore",
      },
      query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all",
      },
    },
  };
}

@NgModule({
  imports: [ApolloModule, HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQlModule {}
