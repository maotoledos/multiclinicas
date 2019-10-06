// Imports
import {GraphQLInt, GraphQLList, GraphQLString} from 'graphql'

// App Imports
import UserType from '../type'
import {getAll, getById, login, jwtVerification} from '../resolvers'

// User All
export const users = {
  type: new GraphQLList(UserType),
  resolve: getAll
}

// User By ID
export const user = {
  type: UserType,
  args: {
    id: {type: GraphQLInt}
  },
  resolve: getById
}

//Authorization
export const userLogin = {
  type: UserType,
  args: {
    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
  },
  resolve: login
}

