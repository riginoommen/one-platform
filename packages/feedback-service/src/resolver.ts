import {
  Feedback
} from './schema';
import {
  FeedbackIntegrationHelper
} from './helpers';

export const FeedbackResolver = {
  Query: {
    listGithubIssue ( root: any, args: any, ctx: any ) {
      return FeedbackIntegrationHelper.listGithubIssue( args );
    },
    listGithubIssues ( root: any, args: any, ctx: any ) {
      return FeedbackIntegrationHelper.listGithubIssues( args );
    },
    listJiras ( root: any, args: any, ctx: any ) {
      return FeedbackIntegrationHelper.listJiras( args.projectKey );
    },
    listFeedbacks ( root: any, args: any, ctx: any ) {
      return Feedback.find()
        .then( response => response )
        .catch( ( error:Error ) => error );
    },
    listFeedback ( root: any, args: any, ctx: any ) {
      return Feedback.findById( args.id )
        .then( response => response )
        .catch( ( error:Error ) => error );
    },
    listGitlabIssues ( root: any, args: any, ctx: any ) {
      return FeedbackIntegrationHelper.listGitlabIssues( args );
    },
    listGitlabIssue ( root: any, args: any, ctx: any ) {
      return FeedbackIntegrationHelper.listGitlabIssue( args );
    },
  },
  Mutation: {
    createGithubIssue ( root: any, args: any, ctx: any ) {
      return FeedbackIntegrationHelper.createGithubIssue( args.input );
    },
    createJira ( root: any, args: any, ctx: any ) {
      const issue: object = {
        'fields': {
          'project': {
            'key':  args.input.projectKey || process.env.PROJECT_KEY
          },
          'summary': `${ args.input.summary }`,
          'description': `${ args.input.description }`,
          'labels': [ 'Reported-via-One-Platform' ],
          'issuetype': {
            'name': 'Task'
          },
        }
      };
      return FeedbackIntegrationHelper.createJira( issue );
    },
    createGitlabIssue ( root: any, args: any, ctx: any ) {
      return FeedbackIntegrationHelper.createGitlabIssue( args.input );
    },
    async createFeedback ( root: any, args: any, ctx: any ) {
      let apiResponse = {};
      switch ( args.input.mode ) {
        case 'GITHUB':
          const githubIssueInput: object = {
            'title': args.input.summary,
            'body': args.input.description,
            'repositoryId': args.input.repoID || process.env.REPO_ID
          };

          const githubResponse = await FeedbackIntegrationHelper.createGithubIssue( githubIssueInput );
          apiResponse = {
            ...args.input,
            ticketUrl: githubResponse.issue.url
          };
          break;
        case 'JIRA':
          const jiraIssueInput: object = {
            'fields': {
              'project': {
                'key': args.input.projectKey || process.env.PROJECT_KEY
              },
              'summary': `${ args.input.summary }`,
              'description': `${ args.input.description }`,
              'labels': [ 'Reported-via-One-Platform' ],
              'issuetype': {
                'name': 'Task'
              },
            }
          };
          const jiraResponse = await FeedbackIntegrationHelper.createJira( jiraIssueInput );
          apiResponse = {
            ...args.input,
            ticketUrl: `https://${ process.env.JIRA_HOST }/browse/${ jiraResponse.key }`
          };
          break;
        case 'GITLAB':
          const gitlabIssueInput: object = {
            'title': args.input.summary,
            'description': args.input.description,
            'projectPath': "one-portal/one-portal-client",
          };
          const gitlabResponse = await FeedbackIntegrationHelper.createGitlabIssue( gitlabIssueInput );
          apiResponse = {
            ...args.input,
            ticketUrl: gitlabResponse.webUrl
          };
          break;
        default:
          console.warn( 'Integration not supported' );
      }
      return new Feedback( apiResponse ).save()
        .then( response => response )
        .catch( ( error:Error ) => error );
    },
    updateFeedback ( root: any, args: any, ctx: any ) {
      return Feedback.findById( args.input._id )
        .then( response => {
          return Object.assign( response, args.input ).save()
            .then( ( feedback: FeedbackType ) => feedback );
      } ).catch( ( err: any ) => err );
    },
    deleteFeedback ( root: any, args: any, ctx: any ) {
      return Feedback.findByIdAndRemove( args._id )
        .then( response => response )
        .catch( ( error:Error ) => error );
    }
  }
};
