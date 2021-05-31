/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/typedef.graphql":
/*!*****************************!*\
  !*** ./src/typedef.graphql ***!
  \*****************************/
/***/ ((module) => {


    var doc = {"kind":"Document","definitions":[{"kind":"ScalarTypeDefinition","name":{"kind":"Name","value":"DateTime"},"directives":[]},{"kind":"EnumTypeDefinition","name":{"kind":"Name","value":"APIROLE"},"directives":[],"values":[{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"ADMIN"},"directives":[]},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"USER"},"directives":[]}]},{"kind":"EnumTypeDefinition","name":{"kind":"Name","value":"SOURCE"},"directives":[],"values":[{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"JIRA"},"directives":[]},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"GITHUB"},"directives":[]},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"GITLAB"},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"HomeFeedbackType"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"source"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"SOURCE"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"sourceUrl"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"isActive"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"projectKey"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"HomeFeedbackInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"source"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SOURCE"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"sourceUrl"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"isActive"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"projectKey"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"EnumTypeDefinition","name":{"kind":"Name","value":"APPLICATIONTYPE"},"directives":[],"values":[{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"BUILTIN"},"directives":[]},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"HOSTED"},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"PermissionsType"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"roverGroup"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"role"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"APIROLE"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Contacts"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"developers"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"qe"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"stakeholders"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"ContactsInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"developers"},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"qe"},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"stakeholders"},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"HomeUserType"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"_id"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"name"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"title"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"uid"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"rhatUUID"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"memberOf"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"isActive"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"apiRole"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"APIROLE"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdBy"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdOn"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"updatedBy"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"updatedOn"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"feedback"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"HomeFeedbackType"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"HomeIndexResponseCode"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"status"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"HomeType"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"_id"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"name"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"description"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"link"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"icon"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"entityType"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"colorScheme"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"videoUrl"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"owners"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUserType"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"contacts"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Contacts"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdBy"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUserType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdOn"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"updatedBy"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUserType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"updatedOn"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"active"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"applicationType"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"APPLICATIONTYPE"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"permissions"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PermissionsType"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"feedback"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"HomeFeedbackType"}},"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"PermissionsInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"roverGroup"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"role"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"APIROLE"}}},"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"HomeInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"_id"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"name"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"description"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"link"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"icon"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"entityType"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"colorScheme"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"videoUrl"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"owners"},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"contacts"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContactsInput"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"createdBy"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"createdOn"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"updatedBy"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"updatedOn"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"active"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"applicationType"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"APPLICATIONTYPE"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"permissions"},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PermissionsInput"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"feedback"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"HomeFeedbackInput"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"listHomeType"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"HomeType"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"getHomeType"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"_id"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"HomeType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"getHomeTypeBy"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"HomeInput"}},"directives":[]}],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"HomeType"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"getHomeTypeByUser"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"rhuuid"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"HomeType"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Mutation"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"createHomeType"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"HomeInput"}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"HomeType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"updateHomeType"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"HomeInput"}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"HomeType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"deleteHomeType"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"_id"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"HomeType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"updateHomeIndex"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"HomeIndexResponseCode"}},"directives":[]}]}],"loc":{"start":0,"end":2400}};
    doc.loc.source = {"body":"scalar DateTime\n\nenum APIROLE {\n  ADMIN\n  USER\n}\n\nenum SOURCE {\n  JIRA\n  GITHUB\n  GITLAB\n}\n\ntype HomeFeedbackType {\n  source: SOURCE\n  sourceUrl: String\n  isActive: Boolean\n  projectKey: String\n}\n\ninput HomeFeedbackInput {\n  source: SOURCE\n  sourceUrl: String\n  isActive: Boolean\n  projectKey: String\n}\n\nenum APPLICATIONTYPE {\n  BUILTIN\n  HOSTED\n}\ntype PermissionsType {\n  roverGroup: String\n  role: APIROLE\n}\ntype Contacts {\n  developers: [String]\n  qe: [String]\n  stakeholders: [String]\n}\ninput ContactsInput {\n  developers: [String]\n  qe: [String]\n  stakeholders: [String]\n}\ntype HomeUserType {\n  _id: String\n  name: String\n  title: String\n  uid: String\n  rhatUUID: String\n  memberOf: [String]\n  isActive: Boolean\n  apiRole: APIROLE\n  createdBy: String\n  createdOn: DateTime\n  updatedBy: String\n  updatedOn: DateTime\n  feedback: HomeFeedbackType\n\n}\n\ntype HomeIndexResponseCode {\n  status: Int\n}\n\ntype HomeType {\n  _id: String\n  name: String\n  description: String\n  link: String\n  icon: String\n  entityType: String\n  colorScheme: String\n  videoUrl: String\n  owners: [HomeUserType]\n  contacts: Contacts\n  createdBy: HomeUserType\n  createdOn: DateTime\n  updatedBy: HomeUserType\n  updatedOn: DateTime\n  active: Boolean\n  applicationType: APPLICATIONTYPE\n  permissions: [PermissionsType]\n  feedback: HomeFeedbackType\n}\ninput PermissionsInput {\n  roverGroup: String\n  role: APIROLE!\n}\ninput HomeInput {\n  _id: String\n  name: String\n  description: String\n  link: String\n  icon: String\n  entityType: String\n  colorScheme: String\n  videoUrl: String\n  owners: [String]\n  contacts: ContactsInput\n  createdBy: String\n  createdOn: DateTime\n  updatedBy: String\n  updatedOn: DateTime\n  active: Boolean\n  applicationType: APPLICATIONTYPE\n  permissions: [PermissionsInput]\n  feedback: HomeFeedbackInput\n}\n\ntype Query {\n  # Fetches all HomeType\n  listHomeType: [HomeType]\n  # Fetches specific HomeType by id\n  getHomeType(_id: String!): HomeType\n  # Fetches HomeType by any property\n  getHomeTypeBy(input: HomeInput): [HomeType]\n  # Fetches all HomeType for a user with rhuuid\n  getHomeTypeByUser(rhuuid: String!): [HomeType]\n}\n\ntype Mutation {\n  # Add HomeType\n  createHomeType(input: HomeInput): HomeType\n  # Update HomeType\n  updateHomeType(input: HomeInput): HomeType\n  # Delete HomeType by id\n  deleteHomeType(_id: String!): HomeType\n  # Update Home Index for Search\n  updateHomeIndex: HomeIndexResponseCode\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ }),

/***/ "./service.ts":
/*!********************!*\
  !*** ./service.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const dotenv_safe_1 = __importDefault(__webpack_require__(/*! dotenv-safe */ "dotenv-safe"));
if (false) {}
else {
    dotenv_safe_1.default.config();
}
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
const http_1 = __importDefault(__webpack_require__(/*! http */ "http"));
const mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ "mongoose"));
const typedef_graphql_1 = __importDefault(__webpack_require__(/*! ./src/typedef.graphql */ "./src/typedef.graphql"));
const resolver_1 = __webpack_require__(/*! ./src/resolver */ "./src/resolver.ts");
/* Setting port for the server */
const port = process.env.PORT || 8080;
const app = express_1.default();
/* Configuring Mongoose */
mongoose_1.default.plugin((schema) => { schema.options.usePushEach = true; });
mongoose_1.default.set('useNewUrlParser', true);
mongoose_1.default.set('useFindAndModify', false);
mongoose_1.default.set('useCreateIndex', true);
mongoose_1.default.set('useUnifiedTopology', true);
/* Establishing mongodb connection */
const dbCredentials = (process.env.DB_USER && process.env.DB_PASSWORD)
    ? `${process.env.DB_USER}:${process.env.DB_PASSWORD}@`
    : '';
const dbConnection = `mongodb://${dbCredentials}${process.env.DB_PATH}/${process.env.DB_NAME}`;
mongoose_1.default.connect(dbConnection, { useNewUrlParser: true, useCreateIndex: true }).catch(console.error);
mongoose_1.default.connection.on('error', error => {
    console.error(error);
});
/* Defining the Apollo Server */
const apollo = new apollo_server_express_1.ApolloServer({
    playground: "development" !== 'production',
    typeDefs: typedef_graphql_1.default,
    resolvers: resolver_1.HomeResolver,
    subscriptions: {
        path: '/subscriptions',
    },
    formatError: error => (Object.assign({ message: error.message, locations: error.locations, path: error.path }, error.extensions)),
    plugins: [
        {
            requestDidStart: (requestContext) => {
                var _a, _b;
                if ((_a = requestContext.request.http) === null || _a === void 0 ? void 0 : _a.headers.has('x-apollo-tracing')) {
                    return;
                }
                const query = (_b = requestContext.request.query) === null || _b === void 0 ? void 0 : _b.replace(/\s+/g, ' ').trim();
                const variables = JSON.stringify(requestContext.request.variables);
                console.log(new Date().toISOString(), `- [Request Started] { query: ${query}, variables: ${variables}, operationName: ${requestContext.request.operationName} }`);
                return;
            },
        },
    ]
});
/* Applying apollo middleware to express server */
apollo.applyMiddleware({ app });
/*  Creating the server based on the environment */
const server = http_1.default.createServer(app);
// Installing the apollo ws subscription handlers
apollo.installSubscriptionHandlers(server);
// Home
exports.default = server.listen({ port: port }, () => {
    console.log(`🚀 Microservice running on ${"development"} at ${port}${apollo.graphqlPath}`);
});


