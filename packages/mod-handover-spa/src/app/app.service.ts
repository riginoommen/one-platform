import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  createCase, createHandover, listAllAPSCount, listAllETCount, listAllHandovers, listAllMPSCount, listAllPlatformCount, listCaseSBRs,
  listHandover, listHandoverByDate, listHandoverwithCases,
  removeCase, removeHandover, sendHandoverEmail, updateCase, updateHandover, listSFDCCase
} from './app.gql';
import { GraphQLModule } from './graphql.module';

@Injectable( {
  providedIn: 'root'
} )
export class AppService extends GraphQLModule {
  constructor(
    private apollo: Apollo,
  ) {
    super();
  }

  // GraphQL Query to fetch All the Handovers
  getAllHandovers() {
    return this.apollo.watchQuery<HandoverResponse>( { query: listAllHandovers } )
      .result()
      .then( result => _.cloneDeep( result.data ) );
  }

  // GraphQL Query to fetch the handover by handover_id
  getHandover( handover_id: number ) {
    return this.apollo.watchQuery<HandoverResponse>( {
      variables: {
        handover_id: Number( handover_id )
      },
      query: listHandover
    } ).result().then( result => result.data );
  }

  // GraphQL Query to fetch the handover and its associated cases
  getHandoverWithCases( handover_id: number ) {
    return this.apollo.watchQuery<HandoverResponse>( {
      variables: {
        handover_id: Number( handover_id )
      },
      query: listHandoverwithCases
    } ).result().then( result => _.cloneDeep( result.data ) );
  }


  // GraphQL Query to fetch the handover by date
  getHandoversByDate( date: any ): Promise<HandoverResponse> {
    return this.apollo.watchQuery<HandoverResponse>( { query: listHandoverByDate, variables: { date } } )
      .result()
      .then( result => _.cloneDeep( result.data ) );
  }

  // GraphQL Query to fetch the platform counts
  getAllPlatformCounts() {
    return this.apollo.watchQuery<HandoverResponse>( { query: listAllPlatformCount } )
      .result()
      .then( result => _.cloneDeep( result.data.listAllPlatformCount ) );
  }

  // GraphQL Query to fetch the APS Counts
  getAllAPSCounts() {
    return this.apollo.watchQuery<HandoverResponse>( { query: listAllAPSCount } )
      .result()
      .then( result => _.cloneDeep( result.data.listAllAPSCount ) );
  }

  // GraphQL Query to fetch the MPS Counts
  getAllMPSCounts() {
    return this.apollo.watchQuery<HandoverResponse>( { query: listAllMPSCount } )
      .result()
      .then( result => _.cloneDeep( result.data.listAllMPSCount ) );
  }

  // GraphQL Query to fetch the ET Count
  getAllETCounts() {
    return this.apollo.watchQuery<HandoverResponse>( { query: listAllETCount } )
      .result()
      .then( result => _.cloneDeep( result.data.listAllETCount ) );
  }
  // GraphQL Mutation to create case
  createCase( cases: Case ): Observable<any> {
    return this.apollo
      .mutate( { variables: { input: cases }, mutation: createCase } )
      .pipe( map( ( result: any ) => result.data ) );
  }  // GraphQL Mutation to update case
  updateCase( cases: Case ): Observable<any> {
    return this.apollo
      .mutate( { variables: { input: cases }, mutation: updateCase } )
      .pipe( map( ( result: any ) => result.data.updateCase ) );
  }
  // GraphQL Mutation to remove case
  removeCase( case_id: number ) {
    return this.apollo.mutate<HandoverResponse>( {
      variables: { case_id }, mutation: removeCase
    } );
  }
  // GraphQL Mutation to Create handover
  createHandover( handover: Handover ): Observable<any> {
    return this.apollo
      .mutate( { variables: { input: handover }, mutation: createHandover } )
      .pipe( map( ( result: any ) => result.data ) );
  }
  // GraphQL Mutation to remove handover
  removeHandover( handover_id: number ) {
    return this.apollo.mutate<HandoverResponse>( {
      variables: { handover_id }, mutation: removeHandover
    } );
  }
  // GraphQL Mutation to update handover
  updateHandover( handover: Handover ): Observable<any> {
    return this.apollo
      .mutate( { variables: { input: handover }, mutation: updateHandover } )
      .pipe( map( ( result: any ) => result.data.updateHandover ) );
  }
  // GraphQL Query to fetch the SBRs assiciated with the case number
  getSBRsByCase( casenumber: any ): Promise<HandoverResponse> {
    return this.apollo.watchQuery<HandoverResponse>( { query: listCaseSBRs, variables: { casenumber } } )
      .result()
      .then( result => _.cloneDeep( result.data ) );
  }

  // GraphQL Method to send an email
  sendHandoverEmail( email: any ): Observable<any> {
    return this.apollo
      .mutate( { variables: { input: email }, mutation: sendHandoverEmail } )
      .pipe( map( ( result: any ) => result.data ) );
  }

  // GraphQL Query to fetch the Case from SFDC
  listSFDCCase( casenumber: number ) {
    return this.apollo.watchQuery<HandoverResponse>( {
      variables: {
        casenumber
      },
      query: listSFDCCase
    } ).result().then( result => result.data );
  }
}
