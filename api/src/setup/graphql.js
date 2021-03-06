// Imports
import graphqlHTTP from 'express-graphql'

// App Imports
import config from '../config/config.json'
import schema from '../schema'
import authentication from './authentication';

// Setup GraphQL
export default function (server) {
  console.info('SETUP - GraphQL...')

  server.use(authentication)
  // API (GraphQL on route `/api`)
  server.use(config.graphqlEndpoint, graphqlHTTP(request => ({
    schema,
    graphiql: config.graphql.ide,
    pretty: config.graphql.pretty,
    context: {
      auth: {
        user: request.user,
        isAuthenticated: request.user && request.user.id > 0
      }
    }
  })))
}