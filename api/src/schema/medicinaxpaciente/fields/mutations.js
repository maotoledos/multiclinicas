// Imports
import {GraphQLString, GraphQLInt,GraphQLBoolean} from 'graphql'
// App Imports
import UserType from '../type'
import {remove, createUser,update} from '../resolvers'


export const creatingUser = {
  type: UserType,
  args: {
    firstname: { type: GraphQLString },
    middle_initial: { type: GraphQLString },
    lastname: {type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    available: {type: GraphQLString},
    birthday:{type: GraphQLString},
    first_users:{type: GraphQLBoolean},
    is_admin:{type: GraphQLBoolean},
    mpp:{type: GraphQLBoolean},
    hire_date:{type: GraphQLString},
    
  },
  resolve: createUser
}

export const updatepassword= {
  type: UserType,
  args: {
    id:{
      name:'id',
      type:GraphQLInt
    },
    email:{
      name:'email',
      type:GraphQLString
    },
    
    password: {
      name: 'password',
      type: GraphQLString
    },

    first_users: {
      name: 'first_users',
      type: GraphQLBoolean
    }
  },
  resolve: update
}

// user remove
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
