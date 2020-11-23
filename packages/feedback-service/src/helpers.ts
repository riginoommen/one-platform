// const fetch = require( 'node-fetch' );
import JiraApi from 'jira-client';
const fetch = require( 'node-fetch' );

global.Headers = fetch.Headers;

export const JiraApiClient = new JiraApi( {
    protocol: 'https',
    host: `${ process.env.JIRA_HOST }`,
    username: process.env.JIRA_USERNAME,
    password: process.env.JIRA_PASSWORD,
    apiVersion: '2',
    strictSSL: false
} );
class FeedbackHelper {
    private static FeedbackHelperInstance: FeedbackHelper;
    constructor () { }
    public static FeedbackHelper () {
        if ( !FeedbackHelper.FeedbackHelperInstance ) {
            FeedbackHelper.FeedbackHelperInstance = new FeedbackHelper();
        }
        return FeedbackHelper.FeedbackHelperInstance;
    }

    public createGithubIssue ( inputParam: object) {
        let headers = new Headers();
        let body = JSON.stringify( {
            query: `mutation CreateGithubIssue($input: CreateIssueInput!) {
                        createIssue(input: $input) {
                            issue {
                                title
                                body
                                url
                                state
                                createdAt
                                author {
                                    login
                                }
                            }
                        }
                        }`,
            variables: {
                "input": inputParam
            }
        } );
        headers.append( `Authorization`, `${ process.env.GITHUB_AUTH_TOKEN }` );
        headers.append( `Content-Type`, `application/json` );
        return fetch( `${ process.env.GITHUB_API }`, {
            method: `POST`,
            headers,
            body: body,
        } ).then( ( response: any ) => response.json() )
            .then( ( result: any ) => result.data.createIssue)
            .catch( ( err: any ) => {
                throw err;
            } );
    }

    public listGithubIssue ( params:JSON ) {
        let headers = new Headers();
        let body = JSON.stringify( {
            query: `query FetchIssue($name: String!, $owner: String!, $number: Int!) {
                    repository(name: $name, owner: $owner) {
                        issue(number: $number) {
                        url
                        title
                        body
                        state
                        author {
                            login
                            avatarUrl
                        }
                        assignees(first:100) {
                            nodes {
                            name
                            login
                            url
                            }
                        }
                        }
                    }
                    }
                    `,
            variables: params
        } );
        headers.append( `Authorization`, `${ process.env.GITHUB_AUTH_TOKEN }` );
        headers.append( `Content-Type`, `application/json` );
        return fetch( `${ process.env.GITHUB_API }`, {
            method: `POST`,
            headers,
            body: body,
        } ).then( ( response: any ) => response.json() )
            .then( ( result: any ) => {
                result.data.repository.issue.assignees = result.data.repository.issue.assignees.nodes.map( ( assignee: object ) => assignee );
                return result.data.repository.issue;
            } )
            .catch( ( err: any ) => {
                throw err;
            } );
    }

    public listGithubIssues ( params: JSON ) {
        let headers = new Headers();
        let body = JSON.stringify( {
            query: `query FetchGithubIssues($name: String!, $owner: String!, $first: Int, $after: String, $last: Int, $before: String) {
                    repository(name: $name, owner: $owner) {
                        issues(states: [OPEN, CLOSED], first: $first, after: $after, last: $last, before: $before) {
                         pageInfo {
                             endCursor
                             hasNextPage
                             hasPreviousPage
                             startCursor
                        }
                        edges {
                            node {
                                createdAt
                                title
                                body
                                url
                                repository {
                                    name
                                }
                                assignees(first:100) {
                                    nodes {
                                    name
                                    login
                                    url
                                    }
                                }
                            }
                        }
                        }
                    }
                    }
                    `,
            variables: params
        } );
        headers.append( `Authorization`, `${ process.env.GITHUB_AUTH_TOKEN }` );
        headers.append( `Content-Type`, `application/json` );
        return fetch( `${ process.env.GITHUB_API }`, {
            method: `POST`,
            headers,
            body: body,
        } ).then( ( response: any ) => response.json() )
            .then( ( result: any ) => {
                const issues =  result.data.repository.issues.edges.map( ( edge: any ) => {
                    edge.node.assignees = edge?.node?.assignees?.nodes;
                    return edge.node;
                } );
                return {
                    'issues': issues,
                    'pageInfo': result.data.repository.issues.pageInfo
                };
            } )
            .catch( ( err: any ) => {
                throw err;
            } );
    }

