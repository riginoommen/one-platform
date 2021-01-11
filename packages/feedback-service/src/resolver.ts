import { Feedback } from './schema';
import { FeedbackIntegrationHelper } from './helpers';
import * as _ from 'lodash';

export const FeedbackResolver = {
  Query: {
    async listFeedbacks(root: any, args: any, ctx: any) {
      let homeResponse = await FeedbackIntegrationHelper.listHomeType();
      const queryList: Array<object> = [];
      const promises: any = [];
      let feedbackList: Array<FeedbackType> = [];
      let query: string = ``;
      let timestampQuery: string = ``;
      let userData: Array<object> = [];
      return Feedback.find().sort({ 'createdOn': -1 }).exec()
        .then((response: FeedbackType[]) => {
          return JSON.parse(JSON.stringify(response)).map((res: any) => {
            const filteredHomeResponse = homeResponse.filter((homeRes: any) => homeRes?._id === res?.config)[0] || null;
            res.feedback = filteredHomeResponse.feedback || null;
            res.module = filteredHomeResponse.name || null;
            res.source = res.feedback.source || null;
            return res;
          });
        }).then((feedback: any) => {
          feedbackList = feedback;
          feedback = _.groupBy(feedback, 'feedback.sourceUrl');
          Object.keys(feedback).map((key: string) => {
            feedback[key].forEach((groupedList: FeedbackType, index: any) => {
              timestampQuery += `
              rhatUUID_${(groupedList.createdBy as string).replace(/-/g, '')}:getUsersBy(rhatUUID:"${groupedList.createdBy}") {
                name
                title
                uid
                rhatUUID
              }
              
              ${(groupedList.updatedBy) ? `
              rhatUUID_${(groupedList.updatedBy as string).replace(/-/g, '')}:getUsersBy(rhatUUID:"${groupedList.updatedBy}") {
                name
                title
                uid
                rhatUUID
              }
              `: ``}
              `;
              if ((groupedList as any).feedback.source === 'GITLAB') {
                query += `
                      gitlab_${index}_${groupedList.ticketUrl.split('/')[groupedList.ticketUrl.split('/').length - 1]}:project(fullPath: "${(groupedList as any).feedback.projectKey}") {
                        issue(iid: "${groupedList.ticketUrl.split('/')[groupedList.ticketUrl.split('/').length - 1]}") {
                        title
                        description
                        state
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
                            webUrl
                            }
                        }
                        }
                    }
                    `;
                if (feedback[key].length === index + 1) {
                  query = `query listGitlabIssues {${query} }`;
                  const gitlabQuery = {
                    'query': query,
                    'sourceUrl': key,
                    'source': (groupedList as any).feedback.source
                  }
                  query = '';
                  queryList.push(gitlabQuery);
                }
              } else if ((groupedList as any).feedback.source === 'GITHUB') {
                query += `
                  gitlab_${index}_${groupedList.ticketUrl.split('/')[groupedList.ticketUrl.split('/').length - 1]}:repository(name: "${groupedList.ticketUrl.split('/')[groupedList.ticketUrl.split('/').length - 3]}", owner: "${groupedList.ticketUrl.split('/')[groupedList.ticketUrl.split('/').length - 4]}") {
                        issue(number: ${Number(groupedList.ticketUrl.split('/')[groupedList.ticketUrl.split('/').length - 1])}) {
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
                            email
                            url
                            }
                        }
                        }
                    }`;
                if (feedback[key].length === index + 1) {
                  query = `query listGithubIssues {${query} }`;
                  const githubQuery = {
                    'query': query,
                    'sourceUrl': key,
                    'source': (groupedList as any).feedback.source
                  }
                  query = '';
                  queryList.push(githubQuery);
                }
              } else if ((groupedList as any).feedback.source === 'JIRA') {
                query += `${groupedList.ticketUrl.split('/')[groupedList.ticketUrl.split('/').length - 1]} `;
                if (feedback[key].length === index + 1) {
                  const jiraQuery = {
                    'query': query,
                    'sourceUrl': key,
                    'source': (groupedList as any).feedback.source
                  }
                  query = '';
                  queryList.push(jiraQuery);
                }
              }
            });
          });
        }).then(async () => {
          timestampQuery = `query ListUsers {
            ${timestampQuery}
          }`;
          userData = await FeedbackIntegrationHelper.getUserProfiles(timestampQuery);
          queryList.map(async (queries: any) => {
            if (queries.source === 'GITLAB') {
              const gitlabPromise = new Promise(async (resolve, reject) => {
                const gitlabResponse: Array<object> = await FeedbackIntegrationHelper.listGitlabIssues(queries);
                resolve(gitlabResponse);
              }).catch((err: Error) => {
                throw err
              });
              promises.push(gitlabPromise)
            } else if (queries.source === 'GITHUB') {
              const githubPromise = new Promise(async (resolve, reject) => {
                const githubResponse: Array<object> = await FeedbackIntegrationHelper.listGithubIssues(queries);
                resolve(githubResponse);
              }).catch((err: Error) => {
                throw err
              });
              promises.push(githubPromise)
            } else if (queries.source === 'JIRA') {
              queries.query.trim().split(' ').map((issue: any) => {
                const jiraPromise = new Promise(async (resolve, reject) => {
                  const query = {
                    query: issue,
                    source: queries.source,
                    sourceUrl: queries.sourceUrl
                  };
                  const jiraResponse: any = await FeedbackIntegrationHelper.listJira(query);
                  resolve(jiraResponse);
                }).catch((err: Error) => {
                  throw err
                });
                promises.push(jiraPromise);
              });
            }
          });
        }).then(async () => {
          const responses = await Promise.all(promises).then((values) => _.flattenDeep(values));
          return feedbackList.map((feedback: FeedbackType) => {
            const selectedResponse = (responses.filter((response: any) => feedback.ticketUrl === (response.webUrl || response.url))[0] as any);
            feedback.state = selectedResponse.state;
            feedback.assignee = selectedResponse.assignee;
            (feedback as any).createdBy = userData.filter((user: any) => user.rhatUUID === feedback.createdBy)[0];
            (feedback as any).updatedBy = userData.filter((user: any) => user.rhatUUID === feedback.updatedBy)[0];
            return feedback;
          });
        }).catch((error: Error) => error);
    },
    listFeedback(root: any, args: any, ctx: any) {
      return Feedback.findById(args._id).exec()
        .then(response => response)
        .catch((error: Error) => error);
    },
  },
  Mutation: {
    async createFeedback(root: any, args: any, ctx: any) {
      let homeParam = {
        _id: args.input.config
      };
      let homeResponse = {
        feedback: {
          source: '',
          isActive: null,
          projectKey: null,
          sourceUrl: ''
        }
      };
      let apiResponse = {};
      (args.input.config) ? homeResponse = await FeedbackIntegrationHelper.getHomeType(homeParam) : '';
      switch (homeResponse.feedback.source) {
        case 'GITHUB':
          const query = {
            'githubIssueInput': {
              'title': args.input.summary,
              'body': args.input.description,
              'repositoryId': homeResponse.feedback.projectKey || process.env.PROJECT_KEY
            },
            'sourceUrl': homeResponse.feedback.sourceUrl
          };
          const githubResponse = await FeedbackIntegrationHelper.createGithubIssue(query);
          apiResponse = {
            ...args.input,
            ticketUrl: githubResponse.issue.url
          };
          break;
        case 'JIRA':
          const jiraQuery = {
            'jiraIssueInput': {
              'fields': {
                'project': {
                  'key': homeResponse.feedback.projectKey || process.env.PROJECT_KEY
                },
                'summary': `${args.input.summary}`,
                'description': `${args.input.description}`,
                'labels': ['Reported-via-One-Platform'],
                'issuetype': {
                  'name': 'Task'
                },
              }
            },
            'sourceUrl': homeResponse.feedback.sourceUrl
          };
          const jiraResponse = await FeedbackIntegrationHelper.createJira(jiraQuery);
          apiResponse = {
            ...args.input,
            ticketUrl: `https://${process.env.JIRA_HOST}/browse/${jiraResponse.key}`,
          };
          break;
        case 'GITLAB':
          const gitlabQuery: object = {
            'gitlabIssueInput': {
              'title': args.input.summary,
              'description': args.input.description,
              'projectPath': homeResponse.feedback.projectKey || process.env.PROJECT_KEY
            },
            'sourceUrl': homeResponse.feedback.sourceUrl
          }
          const gitlabResponse = await FeedbackIntegrationHelper.createGitlabIssue(gitlabQuery);
          apiResponse = {
            ...args.input,
            ticketUrl: gitlabResponse.webUrl
          };
          break;
        default:
          console.warn('Integration not Mentioned/Available');
          apiResponse = {
            ...args.input
          }
      }
      return new Feedback(apiResponse).save()
        .then((response: FeedbackType) => response)
        .catch((error: Error) => error);
    },
    updateFeedback(root: any, args: any, ctx: any) {
      return Feedback.findById(args.input._id)
        .then(response => {
          return Object.assign(response, args.input).save()
            .then((feedback: FeedbackType) => feedback);
        }).catch((err: Error) => err);
    },
    deleteFeedback(root: any, args: any, ctx: any) {
      return Feedback.findByIdAndRemove(args._id)
        .then(response => response)
        .catch((error: Error) => error);
    }
  }
};