/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HomeHelper = exports.pubsub = void 0;
// write your helper functions here
const graphql_redis_subscriptions_1 = __webpack_require__(/*! graphql-redis-subscriptions */ "graphql-redis-subscriptions");
const fetch = __webpack_require__(/*! node-fetch */ "node-fetch");
const ioredis_1 = __importDefault(__webpack_require__(/*! ioredis */ "ioredis"));
global.Headers = fetch.Headers;
const redisOptions = {
    host: process.env.REDIS_SERVICE_HOST,
    port: Number.parseInt(process.env.REDIS_SERVICE_PORT || '6379', 10),
    retryStrategy: (times) => {
        return Math.min(times * 50, 2000);
    }
};
exports.pubsub = new graphql_redis_subscriptions_1.RedisPubSub({
    publisher: new ioredis_1.default(redisOptions),
    subscriber: new ioredis_1.default(redisOptions),
});
class HomeAPIHelper {
    constructor() {
        this.userFragment = `
        fragment user on UserType {
            _id
            name
            title
            uid
            rhatUUID
            memberOf
            isActive
            apiRole
            createdBy
            createdOn
            updatedBy
            updatedOn
        }`;
    }
    /**
     * Builds the graphql query according to the owners array in the homeType
     * @param response homeType(array of homeType) database response
     */
    buildGqlQuery(response) {
        return response.map((resp) => {
            let query = [];
            if (resp.owners.length) {
                query = resp.owners.map((rhatUUID) => `owner_${resp._id}_${rhatUUID.replace(/-/g, '')}:getUsersBy(rhatUUID: "${rhatUUID}"){ ...user }`);
            }
            if (!!resp.createdBy) {
                query.push(`createdBy_${resp._id}:getUsersBy(rhatUUID: "${resp.createdBy}"){ ...user }`);
            }
            if (!!resp.updatedBy) {
                query.push(`updatedBy_${resp._id}:getUsersBy(rhatUUID: "${resp.updatedBy}"){ ...user }`);
            }
            return query;
        });
    }
    /**
     * Fetches user details from the user-service using node-fetch
     * @param query gql query which would fetch information from the user-service
     */
    getUserDetails(query) {
        const body = `
            ${this.userFragment}
            query {
                ${query}
        }`;
        return fetch(`http://user-group-service:8080/graphql`, {
            method: 'post',
            body: JSON.stringify({ query: body }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((res) => res.json());
    }
    /**
     * Replaces the owners array(owners: string[]) with populated HomeUserType (owners: HomeUserType[])
     * @param response Database response
     * @param userDetails UserDetails which are fetched from user-service
     */
    stitchHomeType(response, userDetails) {
        return response.map((data) => {
            if (userDetails[`createdBy_${data._id}`]) {
                const resp = Object.assign(Object.assign({}, data), { createdBy: userDetails[`createdBy_${data._id}`][0] });
                if (resp.owners.length) {
                    Object.assign(resp.owners, Object.entries(userDetails).reduce((accumulator, user) => {
                        if (user[0].startsWith(`owner_${resp._id}`)) {
                            accumulator.push(...user[1]);
                        }
                        return accumulator;
                    }, []));
                }
                if (userDetails[`updatedBy_${data._id}`]) {
                    return Object.assign(Object.assign({}, resp), { updatedBy: userDetails[`updatedBy_${data._id}`][0] });
                }
                return resp;
            }
            return data;
        });
    }
    // Search Data formatter
    formatSearchInput(data) {
        var _a, _b;
        return {
            'id': data._id,
            'title': data.name,
            'abstract': data.description || '',
            'description': data.description || '',
            'icon': `assets/icons/home.svg`,
            'uri': process.env.CLIENT_URL + data.link,
            'tags': `Home, ${data.name}`,
            'contentType': 'Home',
            'createdBy': ((_a = data.createdBy) === null || _a === void 0 ? void 0 : _a.name) || '',
            'createdDate': (data === null || data === void 0 ? void 0 : data.createdOn) || new Date(),
            'lastModifiedBy': ((_b = data === null || data === void 0 ? void 0 : data.updatedBy) === null || _b === void 0 ? void 0 : _b.name) || '',
            'lastModifiedDate': (data === null || data === void 0 ? void 0 : data.updatedOn) || new Date()
        };
    }
    // Helper function to create/update/delete data to search microservice
    manageSearchIndex(data, mode) {
        let query = ``;
        if (mode === 'index') {
            query = `
      mutation ManageIndex($input: SearchInput) {
        manageIndex(input: $input) {
          status
        }
      }
      `;
        }
        else if (mode === 'delete') {
            query = `
        mutation DeleteIndex($id: String) {
          deleteIndex(id: $id) {
            status
          }
        }
      `;
        }
        let headers = new Headers();
        let body = JSON.stringify({
            query: query,
            variables: data
        });
        headers.append(`Authorization`, `${process.env.GATEWAY_AUTH_TOKEN}`);
        headers.append(`Content-Type`, `application/json`);
        return fetch(`${process.env.API_GATEWAY}`, {
            method: `POST`,
            headers,
            body: body,
        }).then((response) => response.json())
            .then((result) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
            if ((((_b = (_a = result.data) === null || _a === void 0 ? void 0 : _a.manageIndex) === null || _b === void 0 ? void 0 : _b.status) === 200) || (((_d = (_c = result === null || result === void 0 ? void 0 : result.data) === null || _c === void 0 ? void 0 : _c.deleteIndex) === null || _d === void 0 ? void 0 : _d.status) === 204)) {
                console.log('Sucessfully completed the index updation');
                return ((_f = (_e = result.data) === null || _e === void 0 ? void 0 : _e.manageIndex) === null || _f === void 0 ? void 0 : _f.status) || ((_h = (_g = result === null || result === void 0 ? void 0 : result.data) === null || _g === void 0 ? void 0 : _g.deleteIndex) === null || _h === void 0 ? void 0 : _h.status);
            }
            else if ((((_k = (_j = result === null || result === void 0 ? void 0 : result.data) === null || _j === void 0 ? void 0 : _j.manageIndex) === null || _k === void 0 ? void 0 : _k.status) !== 200) || (((_m = (_l = result === null || result === void 0 ? void 0 : result.data) === null || _l === void 0 ? void 0 : _l.deleteIndex) === null || _m === void 0 ? void 0 : _m.status) !== 204)) {
                console.log("Error in index updation.");
                return ((_p = (_o = result.data) === null || _o === void 0 ? void 0 : _o.manageIndex) === null || _p === void 0 ? void 0 : _p.status) || ((_r = (_q = result === null || result === void 0 ? void 0 : result.data) === null || _q === void 0 ? void 0 : _q.deleteIndex) === null || _r === void 0 ? void 0 : _r.status);
            }
        })
            .catch((err) => {
            throw err;
        });
    }
}
exports.HomeHelper = new HomeAPIHelper();


/***/ }),

/***/ "./src/resolver.ts":
/*!*************************!*\
  !*** ./src/resolver.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HomeResolver = void 0;
const schema_1 = __webpack_require__(/*! ./schema */ "./src/schema.ts");
const helpers_1 = __webpack_require__(/*! ./helpers */ "./src/helpers.ts");
exports.HomeResolver = {
    Query: {
        listHomeType(root, args, ctx) {
            return schema_1.Home.find().lean()
                .then((response) => {
                const query = `${helpers_1.HomeHelper.buildGqlQuery(response)}`;
                return helpers_1.HomeHelper.getUserDetails(query).then((userDetails) => {
                    return helpers_1.HomeHelper.stitchHomeType(response, userDetails.data);
                });
            })
                .catch((err) => err);
        },
        getHomeType(root, args, ctx) {
            return schema_1.Home.findById(args._id).lean()
                .then((response) => {
                if (response !== null) {
                    const query = `${helpers_1.HomeHelper.buildGqlQuery([response])}`;
                    return helpers_1.HomeHelper.getUserDetails(query).then((userDetails) => {
                        return helpers_1.HomeHelper.stitchHomeType([response], userDetails.data)[0];
                    });
                }
            })
                .catch((err) => err);
        },
        getHomeTypeBy(root, args, ctx) {
            return schema_1.Home.find(args.input).lean()
                .then((response) => {
                const builtQuery = `${helpers_1.HomeHelper.buildGqlQuery(response)}`;
                return helpers_1.HomeHelper.getUserDetails(builtQuery).then((userDetails) => {
                    return helpers_1.HomeHelper.stitchHomeType(response, userDetails.data);
                });
            })
                .catch((err) => err);
        },
        getHomeTypeByUser(root, args, ctx) {
            return schema_1.Home.find({ 'owners': { '$in': [args.rhuuid] } }).lean()
                .then((response) => {
                const builtQuery = `${helpers_1.HomeHelper.buildGqlQuery(response)}`;
                return helpers_1.HomeHelper.getUserDetails(builtQuery).then((userDetails) => {
                    return helpers_1.HomeHelper.stitchHomeType(response, userDetails.data);
                });
            })
                .catch((err) => err);
        }
    },
    Mutation: {
        createHomeType(root, args, ctx) {
            const data = new schema_1.Home(args.input);
            return data.save()
                .then((response) => {
                if (response !== null) {
                    const resp = Object.assign({}, Object.assign({}, response)._doc);
                    const query = `${helpers_1.HomeHelper.buildGqlQuery([resp])}`;
                    return helpers_1.HomeHelper.getUserDetails(query).then((userDetails) => {
                        const homeResponse = helpers_1.HomeHelper.stitchHomeType([resp], userDetails.data)[0];
                        if (homeResponse.active) {
                            const documentInput = helpers_1.HomeHelper.formatSearchInput(homeResponse);
                            const indexInput = {
                                'input': {
                                    'dataSource': 'oneportal',
                                    'documents': documentInput
                                }
                            };
                            helpers_1.HomeHelper.manageSearchIndex(indexInput, 'index');
                        }
                        return homeResponse;
                    });
                }
            })
                .catch(err => err);
        },
        updateHomeType(root, args, ctx) {
            return schema_1.Home.findById(args.input._id)
                .then((response) => {
                return Object.assign(response, args.input)
                    .save()
                    .then((data) => {
                    const resp = Object.assign({}, Object.assign({}, data)._doc);
                    if (resp !== null) {
                        const query = `${helpers_1.HomeHelper.buildGqlQuery([resp])}`;
                        return helpers_1.HomeHelper.getUserDetails(query).then((userDetails) => {
                            const homeResponse = helpers_1.HomeHelper.stitchHomeType([resp], userDetails.data)[0];
                            if (homeResponse.active) {
                                const searchInput = helpers_1.HomeHelper.formatSearchInput(homeResponse);
                                helpers_1.HomeHelper.manageSearchIndex(searchInput, 'index');
                            }
                            return homeResponse;
                        });
                    }
                });
            })
                .catch((err) => err);
        },
        deleteHomeType(root, args, ctx) {
            return schema_1.Home.findByIdAndRemove(args._id)
                .then((response) => {
                if (response !== null) {
                    let id = {
                        'id': args._id
                    };
                    helpers_1.HomeHelper.manageSearchIndex(id, 'delete');
                    const resp = Object.assign({}, Object.assign({}, response)._doc);
                    const query = `${helpers_1.HomeHelper.buildGqlQuery([resp])}`;
                    return helpers_1.HomeHelper.getUserDetails(query).then((userDetails) => {
                        return helpers_1.HomeHelper.stitchHomeType([resp], userDetails.data)[0];
                    });
                }
            })
                .catch(err => err);
        },
        updateHomeIndex(root, args, ctx) {
            let documentInput = [];
            return schema_1.Home.find().lean()
                .then((response) => {
                const query = `${helpers_1.HomeHelper.buildGqlQuery(response)}`;
                return helpers_1.HomeHelper.getUserDetails(query).then((userDetails) => __awaiter(this, void 0, void 0, function* () {
                    const homeResponse = helpers_1.HomeHelper.stitchHomeType(response, userDetails.data);
                    yield homeResponse.map((response) => __awaiter(this, void 0, void 0, function* () {
                        if (response.active) {
                            documentInput.push(helpers_1.HomeHelper.formatSearchInput(response));
                        }
                    }));
                    const indexInput = {
                        'input': {
                            'dataSource': 'oneportal',
                            'documents': documentInput
                        }
                    };
                    const indexResponse = yield helpers_1.HomeHelper.manageSearchIndex(indexInput, 'index');
                    return {
                        status: indexResponse
                    };
                }));
            })
                .catch((err) => err);
        }
    }
};


