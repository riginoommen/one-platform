declare module '*.graphql';
declare module '*.json';

declare enum category {
    BUG='BUG',
    FEEDBACK='FEEDBACK'
}

type FeedbackUserProfileType = {
    name: string;
    uid: string;
    rhatUUID: string;
    email: string;
    url: string;
}

type FeedbackType = {
    summary: string;
    description: string;
    experience: string;
    config: string;
    state: string;
    source: string;
    ticketUrl: string;
    category: category;
    module: string;
    assignee: FeedbackUserProfileType
    createdOn: string;
    createdBy: string | FeedbackUserProfileType;
    updatedOn: string;
    updatedBy: string | FeedbackUserProfileType;
}
