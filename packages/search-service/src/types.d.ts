declare module '*.graphql';
declare module '*.json';

// define your types here
type Doc = {
    id: string;
    title: string;
    abstract: string;
    description: string;
    content_type: string;
    operation: string;
    icon: string;
    uri: string;
    tags: string[];
    timestamp: string;
    lastModifiedDate: string;
    createdDate: string;
    createdBy: string;
    lastModifiedBy: string;
};

type ResponseHeader = {
    zkConnected: boolean;
    status: number;
    QTime: number;
};

type ResponseContent = {
    numFound: number;
    start: number;
    docs: Doc[];
};

type SearchResponseType = {
    responseHeader: ResponseHeader;
    response: ResponseContent;
};

type SearchResponseCode = {
    status: number;
}