/***/ }),

/***/ "./src/schema.ts":
/*!***********************!*\
  !*** ./src/schema.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Home = exports.HomeServiceSchema = void 0;
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
exports.HomeServiceSchema = new mongoose_1.Schema({
    name: { type: String, index: { unique: true } },
    description: { type: String },
    link: { type: String },
    icon: { type: String },
    entityType: { type: String },
    colorScheme: { type: String },
    videoUrl: { type: String },
    owners: { type: [String] },
    createdBy: { type: String, required: true },
    createdOn: { type: Date, default: Date.now, },
    updatedBy: { type: String },
    updatedOn: { type: Date, default: Date.now, },
    active: { type: Boolean, default: false },
    applicationType: {
        type: String,
        enum: [
            'BUILTIN',
            'HOSTED'
        ],
        required: true,
    },
    contacts: {
        developers: [String],
        qe: [String],
        stakeholders: [String],
    },
    permissions: [
        {
            roverGroup: String,
            role: {
                type: String,
                enum: ['ADMIN', 'USER'],
                required: true,
            }
        }
    ],
    feedback: {
        source: { type: String, enum: ['JIRA', 'GITHUB', 'GITLAB'] },
        sourceUrl: { type: String },
        isActive: { type: Boolean },
        projectKey: { type: String },
    },
});
exports.Home = mongoose_1.model('Home', exports.HomeServiceSchema);


/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("apollo-server-express");;

/***/ }),

/***/ "dotenv-safe":
/*!******************************!*\
  !*** external "dotenv-safe" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv-safe");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "graphql-redis-subscriptions":
/*!**********************************************!*\
  !*** external "graphql-redis-subscriptions" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("graphql-redis-subscriptions");;

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");;

/***/ }),

