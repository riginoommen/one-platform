import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';

const uri = 'http://localhost:8080/graphql'; // <-- add the URL of the GraphQL server here

const cleanTypeName = new ApolloLink( ( operation, forward ) => {
  if ( operation.variables ) {
    operation.variables = JSON.parse( JSON.stringify( operation.variables ), ( key, value ) =>
      ( key === '__typename' ? undefined : value ) );
  }
  return forward( operation ).map( ( data ) => {
    return data;
  } );
} );

export function createApollo( httpLink: HttpLink ) {
  const link = ApolloLink.from( [ cleanTypeName, httpLink.create( { uri } ) ] );
  return {
    link,
    cache: new InMemoryCache(),
  };
}

@NgModule( {
  exports: [ ApolloModule, HttpLinkModule ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [ HttpLink ],
    },
  ],
} )
export class GraphQLModule { }
