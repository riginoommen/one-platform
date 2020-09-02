import { resolve } from 'dns';
import { rejects } from 'assert';
import { RedisPubSub } from 'graphql-redis-subscriptions';
const fetch = require( 'node-fetch' );
import Redis from 'ioredis';
const redisOptions: Redis.RedisOptions = {
  host: process.env.REDIS_SERVICE_HOST,
  port: Number.parseInt( process.env.REDIS_SERVICE_PORT || '6379', 10 ),
  retryStrategy: ( times: any ) => {
    return Math.min( times * 50, 2000 );
  }
};
export const pubsub = new RedisPubSub( {
  publisher: new Redis( redisOptions ),
  subscriber: new Redis( redisOptions ),
} );

const JiraApi = require( 'jira-client' );

const JiraObj = new JiraApi( {
  protocol: 'https',
  host: process.env.JIRA_HOST,
  username: process.env.JIRA_USERNAME,
  password: process.env.JIRA_PASSWORD,
  apiVersion: '2',
  strictSSL: false
} );

export function createJira ( issue: any ) {
  return JiraObj.addNewIssue( issue );
}

export function pushIndex ( feedback: any, user: any ) {
  const variables = `{
   "input": {
      "dataSource": "oneportal",
      "documents": [
        {
          "id": "${ feedback._id }",
          "title": "${ feedback.title }",
          "abstract": " ${ feedback.description } ",
          "description": "${ feedback.description }",
          "contentType": "Feedback",
          "operation": "index",
          "icon": "feedback.svg",
          "uri": "/feedback",
          "tags": [ "Feedback", "${ feedback.feedbackType }" ],
          "createdDate":"${ feedback.createdOn }",
          "createdBy":"${ user.name }",
          "lastModifiedDate": "${ feedback?.modifiedOn || feedback.createdOn }",
          "lastModifiedBy":"${ user.name }"
        }
      ]
  }
}`;

const graphql = JSON.stringify( {
    query: `
    mutation AddIndex($input: SearchInput) {
      manageIndex(input: $input) {
        status
      }
    }`,
    variables: variables
  } );
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: graphql
  };
  fetch( `http://${ process.env.SEARCH_SERVICE_SERVICE_HOST }:${ process.env.SEARCH_SERVICE_SERVICE_PORT }/graphql`, requestOptions )
    .then( ( result: any ) => result.json() );
}