/***/ "ioredis":
/*!**************************!*\
  !*** external "ioredis" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("ioredis");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");;

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node-fetch");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./service.ts");
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLy4vc3JjL3R5cGVkZWYuZ3JhcGhxbCIsIndlYnBhY2s6Ly9ob21lLy4vc2VydmljZS50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9yZXNvbHZlci50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL3NjaGVtYS50cyIsIndlYnBhY2s6Ly9ob21lL2V4dGVybmFsIFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIiLCJ3ZWJwYWNrOi8vaG9tZS9leHRlcm5hbCBcImRvdGVudi1zYWZlXCIiLCJ3ZWJwYWNrOi8vaG9tZS9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9ob21lL2V4dGVybmFsIFwiZ3JhcGhxbC1yZWRpcy1zdWJzY3JpcHRpb25zXCIiLCJ3ZWJwYWNrOi8vaG9tZS9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly9ob21lL2V4dGVybmFsIFwiaW9yZWRpc1wiIiwid2VicGFjazovL2hvbWUvZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovL2hvbWUvZXh0ZXJuYWwgXCJub2RlLWZldGNoXCIiLCJ3ZWJwYWNrOi8vaG9tZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ob21lL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsZUFBZSxrQ0FBa0Msc0NBQXNDLGlDQUFpQyxpQkFBaUIsRUFBRSxvQ0FBb0MsZ0NBQWdDLDRCQUE0QixxQ0FBcUMsOEJBQThCLGlCQUFpQixFQUFFLHFDQUFxQyw2QkFBNkIsaUJBQWlCLEVBQUUsRUFBRSxvQ0FBb0MsK0JBQStCLDRCQUE0QixxQ0FBcUMsNkJBQTZCLGlCQUFpQixFQUFFLHFDQUFxQywrQkFBK0IsaUJBQWlCLEVBQUUscUNBQXFDLCtCQUErQixpQkFBaUIsRUFBRSxFQUFFLHNDQUFzQyx5Q0FBeUMsNENBQTRDLGlDQUFpQywrQkFBK0Is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SUFDRCxXQUFXLEVBQUU7UUFDVDtZQUNJLFVBQVUsRUFBRSxNQUFNO1lBQ2xCLElBQUksRUFBRTtnQkFDRixJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO2dCQUN2QixRQUFRLEVBQUUsSUFBSTthQUNqQjtTQUNKO0tBQ0o7SUFDRCxRQUFRLEVBQUU7UUFDTixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFFLEVBQUU7UUFDOUQsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtRQUMzQixRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1FBQzNCLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7S0FDL0I7Q0FDSixDQUFDLENBQUM7QUFNVSxZQUFJLEdBQXFCLGdCQUFLLENBQTZCLE1BQU0sRUFBRSx5QkFBaUIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUNuRG5HLG1EOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7O1VDckJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIHZhciBkb2MgPSB7XCJraW5kXCI6XCJEb2N1bWVudFwiLFwiZGVmaW5pdGlvbnNcIjpbe1wia2luZFwiOlwiU2NhbGFyVHlwZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiRGF0ZVRpbWVcIn0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkVudW1UeXBlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJBUElST0xFXCJ9LFwiZGlyZWN0aXZlc1wiOltdLFwidmFsdWVzXCI6W3tcImtpbmRcIjpcIkVudW1WYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiQURNSU5cIn0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkVudW1WYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiVVNFUlwifSxcImRpcmVjdGl2ZXNcIjpbXX1dfSx7XCJraW5kXCI6XCJFbnVtVHlwZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU09VUkNFXCJ9LFwiZGlyZWN0aXZlc1wiOltdLFwidmFsdWVzXCI6W3tcImtpbmRcIjpcIkVudW1WYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiSklSQVwifSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRW51bVZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJHSVRIVUJcIn0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkVudW1WYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiR0lUTEFCXCJ9LFwiZGlyZWN0aXZlc1wiOltdfV19LHtcImtpbmRcIjpcIk9iamVjdFR5cGVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkhvbWVGZWVkYmFja1R5cGVcIn0sXCJpbnRlcmZhY2VzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJmaWVsZHNcIjpbe1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInNvdXJjZVwifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTT1VSQ0VcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic291cmNlVXJsXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpc0FjdGl2ZVwifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJCb29sZWFuXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInByb2plY3RLZXlcIn0sXCJhcmd1bWVudHNcIjpbXSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX1dfSx7XCJraW5kXCI6XCJJbnB1dE9iamVjdFR5cGVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkhvbWVGZWVkYmFja0lucHV0XCJ9LFwiZGlyZWN0aXZlc1wiOltdLFwiZmllbGRzXCI6W3tcImtpbmRcIjpcIklucHV0VmFsdWVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInNvdXJjZVwifSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU09VUkNFXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic291cmNlVXJsXCJ9LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpc0FjdGl2ZVwifSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiQm9vbGVhblwifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIklucHV0VmFsdWVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInByb2plY3RLZXlcIn0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX0sXCJkaXJlY3RpdmVzXCI6W119XX0se1wia2luZFwiOlwiRW51bVR5cGVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkFQUExJQ0FUSU9OVFlQRVwifSxcImRpcmVjdGl2ZXNcIjpbXSxcInZhbHVlc1wiOlt7XCJraW5kXCI6XCJFbnVtVmFsdWVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkJVSUxUSU5cIn0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkVudW1WYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiSE9TVEVEXCJ9LFwiZGlyZWN0aXZlc1wiOltdfV19LHtcImtpbmRcIjpcIk9iamVjdFR5cGVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlBlcm1pc3Npb25zVHlwZVwifSxcImludGVyZmFjZXNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcImZpZWxkc1wiOlt7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicm92ZXJHcm91cFwifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicm9sZVwifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJBUElST0xFXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX1dfSx7XCJraW5kXCI6XCJPYmplY3RUeXBlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJDb250YWN0c1wifSxcImludGVyZmFjZXNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcImZpZWxkc1wiOlt7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZGV2ZWxvcGVyc1wifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIkxpc3RUeXBlXCIsXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicWVcIn0sXCJhcmd1bWVudHNcIjpbXSxcInR5cGVcIjp7XCJraW5kXCI6XCJMaXN0VHlwZVwiLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInN0YWtlaG9sZGVyc1wifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIkxpc3RUeXBlXCIsXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX19LFwiZGlyZWN0aXZlc1wiOltdfV19LHtcImtpbmRcIjpcIklucHV0T2JqZWN0VHlwZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiQ29udGFjdHNJbnB1dFwifSxcImRpcmVjdGl2ZXNcIjpbXSxcImZpZWxkc1wiOlt7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJkZXZlbG9wZXJzXCJ9LFwidHlwZVwiOntcImtpbmRcIjpcIkxpc3RUeXBlXCIsXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJxZVwifSxcInR5cGVcIjp7XCJraW5kXCI6XCJMaXN0VHlwZVwiLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic3Rha2Vob2xkZXJzXCJ9LFwidHlwZVwiOntcImtpbmRcIjpcIkxpc3RUeXBlXCIsXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX19LFwiZGlyZWN0aXZlc1wiOltdfV19LHtcImtpbmRcIjpcIk9iamVjdFR5cGVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkhvbWVVc2VyVHlwZVwifSxcImludGVyZmFjZXNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcImZpZWxkc1wiOlt7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiX2lkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJuYW1lXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0aXRsZVwifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidWlkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJyaGF0VVVJRFwifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibWVtYmVyT2ZcIn0sXCJhcmd1bWVudHNcIjpbXSxcInR5cGVcIjp7XCJraW5kXCI6XCJMaXN0VHlwZVwiLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlzQWN0aXZlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkJvb2xlYW5cIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiYXBpUm9sZVwifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJBUElST0xFXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNyZWF0ZWRCeVwifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY3JlYXRlZE9uXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkRhdGVUaW1lXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInVwZGF0ZWRCeVwifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidXBkYXRlZE9uXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkRhdGVUaW1lXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImZlZWRiYWNrXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkhvbWVGZWVkYmFja1R5cGVcIn19LFwiZGlyZWN0aXZlc1wiOltdfV19LHtcImtpbmRcIjpcIk9iamVjdFR5cGVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkhvbWVJbmRleFJlc3BvbnNlQ29kZVwifSxcImludGVyZmFjZXNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcImZpZWxkc1wiOlt7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic3RhdHVzXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkludFwifX0sXCJkaXJlY3RpdmVzXCI6W119XX0se1wia2luZFwiOlwiT2JqZWN0VHlwZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiSG9tZVR5cGVcIn0sXCJpbnRlcmZhY2VzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJmaWVsZHNcIjpbe1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIl9pZFwifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibmFtZVwifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZGVzY3JpcHRpb25cIn0sXCJhcmd1bWVudHNcIjpbXSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImxpbmtcIn0sXCJhcmd1bWVudHNcIjpbXSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImljb25cIn0sXCJhcmd1bWVudHNcIjpbXSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImVudGl0eVR5cGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNvbG9yU2NoZW1lXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ2aWRlb1VybFwifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwib3duZXJzXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTGlzdFR5cGVcIixcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiSG9tZVVzZXJUeXBlXCJ9fX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjb250YWN0c1wifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJDb250YWN0c1wifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjcmVhdGVkQnlcIn0sXCJhcmd1bWVudHNcIjpbXSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiSG9tZVVzZXJUeXBlXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNyZWF0ZWRPblwifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJEYXRlVGltZVwifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1cGRhdGVkQnlcIn0sXCJhcmd1bWVudHNcIjpbXSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiSG9tZVVzZXJUeXBlXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInVwZGF0ZWRPblwifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJEYXRlVGltZVwifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJhY3RpdmVcIn0sXCJhcmd1bWVudHNcIjpbXSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiQm9vbGVhblwifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJhcHBsaWNhdGlvblR5cGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiQVBQTElDQVRJT05UWVBFXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInBlcm1pc3Npb25zXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTGlzdFR5cGVcIixcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiUGVybWlzc2lvbnNUeXBlXCJ9fX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJmZWVkYmFja1wifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJIb21lRmVlZGJhY2tUeXBlXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX1dfSx7XCJraW5kXCI6XCJJbnB1dE9iamVjdFR5cGVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlBlcm1pc3Npb25zSW5wdXRcIn0sXCJkaXJlY3RpdmVzXCI6W10sXCJmaWVsZHNcIjpbe1wia2luZFwiOlwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicm92ZXJHcm91cFwifSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicm9sZVwifSxcInR5cGVcIjp7XCJraW5kXCI6XCJOb25OdWxsVHlwZVwiLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJBUElST0xFXCJ9fX0sXCJkaXJlY3RpdmVzXCI6W119XX0se1wia2luZFwiOlwiSW5wdXRPYmplY3RUeXBlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJIb21lSW5wdXRcIn0sXCJkaXJlY3RpdmVzXCI6W10sXCJmaWVsZHNcIjpbe1wia2luZFwiOlwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiX2lkXCJ9LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJuYW1lXCJ9LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJkZXNjcmlwdGlvblwifSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibGlua1wifSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWNvblwifSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZW50aXR5VHlwZVwifSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY29sb3JTY2hlbWVcIn0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIklucHV0VmFsdWVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInZpZGVvVXJsXCJ9LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJvd25lcnNcIn0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTGlzdFR5cGVcIixcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIklucHV0VmFsdWVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNvbnRhY3RzXCJ9LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJDb250YWN0c0lucHV0XCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY3JlYXRlZEJ5XCJ9LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjcmVhdGVkT25cIn0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkRhdGVUaW1lXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidXBkYXRlZEJ5XCJ9LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1cGRhdGVkT25cIn0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkRhdGVUaW1lXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiYWN0aXZlXCJ9LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJCb29sZWFuXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiYXBwbGljYXRpb25UeXBlXCJ9LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJBUFBMSUNBVElPTlRZUEVcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJwZXJtaXNzaW9uc1wifSxcInR5cGVcIjp7XCJraW5kXCI6XCJMaXN0VHlwZVwiLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJQZXJtaXNzaW9uc0lucHV0XCJ9fX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIklucHV0VmFsdWVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImZlZWRiYWNrXCJ9LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJIb21lRmVlZGJhY2tJbnB1dFwifX0sXCJkaXJlY3RpdmVzXCI6W119XX0se1wia2luZFwiOlwiT2JqZWN0VHlwZURlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiUXVlcnlcIn0sXCJpbnRlcmZhY2VzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJmaWVsZHNcIjpbe1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImxpc3RIb21lVHlwZVwifSxcImFyZ3VtZW50c1wiOltdLFwidHlwZVwiOntcImtpbmRcIjpcIkxpc3RUeXBlXCIsXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkhvbWVUeXBlXCJ9fX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJnZXRIb21lVHlwZVwifSxcImFyZ3VtZW50c1wiOlt7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJfaWRcIn0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTm9uTnVsbFR5cGVcIixcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fX0sXCJkaXJlY3RpdmVzXCI6W119XSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiSG9tZVR5cGVcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZ2V0SG9tZVR5cGVCeVwifSxcImFyZ3VtZW50c1wiOlt7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpbnB1dFwifSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiSG9tZUlucHV0XCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX1dLFwidHlwZVwiOntcImtpbmRcIjpcIkxpc3RUeXBlXCIsXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkhvbWVUeXBlXCJ9fX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJnZXRIb21lVHlwZUJ5VXNlclwifSxcImFyZ3VtZW50c1wiOlt7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJyaHV1aWRcIn0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTm9uTnVsbFR5cGVcIixcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fX0sXCJkaXJlY3RpdmVzXCI6W119XSxcInR5cGVcIjp7XCJraW5kXCI6XCJMaXN0VHlwZVwiLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJIb21lVHlwZVwifX19LFwiZGlyZWN0aXZlc1wiOltdfV19LHtcImtpbmRcIjpcIk9iamVjdFR5cGVEZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIk11dGF0aW9uXCJ9LFwiaW50ZXJmYWNlc1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwiZmllbGRzXCI6W3tcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjcmVhdGVIb21lVHlwZVwifSxcImFyZ3VtZW50c1wiOlt7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpbnB1dFwifSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiSG9tZUlucHV0XCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX1dLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJIb21lVHlwZVwifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1cGRhdGVIb21lVHlwZVwifSxcImFyZ3VtZW50c1wiOlt7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpbnB1dFwifSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiSG9tZUlucHV0XCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX1dLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJIb21lVHlwZVwifX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJkZWxldGVIb21lVHlwZVwifSxcImFyZ3VtZW50c1wiOlt7XCJraW5kXCI6XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJfaWRcIn0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTm9uTnVsbFR5cGVcIixcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fX0sXCJkaXJlY3RpdmVzXCI6W119XSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiSG9tZVR5cGVcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidXBkYXRlSG9tZUluZGV4XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkhvbWVJbmRleFJlc3BvbnNlQ29kZVwifX0sXCJkaXJlY3RpdmVzXCI6W119XX1dLFwibG9jXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MjQwMH19O1xuICAgIGRvYy5sb2Muc291cmNlID0ge1wiYm9keVwiOlwic2NhbGFyIERhdGVUaW1lXFxuXFxuZW51bSBBUElST0xFIHtcXG4gIEFETUlOXFxuICBVU0VSXFxufVxcblxcbmVudW0gU09VUkNFIHtcXG4gIEpJUkFcXG4gIEdJVEhVQlxcbiAgR0lUTEFCXFxufVxcblxcbnR5cGUgSG9tZUZlZWRiYWNrVHlwZSB7XFxuICBzb3VyY2U6IFNPVVJDRVxcbiAgc291cmNlVXJsOiBTdHJpbmdcXG4gIGlzQWN0aXZlOiBCb29sZWFuXFxuICBwcm9qZWN0S2V5OiBTdHJpbmdcXG59XFxuXFxuaW5wdXQgSG9tZUZlZWRiYWNrSW5wdXQge1xcbiAgc291cmNlOiBTT1VSQ0VcXG4gIHNvdXJjZVVybDogU3RyaW5nXFxuICBpc0FjdGl2ZTogQm9vbGVhblxcbiAgcHJvamVjdEtleTogU3RyaW5nXFxufVxcblxcbmVudW0gQVBQTElDQVRJT05UWVBFIHtcXG4gIEJVSUxUSU5cXG4gIEhPU1RFRFxcbn1cXG50eXBlIFBlcm1pc3Npb25zVHlwZSB7XFxuICByb3Zlckdyb3VwOiBTdHJpbmdcXG4gIHJvbGU6IEFQSVJPTEVcXG59XFxudHlwZSBDb250YWN0cyB7XFxuICBkZXZlbG9wZXJzOiBbU3RyaW5nXVxcbiAgcWU6IFtTdHJpbmddXFxuICBzdGFrZWhvbGRlcnM6IFtTdHJpbmddXFxufVxcbmlucHV0IENvbnRhY3RzSW5wdXQge1xcbiAgZGV2ZWxvcGVyczogW1N0cmluZ11cXG4gIHFlOiBbU3RyaW5nXVxcbiAgc3Rha2Vob2xkZXJzOiBbU3RyaW5nXVxcbn1cXG50eXBlIEhvbWVVc2VyVHlwZSB7XFxuICBfaWQ6IFN0cmluZ1xcbiAgbmFtZTogU3RyaW5nXFxuICB0aXRsZTogU3RyaW5nXFxuICB1aWQ6IFN0cmluZ1xcbiAgcmhhdFVVSUQ6IFN0cmluZ1xcbiAgbWVtYmVyT2Y6IFtTdHJpbmddXFxuICBpc0FjdGl2ZTogQm9vbGVhblxcbiAgYXBpUm9sZTogQVBJUk9MRVxcbiAgY3JlYXRlZEJ5OiBTdHJpbmdcXG4gIGNyZWF0ZWRPbjogRGF0ZVRpbWVcXG4gIHVwZGF0ZWRCeTogU3RyaW5nXFxuICB1cGRhdGVkT246IERhdGVUaW1lXFxuICBmZWVkYmFjazogSG9tZUZlZWRiYWNrVHlwZVxcblxcbn1cXG5cXG50eXBlIEhvbWVJbmRleFJlc3BvbnNlQ29kZSB7XFxuICBzdGF0dXM6IEludFxcbn1cXG5cXG50eXBlIEhvbWVUeXBlIHtcXG4gIF9pZDogU3RyaW5nXFxuICBuYW1lOiBTdHJpbmdcXG4gIGRlc2NyaXB0aW9uOiBTdHJpbmdcXG4gIGxpbms6IFN0cmluZ1xcbiAgaWNvbjogU3RyaW5nXFxuICBlbnRpdHlUeXBlOiBTdHJpbmdcXG4gIGNvbG9yU2NoZW1lOiBTdHJpbmdcXG4gIHZpZGVvVXJsOiBTdHJpbmdcXG4gIG93bmVyczogW0hvbWVVc2VyVHlwZV1cXG4gIGNvbnRhY3RzOiBDb250YWN0c1xcbiAgY3JlYXRlZEJ5OiBIb21lVXNlclR5cGVcXG4gIGNyZWF0ZWRPbjogRGF0ZVRpbWVcXG4gIHVwZGF0ZWRCeTogSG9tZVVzZXJUeXBlXFxuICB1cGRhdGVkT246IERhdGVUaW1lXFxuICBhY3RpdmU6IEJvb2xlYW5cXG4gIGFwcGxpY2F0aW9uVHlwZTogQVBQTElDQVRJT05UWVBFXFxuICBwZXJtaXNzaW9uczogW1Blcm1pc3Npb25zVHlwZV1cXG4gIGZlZWRiYWNrOiBIb21lRmVlZGJhY2tUeXBlXFxufVxcbmlucHV0IFBlcm1pc3Npb25zSW5wdXQge1xcbiAgcm92ZXJHcm91cDogU3RyaW5nXFxuICByb2xlOiBBUElST0xFIVxcbn1cXG5pbnB1dCBIb21lSW5wdXQge1xcbiAgX2lkOiBTdHJpbmdcXG4gIG5hbWU6IFN0cmluZ1xcbiAgZGVzY3JpcHRpb246IFN0cmluZ1xcbiAgbGluazogU3RyaW5nXFxuICBpY29uOiBTdHJpbmdcXG4gIGVudGl0eVR5cGU6IFN0cmluZ1xcbiAgY29sb3JTY2hlbWU6IFN0cmluZ1xcbiAgdmlkZW9Vcmw6IFN0cmluZ1xcbiAgb3duZXJzOiBbU3RyaW5nXVxcbiAgY29udGFjdHM6IENvbnRhY3RzSW5wdXRcXG4gIGNyZWF0ZWRCeTogU3RyaW5nXFxuICBjcmVhdGVkT246IERhdGVUaW1lXFxuICB1cGRhdGVkQnk6IFN0cmluZ1xcbiAgdXBkYXRlZE9uOiBEYXRlVGltZVxcbiAgYWN0aXZlOiBCb29sZWFuXFxuICBhcHBsaWNhdGlvblR5cGU6IEFQUExJQ0FUSU9OVFlQRVxcbiAgcGVybWlzc2lvbnM6IFtQZXJtaXNzaW9uc0lucHV0XVxcbiAgZmVlZGJhY2s6IEhvbWVGZWVkYmFja0lucHV0XFxufVxcblxcbnR5cGUgUXVlcnkge1xcbiAgIyBGZXRjaGVzIGFsbCBIb21lVHlwZVxcbiAgbGlzdEhvbWVUeXBlOiBbSG9tZVR5cGVdXFxuICAjIEZldGNoZXMgc3BlY2lmaWMgSG9tZVR5cGUgYnkgaWRcXG4gIGdldEhvbWVUeXBlKF9pZDogU3RyaW5nISk6IEhvbWVUeXBlXFxuICAjIEZldGNoZXMgSG9tZVR5cGUgYnkgYW55IHByb3BlcnR5XFxuICBnZXRIb21lVHlwZUJ5KGlucHV0OiBIb21lSW5wdXQpOiBbSG9tZVR5cGVdXFxuICAjIEZldGNoZXMgYWxsIEhvbWVUeXBlIGZvciBhIHVzZXIgd2l0aCByaHV1aWRcXG4gIGdldEhvbWVUeXBlQnlVc2VyKHJodXVpZDogU3RyaW5nISk6IFtIb21lVHlwZV1cXG59XFxuXFxudHlwZSBNdXRhdGlvbiB7XFxuICAjIEFkZCBIb21lVHlwZVxcbiAgY3JlYXRlSG9tZVR5cGUoaW5wdXQ6IEhvbWVJbnB1dCk6IEhvbWVUeXBlXFxuICAjIFVwZGF0ZSBIb21lVHlwZVxcbiAgdXBkYXRlSG9tZVR5cGUoaW5wdXQ6IEhvbWVJbnB1dCk6IEhvbWVUeXBlXFxuICAjIERlbGV0ZSBIb21lVHlwZSBieSBpZFxcbiAgZGVsZXRlSG9tZVR5cGUoX2lkOiBTdHJpbmchKTogSG9tZVR5cGVcXG4gICMgVXBkYXRlIEhvbWUgSW5kZXggZm9yIFNlYXJjaFxcbiAgdXBkYXRlSG9tZUluZGV4OiBIb21lSW5kZXhSZXNwb25zZUNvZGVcXG59XFxuXCIsXCJuYW1lXCI6XCJHcmFwaFFMIHJlcXVlc3RcIixcImxvY2F0aW9uT2Zmc2V0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoxfX07XG4gIFxuXG4gICAgdmFyIG5hbWVzID0ge307XG4gICAgZnVuY3Rpb24gdW5pcXVlKGRlZnMpIHtcbiAgICAgIHJldHVybiBkZWZzLmZpbHRlcihcbiAgICAgICAgZnVuY3Rpb24oZGVmKSB7XG4gICAgICAgICAgaWYgKGRlZi5raW5kICE9PSAnRnJhZ21lbnREZWZpbml0aW9uJykgcmV0dXJuIHRydWU7XG4gICAgICAgICAgdmFyIG5hbWUgPSBkZWYubmFtZS52YWx1ZVxuICAgICAgICAgIGlmIChuYW1lc1tuYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYW1lc1tuYW1lXSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gIFxuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IGRvYztcbiAgICBcbiIsImltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52LXNhZmUnO1xuaWYgKCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnICkge1xuICBkb3RlbnYuY29uZmlnKCB7IHBhdGg6ICcudGVzdC5lbnYnIH0gKTtcbn0gZWxzZSB7XG4gIGRvdGVudi5jb25maWcoKTtcbn1cblxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBBcG9sbG9TZXJ2ZXIgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnO1xuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5pbXBvcnQgZ3FsU2NoZW1hIGZyb20gJy4vc3JjL3R5cGVkZWYuZ3JhcGhxbCc7XG5pbXBvcnQgeyBIb21lUmVzb2x2ZXIgYXMgcmVzb2x2ZXIgfSBmcm9tICcuL3NyYy9yZXNvbHZlcic7XG5cbi8qIFNldHRpbmcgcG9ydCBmb3IgdGhlIHNlcnZlciAqL1xuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgODA4MDtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG4vKiBDb25maWd1cmluZyBNb25nb29zZSAqL1xubW9uZ29vc2UucGx1Z2luKCAoIHNjaGVtYTogYW55ICkgPT4geyBzY2hlbWEub3B0aW9ucy51c2VQdXNoRWFjaCA9IHRydWU7IH0gKTtcbm1vbmdvb3NlLnNldCggJ3VzZU5ld1VybFBhcnNlcicsIHRydWUgKTtcbm1vbmdvb3NlLnNldCggJ3VzZUZpbmRBbmRNb2RpZnknLCBmYWxzZSApO1xubW9uZ29vc2Uuc2V0KCAndXNlQ3JlYXRlSW5kZXgnLCB0cnVlICk7XG5tb25nb29zZS5zZXQoICd1c2VVbmlmaWVkVG9wb2xvZ3knLCB0cnVlICk7XG5cbi8qIEVzdGFibGlzaGluZyBtb25nb2RiIGNvbm5lY3Rpb24gKi9cbmNvbnN0IGRiQ3JlZGVudGlhbHMgPSAoIHByb2Nlc3MuZW52LkRCX1VTRVIgJiYgcHJvY2Vzcy5lbnYuREJfUEFTU1dPUkQgKVxuICA/IGAkeyBwcm9jZXNzLmVudi5EQl9VU0VSIH06JHsgcHJvY2Vzcy5lbnYuREJfUEFTU1dPUkQgfUBgXG4gIDogJyc7XG5jb25zdCBkYkNvbm5lY3Rpb24gPSBgbW9uZ29kYjovLyR7IGRiQ3JlZGVudGlhbHMgfSR7IHByb2Nlc3MuZW52LkRCX1BBVEggfS8keyBwcm9jZXNzLmVudi5EQl9OQU1FIH1gO1xuXG5tb25nb29zZS5jb25uZWN0KCBkYkNvbm5lY3Rpb24sIHsgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLCB1c2VDcmVhdGVJbmRleDogdHJ1ZSB9ICkuY2F0Y2goIGNvbnNvbGUuZXJyb3IgKTtcblxubW9uZ29vc2UuY29ubmVjdGlvbi5vbiggJ2Vycm9yJywgZXJyb3IgPT4ge1xuICBjb25zb2xlLmVycm9yKCBlcnJvciApO1xufSApO1xuXG4vKiBEZWZpbmluZyB0aGUgQXBvbGxvIFNlcnZlciAqL1xuY29uc3QgYXBvbGxvID0gbmV3IEFwb2xsb1NlcnZlcigge1xuICBwbGF5Z3JvdW5kOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLFxuICB0eXBlRGVmczogZ3FsU2NoZW1hLFxuICByZXNvbHZlcnM6IHJlc29sdmVyLFxuICBzdWJzY3JpcHRpb25zOiB7XG4gICAgcGF0aDogJy9zdWJzY3JpcHRpb25zJyxcbiAgfSxcbiAgZm9ybWF0RXJyb3I6IGVycm9yID0+ICgge1xuICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgbG9jYXRpb25zOiBlcnJvci5sb2NhdGlvbnMsXG4gICAgcGF0aDogZXJyb3IucGF0aCxcbiAgICAuLi5lcnJvci5leHRlbnNpb25zLFxuICB9ICksXG4gIHBsdWdpbnM6IFtcbiAgICB7XG4gICAgICByZXF1ZXN0RGlkU3RhcnQ6ICggcmVxdWVzdENvbnRleHQgKSA9PiB7XG4gICAgICAgIGlmICggcmVxdWVzdENvbnRleHQucmVxdWVzdC5odHRwPy5oZWFkZXJzLmhhcyggJ3gtYXBvbGxvLXRyYWNpbmcnICkgKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gcmVxdWVzdENvbnRleHQucmVxdWVzdC5xdWVyeT8ucmVwbGFjZSggL1xccysvZywgJyAnICkudHJpbSgpO1xuICAgICAgICBjb25zdCB2YXJpYWJsZXMgPSBKU09OLnN0cmluZ2lmeSggcmVxdWVzdENvbnRleHQucmVxdWVzdC52YXJpYWJsZXMgKTtcbiAgICAgICAgY29uc29sZS5sb2coIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSwgYC0gW1JlcXVlc3QgU3RhcnRlZF0geyBxdWVyeTogJHsgcXVlcnkgfSwgdmFyaWFibGVzOiAkeyB2YXJpYWJsZXMgfSwgb3BlcmF0aW9uTmFtZTogJHsgcmVxdWVzdENvbnRleHQucmVxdWVzdC5vcGVyYXRpb25OYW1lIH0gfWAgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSxcbiAgICB9LFxuICBdXG59ICk7XG5cbi8qIEFwcGx5aW5nIGFwb2xsbyBtaWRkbGV3YXJlIHRvIGV4cHJlc3Mgc2VydmVyICovXG5hcG9sbG8uYXBwbHlNaWRkbGV3YXJlKCB7IGFwcCB9ICk7XG5cbi8qICBDcmVhdGluZyB0aGUgc2VydmVyIGJhc2VkIG9uIHRoZSBlbnZpcm9ubWVudCAqL1xuY29uc3Qgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoIGFwcCApO1xuXG4vLyBJbnN0YWxsaW5nIHRoZSBhcG9sbG8gd3Mgc3Vic2NyaXB0aW9uIGhhbmRsZXJzXG5hcG9sbG8uaW5zdGFsbFN1YnNjcmlwdGlvbkhhbmRsZXJzKCBzZXJ2ZXIgKTtcbi8vIEhvbWVcbmV4cG9ydCBkZWZhdWx0IHNlcnZlci5saXN0ZW4oIHsgcG9ydDogcG9ydCB9LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCBg8J+agCBNaWNyb3NlcnZpY2UgcnVubmluZyBvbiAkeyBwcm9jZXNzLmVudi5OT0RFX0VOViB9IGF0ICR7IHBvcnQgfSR7IGFwb2xsby5ncmFwaHFsUGF0aCB9YCApO1xufSApO1xuIiwiLy8gd3JpdGUgeW91ciBoZWxwZXIgZnVuY3Rpb25zIGhlcmVcbmltcG9ydCB7IFJlZGlzUHViU3ViIH0gZnJvbSAnZ3JhcGhxbC1yZWRpcy1zdWJzY3JpcHRpb25zJztcbmNvbnN0IGZldGNoID0gcmVxdWlyZSggJ25vZGUtZmV0Y2gnICk7XG5pbXBvcnQgUmVkaXMgZnJvbSAnaW9yZWRpcyc7XG5nbG9iYWwuSGVhZGVycyA9IGZldGNoLkhlYWRlcnM7XG5jb25zdCByZWRpc09wdGlvbnM6IFJlZGlzLlJlZGlzT3B0aW9ucyA9IHtcbiAgaG9zdDogcHJvY2Vzcy5lbnYuUkVESVNfU0VSVklDRV9IT1NULFxuICBwb3J0OiBOdW1iZXIucGFyc2VJbnQoIHByb2Nlc3MuZW52LlJFRElTX1NFUlZJQ0VfUE9SVCB8fCAnNjM3OScsIDEwICksXG4gIHJldHJ5U3RyYXRlZ3k6ICggdGltZXM6IGFueSApID0+IHtcbiAgICByZXR1cm4gTWF0aC5taW4oIHRpbWVzICogNTAsIDIwMDAgKTtcbiAgfVxufTtcbmV4cG9ydCBjb25zdCBwdWJzdWIgPSBuZXcgUmVkaXNQdWJTdWIoIHtcbiAgcHVibGlzaGVyOiBuZXcgUmVkaXMoIHJlZGlzT3B0aW9ucyApLFxuICBzdWJzY3JpYmVyOiBuZXcgUmVkaXMoIHJlZGlzT3B0aW9ucyApLFxufSApO1xuXG5jbGFzcyBIb21lQVBJSGVscGVyIHtcbiAgdXNlckZyYWdtZW50ID0gYFxuICAgICAgICBmcmFnbWVudCB1c2VyIG9uIFVzZXJUeXBlIHtcbiAgICAgICAgICAgIF9pZFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgIHVpZFxuICAgICAgICAgICAgcmhhdFVVSURcbiAgICAgICAgICAgIG1lbWJlck9mXG4gICAgICAgICAgICBpc0FjdGl2ZVxuICAgICAgICAgICAgYXBpUm9sZVxuICAgICAgICAgICAgY3JlYXRlZEJ5XG4gICAgICAgICAgICBjcmVhdGVkT25cbiAgICAgICAgICAgIHVwZGF0ZWRCeVxuICAgICAgICAgICAgdXBkYXRlZE9uXG4gICAgICAgIH1gO1xuICAvKipcbiAgICogQnVpbGRzIHRoZSBncmFwaHFsIHF1ZXJ5IGFjY29yZGluZyB0byB0aGUgb3duZXJzIGFycmF5IGluIHRoZSBob21lVHlwZVxuICAgKiBAcGFyYW0gcmVzcG9uc2UgaG9tZVR5cGUoYXJyYXkgb2YgaG9tZVR5cGUpIGRhdGFiYXNlIHJlc3BvbnNlXG4gICAqL1xuICBidWlsZEdxbFF1ZXJ5ICggcmVzcG9uc2U6IEhvbWVUeXBlW10gKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLm1hcCggKCByZXNwOiBhbnkgKSA9PiB7XG4gICAgICBsZXQgcXVlcnkgPSBbXTtcbiAgICAgIGlmICggcmVzcC5vd25lcnMubGVuZ3RoICkge1xuICAgICAgICBxdWVyeSA9IHJlc3Aub3duZXJzLm1hcCggKCByaGF0VVVJRDogc3RyaW5nICkgPT4gYG93bmVyXyR7IHJlc3AuX2lkIH1fJHsgcmhhdFVVSUQucmVwbGFjZSggLy0vZywgJycgKSB9OmdldFVzZXJzQnkocmhhdFVVSUQ6IFwiJHsgcmhhdFVVSUQgfVwiKXsgLi4udXNlciB9YCApO1xuICAgICAgfVxuICAgICAgaWYgKCAhIXJlc3AuY3JlYXRlZEJ5ICkge1xuICAgICAgICBxdWVyeS5wdXNoKCBgY3JlYXRlZEJ5XyR7IHJlc3AuX2lkIH06Z2V0VXNlcnNCeShyaGF0VVVJRDogXCIkeyByZXNwLmNyZWF0ZWRCeSB9XCIpeyAuLi51c2VyIH1gICk7XG4gICAgICB9XG4gICAgICBpZiAoICEhcmVzcC51cGRhdGVkQnkgKSB7XG4gICAgICAgIHF1ZXJ5LnB1c2goIGB1cGRhdGVkQnlfJHsgcmVzcC5faWQgfTpnZXRVc2Vyc0J5KHJoYXRVVUlEOiBcIiR7IHJlc3AudXBkYXRlZEJ5IH1cIil7IC4uLnVzZXIgfWAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBxdWVyeTtcbiAgICB9ICk7XG4gIH1cbiAgLyoqXG4gICAqIEZldGNoZXMgdXNlciBkZXRhaWxzIGZyb20gdGhlIHVzZXItc2VydmljZSB1c2luZyBub2RlLWZldGNoXG4gICAqIEBwYXJhbSBxdWVyeSBncWwgcXVlcnkgd2hpY2ggd291bGQgZmV0Y2ggaW5mb3JtYXRpb24gZnJvbSB0aGUgdXNlci1zZXJ2aWNlXG4gICAqL1xuICBnZXRVc2VyRGV0YWlscyAoIHF1ZXJ5OiBzdHJpbmcgKSB7XG4gICAgY29uc3QgYm9keSA9IGBcbiAgICAgICAgICAgICR7dGhpcy51c2VyRnJhZ21lbnQgfVxuICAgICAgICAgICAgcXVlcnkge1xuICAgICAgICAgICAgICAgICR7cXVlcnkgfVxuICAgICAgICB9YDtcbiAgICByZXR1cm4gZmV0Y2goIGBodHRwOi8vdXNlci1ncm91cC1zZXJ2aWNlOjgwODAvZ3JhcGhxbGAsIHtcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoIHsgcXVlcnk6IGJvZHkgfSApLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgfSApXG4gICAgICAudGhlbiggKCByZXM6IGFueSApID0+IHJlcy5qc29uKCkgKTtcbiAgfVxuICAvKipcbiAgICogUmVwbGFjZXMgdGhlIG93bmVycyBhcnJheShvd25lcnM6IHN0cmluZ1tdKSB3aXRoIHBvcHVsYXRlZCBIb21lVXNlclR5cGUgKG93bmVyczogSG9tZVVzZXJUeXBlW10pXG4gICAqIEBwYXJhbSByZXNwb25zZSBEYXRhYmFzZSByZXNwb25zZVxuICAgKiBAcGFyYW0gdXNlckRldGFpbHMgVXNlckRldGFpbHMgd2hpY2ggYXJlIGZldGNoZWQgZnJvbSB1c2VyLXNlcnZpY2VcbiAgICovXG4gIHN0aXRjaEhvbWVUeXBlICggcmVzcG9uc2U6IEhvbWVUeXBlW10gfCBhbnksIHVzZXJEZXRhaWxzOiBhbnkgKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLm1hcCggKCBkYXRhOiBhbnkgKSA9PiB7XG4gICAgICBpZiAoIHVzZXJEZXRhaWxzWyBgY3JlYXRlZEJ5XyR7IGRhdGEuX2lkIH1gIF0gKSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSB7IC4uLmRhdGEsIGNyZWF0ZWRCeTogdXNlckRldGFpbHNbIGBjcmVhdGVkQnlfJHsgZGF0YS5faWQgfWAgXVsgMCBdIH07XG4gICAgICAgIGlmICggcmVzcC5vd25lcnMubGVuZ3RoICkge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXNwLm93bmVycyxcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKCB1c2VyRGV0YWlscyApLnJlZHVjZSggKCBhY2N1bXVsYXRvcjogYW55LCB1c2VyOiBhbnkgKSA9PiB7XG4gICAgICAgICAgICAgIGlmICggdXNlclsgMCBdLnN0YXJ0c1dpdGgoIGBvd25lcl8keyByZXNwLl9pZCB9YCApICkge1xuICAgICAgICAgICAgICAgIGFjY3VtdWxhdG9yLnB1c2goIC4uLnVzZXJbIDEgXSApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgICAgICAgIH0sIFtdIClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICggdXNlckRldGFpbHNbIGB1cGRhdGVkQnlfJHsgZGF0YS5faWQgfWAgXSApIHtcbiAgICAgICAgICByZXR1cm4geyAuLi5yZXNwLCB1cGRhdGVkQnk6IHVzZXJEZXRhaWxzWyBgdXBkYXRlZEJ5XyR7IGRhdGEuX2lkIH1gIF1bIDAgXSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSApO1xuICB9XG5cbiAgLy8gU2VhcmNoIERhdGEgZm9ybWF0dGVyXG4gIHB1YmxpYyBmb3JtYXRTZWFyY2hJbnB1dChkYXRhOiBhbnkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2lkJzogZGF0YS5faWQsXG4gICAgICAndGl0bGUnOiBkYXRhLm5hbWUsXG4gICAgICAnYWJzdHJhY3QnOiBkYXRhLmRlc2NyaXB0aW9uIHx8ICcnLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogZGF0YS5kZXNjcmlwdGlvbiB8fCAnJyxcbiAgICAgICdpY29uJzogYGFzc2V0cy9pY29ucy9ob21lLnN2Z2AsXG4gICAgICAndXJpJzogcHJvY2Vzcy5lbnYuQ0xJRU5UX1VSTCArIGRhdGEubGluayxcbiAgICAgICd0YWdzJzogYEhvbWUsICR7ZGF0YS5uYW1lfWAsXG4gICAgICAnY29udGVudFR5cGUnOiAnSG9tZScsXG4gICAgICAnY3JlYXRlZEJ5JzogZGF0YS5jcmVhdGVkQnk/Lm5hbWUgfHwgJycsXG4gICAgICAnY3JlYXRlZERhdGUnOiBkYXRhPy5jcmVhdGVkT24gfHwgbmV3IERhdGUoKSxcbiAgICAgICdsYXN0TW9kaWZpZWRCeSc6IGRhdGE/LnVwZGF0ZWRCeT8ubmFtZSB8fCAnJyxcbiAgICAgICdsYXN0TW9kaWZpZWREYXRlJzogZGF0YT8udXBkYXRlZE9uIHx8IG5ldyBEYXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlL3VwZGF0ZS9kZWxldGUgZGF0YSB0byBzZWFyY2ggbWljcm9zZXJ2aWNlXG4gIHB1YmxpYyBtYW5hZ2VTZWFyY2hJbmRleChkYXRhOiBhbnksIG1vZGU6IHN0cmluZykge1xuICAgIGxldCBxdWVyeTogc3RyaW5nID0gYGA7XG4gICAgaWYgKCBtb2RlID09PSAnaW5kZXgnKSB7XG4gICAgICBxdWVyeSA9IGBcbiAgICAgIG11dGF0aW9uIE1hbmFnZUluZGV4KCRpbnB1dDogU2VhcmNoSW5wdXQpIHtcbiAgICAgICAgbWFuYWdlSW5kZXgoaW5wdXQ6ICRpbnB1dCkge1xuICAgICAgICAgIHN0YXR1c1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBgO1xuICAgIH0gZWxzZSBpZiggbW9kZSA9PT0gJ2RlbGV0ZScpIHtcbiAgICAgIHF1ZXJ5ID0gYFxuICAgICAgICBtdXRhdGlvbiBEZWxldGVJbmRleCgkaWQ6IFN0cmluZykge1xuICAgICAgICAgIGRlbGV0ZUluZGV4KGlkOiAkaWQpIHtcbiAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYFxuICAgIH1cbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBxdWVyeTogcXVlcnksXG4gICAgICB2YXJpYWJsZXM6IGRhdGFcbiAgICB9KTtcblxuICAgIGhlYWRlcnMuYXBwZW5kKGBBdXRob3JpemF0aW9uYCwgYCR7cHJvY2Vzcy5lbnYuR0FURVdBWV9BVVRIX1RPS0VOfWApO1xuICAgIGhlYWRlcnMuYXBwZW5kKGBDb250ZW50LVR5cGVgLCBgYXBwbGljYXRpb24vanNvbmApO1xuICAgIHJldHVybiBmZXRjaChgJHtwcm9jZXNzLmVudi5BUElfR0FURVdBWX1gLCB7XG4gICAgICBtZXRob2Q6IGBQT1NUYCxcbiAgICAgIGhlYWRlcnMsXG4gICAgICBib2R5OiBib2R5LFxuICAgIH0pLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICBpZiAoKHJlc3VsdC5kYXRhPy5tYW5hZ2VJbmRleD8uc3RhdHVzID09PSAyMDApIHx8IChyZXN1bHQ/LmRhdGE/LmRlbGV0ZUluZGV4Py5zdGF0dXMgPT09IDIwNCkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnU3VjZXNzZnVsbHkgY29tcGxldGVkIHRoZSBpbmRleCB1cGRhdGlvbicpO1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZGF0YT8ubWFuYWdlSW5kZXg/LnN0YXR1cyB8fCByZXN1bHQ/LmRhdGE/LmRlbGV0ZUluZGV4Py5zdGF0dXM7XG4gICAgICAgIH0gZWxzZSBpZiAoKHJlc3VsdD8uZGF0YT8ubWFuYWdlSW5kZXg/LnN0YXR1cyAhPT0gMjAwKSB8fCAocmVzdWx0Py5kYXRhPy5kZWxldGVJbmRleD8uc3RhdHVzICE9PSAyMDQpKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBpbiBpbmRleCB1cGRhdGlvbi5cIik7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhPy5tYW5hZ2VJbmRleD8uc3RhdHVzIHx8IHJlc3VsdD8uZGF0YT8uZGVsZXRlSW5kZXg/LnN0YXR1cztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfSk7XG4gIH1cblxufVxuXG5leHBvcnQgY29uc3QgSG9tZUhlbHBlciA9IG5ldyBIb21lQVBJSGVscGVyKCk7XG4iLCJpbXBvcnQgeyBIb21lIH0gZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IHsgSG9tZUhlbHBlciB9IGZyb20gJy4vaGVscGVycyc7XG5cbmV4cG9ydCBjb25zdCBIb21lUmVzb2x2ZXIgPSB7XG4gIFF1ZXJ5OiB7XG4gICAgbGlzdEhvbWVUeXBlKHJvb3Q6IGFueSwgYXJnczogYW55LCBjdHg6IGFueSkge1xuICAgICAgcmV0dXJuIEhvbWUuZmluZCgpLmxlYW4oKVxuICAgICAgLnRoZW4oIChyZXNwb25zZTogSG9tZVR5cGVbXSkgPT4ge1xuICAgICAgICBjb25zdCBxdWVyeSA9IGAke0hvbWVIZWxwZXIuYnVpbGRHcWxRdWVyeShyZXNwb25zZSl9YDtcbiAgICAgICAgcmV0dXJuIEhvbWVIZWxwZXIuZ2V0VXNlckRldGFpbHMocXVlcnkpLnRoZW4oKHVzZXJEZXRhaWxzOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gSG9tZUhlbHBlci5zdGl0Y2hIb21lVHlwZShyZXNwb25zZSwgdXNlckRldGFpbHMuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4gZXJyKTtcbiAgICB9LFxuICAgIGdldEhvbWVUeXBlKHJvb3Q6IGFueSwgYXJnczogYW55LCBjdHg6IGFueSkge1xuICAgICAgcmV0dXJuIEhvbWUuZmluZEJ5SWQoYXJncy5faWQpLmxlYW4oKVxuICAgICAgLnRoZW4oIChyZXNwb25zZTogSG9tZVR5cGUgfCBudWxsKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gYCR7SG9tZUhlbHBlci5idWlsZEdxbFF1ZXJ5KFtyZXNwb25zZV0pfWA7XG4gICAgICAgICAgcmV0dXJuIEhvbWVIZWxwZXIuZ2V0VXNlckRldGFpbHMocXVlcnkpLnRoZW4oKHVzZXJEZXRhaWxzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBIb21lSGVscGVyLnN0aXRjaEhvbWVUeXBlKFtyZXNwb25zZV0sIHVzZXJEZXRhaWxzLmRhdGEpWzBdO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiBlcnIpO1xuICAgIH0sXG4gICAgZ2V0SG9tZVR5cGVCeShyb290OiBhbnksIGFyZ3M6IGFueSwgY3R4OiBhbnkpIHtcbiAgICAgIHJldHVybiBIb21lLmZpbmQoYXJncy5pbnB1dCkubGVhbigpXG4gICAgICAudGhlbiggKHJlc3BvbnNlOiBIb21lVHlwZVtdKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1aWx0UXVlcnkgPSBgJHtIb21lSGVscGVyLmJ1aWxkR3FsUXVlcnkocmVzcG9uc2UpfWA7XG4gICAgICAgIHJldHVybiBIb21lSGVscGVyLmdldFVzZXJEZXRhaWxzKGJ1aWx0UXVlcnkpLnRoZW4oKHVzZXJEZXRhaWxzOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gSG9tZUhlbHBlci5zdGl0Y2hIb21lVHlwZShyZXNwb25zZSwgdXNlckRldGFpbHMuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4gZXJyKTtcbiAgICB9LFxuICAgIGdldEhvbWVUeXBlQnlVc2VyKHJvb3Q6IGFueSwgYXJnczogYW55LCBjdHg6IGFueSkge1xuICAgICAgcmV0dXJuIEhvbWUuZmluZCh7J293bmVycyc6IHsnJGluJzogWyBhcmdzLnJodXVpZCBdfX0pLmxlYW4oKVxuICAgICAgLnRoZW4oIChyZXNwb25zZTogSG9tZVR5cGVbXSkgPT4ge1xuICAgICAgICBjb25zdCBidWlsdFF1ZXJ5ID0gYCR7SG9tZUhlbHBlci5idWlsZEdxbFF1ZXJ5KHJlc3BvbnNlKX1gO1xuICAgICAgICByZXR1cm4gSG9tZUhlbHBlci5nZXRVc2VyRGV0YWlscyhidWlsdFF1ZXJ5KS50aGVuKCh1c2VyRGV0YWlsczogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIEhvbWVIZWxwZXIuc3RpdGNoSG9tZVR5cGUocmVzcG9uc2UsIHVzZXJEZXRhaWxzLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IGVycik7XG4gICAgfVxuICB9LFxuICBNdXRhdGlvbjoge1xuICAgIGNyZWF0ZUhvbWVUeXBlKHJvb3Q6IGFueSwgYXJnczogYW55LCBjdHg6IGFueSkge1xuICAgICAgY29uc3QgZGF0YSA9IG5ldyBIb21lKGFyZ3MuaW5wdXQpO1xuICAgICAgcmV0dXJuIGRhdGEuc2F2ZSgpXG4gICAgICAgIC50aGVuKChyZXNwb25zZTogSG9tZVR5cGUgfCBudWxsIHwgYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCByZXNwID0gIHsgLi4ueyAuLi5yZXNwb25zZSB9Ll9kb2MgfTtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gYCR7SG9tZUhlbHBlci5idWlsZEdxbFF1ZXJ5KFtyZXNwXSl9YDtcbiAgICAgICAgICAgIHJldHVybiBIb21lSGVscGVyLmdldFVzZXJEZXRhaWxzKHF1ZXJ5KS50aGVuKCh1c2VyRGV0YWlsczogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGhvbWVSZXNwb25zZSA9IEhvbWVIZWxwZXIuc3RpdGNoSG9tZVR5cGUoW3Jlc3BdLCB1c2VyRGV0YWlscy5kYXRhKVswXTtcbiAgICAgICAgICAgICAgaWYoaG9tZVJlc3BvbnNlLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRvY3VtZW50SW5wdXQgPSBIb21lSGVscGVyLmZvcm1hdFNlYXJjaElucHV0KGhvbWVSZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXhJbnB1dCA9IHtcbiAgICAgICAgICAgICAgICAgICdpbnB1dCc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGFTb3VyY2UnOiAnb25lcG9ydGFsJyxcbiAgICAgICAgICAgICAgICAgICAgJ2RvY3VtZW50cyc6IGRvY3VtZW50SW5wdXRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIEhvbWVIZWxwZXIubWFuYWdlU2VhcmNoSW5kZXgoaW5kZXhJbnB1dCwnaW5kZXgnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gaG9tZVJlc3BvbnNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IGVycik7XG4gICAgfSxcbiAgICB1cGRhdGVIb21lVHlwZShyb290OiBhbnksIGFyZ3M6IGFueSwgY3R4OiBhbnkpIHtcbiAgICAgIHJldHVybiBIb21lLmZpbmRCeUlkKGFyZ3MuaW5wdXQuX2lkKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlOiBIb21lVHlwZSB8IG51bGwpID0+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocmVzcG9uc2UsIGFyZ3MuaW5wdXQpXG4gICAgICAgICAgLnNhdmUoKVxuICAgICAgICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3AgPSB7IC4uLnsgLi4uZGF0YSB9Ll9kb2MgfTtcbiAgICAgICAgICAgIGlmIChyZXNwICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gYCR7SG9tZUhlbHBlci5idWlsZEdxbFF1ZXJ5KFtyZXNwXSl9YDtcbiAgICAgICAgICAgICAgcmV0dXJuIEhvbWVIZWxwZXIuZ2V0VXNlckRldGFpbHMocXVlcnkpLnRoZW4oKHVzZXJEZXRhaWxzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBob21lUmVzcG9uc2UgPSBIb21lSGVscGVyLnN0aXRjaEhvbWVUeXBlKFtyZXNwXSwgdXNlckRldGFpbHMuZGF0YSlbMF07XG4gICAgICAgICAgICAgICAgaWYoaG9tZVJlc3BvbnNlLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoSW5wdXQgPSBIb21lSGVscGVyLmZvcm1hdFNlYXJjaElucHV0KGhvbWVSZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICBIb21lSGVscGVyLm1hbmFnZVNlYXJjaEluZGV4KHNlYXJjaElucHV0LCdpbmRleCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaG9tZVJlc3BvbnNlO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycjogYW55KSA9PiBlcnIpO1xuICAgIH0sXG4gICAgZGVsZXRlSG9tZVR5cGUocm9vdDogYW55LCBhcmdzOiBhbnksIGN0eDogYW55KSB7XG4gICAgICByZXR1cm4gSG9tZS5maW5kQnlJZEFuZFJlbW92ZShhcmdzLl9pZClcbiAgICAgIC50aGVuKChyZXNwb25zZTogSG9tZVR5cGUgfCBudWxsIHwgYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGxldCBpZCA9IHtcbiAgICAgICAgICAgICdpZCc6IGFyZ3MuX2lkXG4gICAgICAgICAgfTtcbiAgICAgICAgICBIb21lSGVscGVyLm1hbmFnZVNlYXJjaEluZGV4KGlkLCAnZGVsZXRlJyk7XG4gICAgICAgICAgY29uc3QgcmVzcCA9ICB7IC4uLnsgLi4ucmVzcG9uc2UgfS5fZG9jIH07XG4gICAgICAgICAgY29uc3QgcXVlcnkgPSBgJHtIb21lSGVscGVyLmJ1aWxkR3FsUXVlcnkoW3Jlc3BdKX1gO1xuICAgICAgICAgIHJldHVybiBIb21lSGVscGVyLmdldFVzZXJEZXRhaWxzKHF1ZXJ5KS50aGVuKCh1c2VyRGV0YWlsczogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gSG9tZUhlbHBlci5zdGl0Y2hIb21lVHlwZShbcmVzcF0sIHVzZXJEZXRhaWxzLmRhdGEpWzBdO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBlcnIpO1xuICAgIH0sXG4gICAgdXBkYXRlSG9tZUluZGV4KHJvb3Q6IGFueSwgYXJnczogYW55LCBjdHg6IGFueSkge1xuICAgICAgbGV0IGRvY3VtZW50SW5wdXQ6YW55PVtdO1xuICAgICAgcmV0dXJuIEhvbWUuZmluZCgpLmxlYW4oKVxuICAgICAgLnRoZW4oIChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYCR7SG9tZUhlbHBlci5idWlsZEdxbFF1ZXJ5KHJlc3BvbnNlKX1gO1xuICAgICAgICByZXR1cm4gSG9tZUhlbHBlci5nZXRVc2VyRGV0YWlscyhxdWVyeSkudGhlbihhc3luYyAodXNlckRldGFpbHM6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGhvbWVSZXNwb25zZTogQXJyYXk8YW55PiA9IEhvbWVIZWxwZXIuc3RpdGNoSG9tZVR5cGUocmVzcG9uc2UsIHVzZXJEZXRhaWxzLmRhdGEpO1xuICAgICAgICAgIGF3YWl0IGhvbWVSZXNwb25zZS5tYXAoYXN5bmMgKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmFjdGl2ZSkge1xuICAgICAgICAgICAgICBkb2N1bWVudElucHV0LnB1c2goSG9tZUhlbHBlci5mb3JtYXRTZWFyY2hJbnB1dChyZXNwb25zZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IGluZGV4SW5wdXQgPSB7XG4gICAgICAgICAgICAnaW5wdXQnOiB7XG4gICAgICAgICAgICAgICdkYXRhU291cmNlJzogJ29uZXBvcnRhbCcsXG4gICAgICAgICAgICAgICdkb2N1bWVudHMnOiBkb2N1bWVudElucHV0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb25zdCBpbmRleFJlc3BvbnNlID0gYXdhaXQgSG9tZUhlbHBlci5tYW5hZ2VTZWFyY2hJbmRleChpbmRleElucHV0ICwnaW5kZXgnKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiBpbmRleFJlc3BvbnNlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiBlcnIpO1xuICAgIH1cbiAgfVxufTtcbiIsImltcG9ydCB7IERvY3VtZW50LCBNb2RlbCwgbW9kZWwsIFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJztcblxuZXhwb3J0IGNvbnN0IEhvbWVTZXJ2aWNlU2NoZW1hOiBTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZywgaW5kZXg6IHsgdW5pcXVlOiB0cnVlIH0gfSxcbiAgICBkZXNjcmlwdGlvbjogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBsaW5rOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGljb246IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgZW50aXR5VHlwZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBjb2xvclNjaGVtZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICB2aWRlb1VybDogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBvd25lcnM6IHsgdHlwZTogW1N0cmluZ10gfSxcbiAgICBjcmVhdGVkQnk6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIGNyZWF0ZWRPbjogeyB0eXBlOiBEYXRlLCBkZWZhdWx0OiBEYXRlLm5vdywgfSxcbiAgICB1cGRhdGVkQnk6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgdXBkYXRlZE9uOiB7IHR5cGU6IERhdGUsIGRlZmF1bHQ6IERhdGUubm93LCB9LFxuICAgIGFjdGl2ZTogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxuICAgIGFwcGxpY2F0aW9uVHlwZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGVudW06IFtcbiAgICAgICAgICAgICdCVUlMVElOJyxcbiAgICAgICAgICAgICdIT1NURUQnXG4gICAgICAgIF0sXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgY29udGFjdHM6IHtcbiAgICAgICAgZGV2ZWxvcGVyczogWyBTdHJpbmcgXSxcbiAgICAgICAgcWU6IFsgU3RyaW5nIF0sXG4gICAgICAgIHN0YWtlaG9sZGVyczogWyBTdHJpbmcgXSxcbiAgICB9LFxuICAgIHBlcm1pc3Npb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJvdmVyR3JvdXA6IFN0cmluZyxcbiAgICAgICAgICAgIHJvbGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZW51bTogWydBRE1JTicsICdVU0VSJ10sXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdLFxuICAgIGZlZWRiYWNrOiB7XG4gICAgICAgIHNvdXJjZTogeyB0eXBlOiBTdHJpbmcsIGVudW06IFsgJ0pJUkEnLCAnR0lUSFVCJywgJ0dJVExBQicgXSB9LFxuICAgICAgICBzb3VyY2VVcmw6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgICAgIGlzQWN0aXZlOiB7IHR5cGU6IEJvb2xlYW4gfSxcbiAgICAgICAgcHJvamVjdEtleTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICB9LFxufSk7XG5cbmludGVyZmFjZSBIb21lTW9kZWwgZXh0ZW5kcyBIb21lVHlwZSAsIERvY3VtZW50IHsgfVxuXG5pbnRlcmZhY2UgSG9tZU1vZGVsU3RhdGljIGV4dGVuZHMgTW9kZWwgPEhvbWVNb2RlbD4geyB9XG5cbmV4cG9ydCBjb25zdCBIb21lOiBNb2RlbDxIb21lTW9kZWw+ID0gbW9kZWw8SG9tZU1vZGVsLCBIb21lTW9kZWxTdGF0aWM+KCdIb21lJywgSG9tZVNlcnZpY2VTY2hlbWEpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnYtc2FmZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC1yZWRpcy1zdWJzY3JpcHRpb25zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpb3JlZGlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTs7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NlcnZpY2UudHNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9