    public createJira ( issue: Object ) {
        return JiraApiClient.addNewIssue( issue );
    }

    public listJiras ( projectKey: String ) {
        let jql = `project = ${ projectKey || process.env.PROJECT_KEY } AND labels = 'Reported-via-One-Platform'`;
        return JiraApiClient.searchJira( jql ).then( response => {
            const jiraList: Array<object> = [];
            response.issues.map( ( jira: any ) => {
                jiraList.push({
                        'key': jira.key,
                        'lastUpdated': jira.fields.updated,
                        'summary': jira.fields.summary,
                        'description': jira.fields.description,
                        'status': jira.fields?.status?.name,
                        'assignee': {
                            'name': jira.fields?.assignee?.displayName || null,
                            'email': jira.fields?.assignee?.emailAddress|| null,
                            'uid': jira.fields?.assignee?.name || null,
                        }
                    }
                 );
            } );
            return jiraList;
        });
    }

    public createGitlabIssue ( inputParam: Object ) {
        let headers = new Headers();
        let body = JSON.stringify( {
            query: `mutation CreateGitlabIssue($input: CreateIssueInput!) {
                        createIssue(input: $input) {
                                issue {
                                    title
                                    webUrl
                                    description
                                    labels {
                                        edges {
                                            node {
                                                title
                                            }
                                        }
                                    }
                                    author {
                                        name
                                        email
                                        webUrl
                                    }
                                    assignees {
                                        nodes {
                                            name
                                            email
                                            webUrl
                                        }
                                    }
                                }
                            }
                        }`,
            variables: {
                "input": inputParam
            }
        } );

        headers.append( `Authorization`, `${ process.env.GITLAB_AUTH_TOKEN }` );
        headers.append( `Content-Type`, `application/json` );
        return fetch( `${ process.env.GITLAB_API }`, {
            method: `POST`,
            headers,
            body: body,
        } ).then( ( response: any ) => response.json() )
            .then( ( result: any ) => {
                result.data.createIssue.issue.labels = result?.data?.createIssue?.issue?.labels?.edges.map( ( label: any ) => label.node.title );
                return result.data.createIssue.issue;
            } )
            .catch( ( err: any ) => {
                throw err;
            } );

    }

    public listGitlabIssues (params: JSON) {
        let headers = new Headers();
        let body = JSON.stringify( {
            query: `query ListGitlabIssues($path: ID! ,$first: Int, $after: String) {
                        project(fullPath: $path) {
                            issues(first: $first, after: $after) {
                            pageInfo {
                                endCursor
                                hasNextPage
                                hasPreviousPage
                                startCursor
                            }
                            nodes {
                                title
                                description
                                webUrl
                                labels {
                                edges {
                                    node {
                                    title
                                    }
                                }
                                }
                                assignees {
                                nodes {
                                    name
                                    email
                                }
                                }
                            }
                            }
                        }
                        }
                    `,
            variables: params
        } );
        headers.append( `Authorization`, `${ process.env.GITLAB_AUTH_TOKEN }` );
        headers.append( `Content-Type`, `application/json` );
        return fetch( `${ process.env.GITLAB_API }`, {
            method: `POST`,
            headers,
            body: body,
        } ).then( ( response: any ) => response.json() )
            .then( ( result: any ) => {
                const issues =  result?.data?.project?.issues?.nodes?.map( ( node: any ) => {
                    node.labels = node.labels.edges.map( ( edge: any ) => edge.node.title );
                    return node;
                } );
                return {
                    'issues': issues,
                    'pageInfo': result.data.project.issues.pageInfo
                };
            } )
            .catch( ( err: any ) => {
                throw err;
            } );
    }
}

export const FeedbackIntegrationHelper = FeedbackHelper.FeedbackHelper();
