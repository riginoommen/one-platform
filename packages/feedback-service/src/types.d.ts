declare module '*.graphql';
declare module '*.json';

declare enum mode {
    JIRA='JIRA',
    GITHUB='GITHUB',
    GITLAB='GITLAB'
}

declare enum category {
    BUG='BUG',
    FEEDBACK='FEEDBACK'
}

// define your types here
type FeedbackType = {
    summary: String;
    description: String;
    experience: String;
    mode: mode;
    ticketUrl: String;
    appName: String;
    category: category;
    createdOn: String;
    createdBy: String;
    updatedOn: String;
    updatedBy: String
}
