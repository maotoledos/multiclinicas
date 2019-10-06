// Imports
import {GraphQLObjectType, GraphQLString, GraphQLInt,GraphQLBoolean} from 'graphql'


// User type
const UserType = new GraphQLObjectType({
  name: 'user',
  description: '...',

  fields: () => ({
    id: {type: GraphQLInt},
    firstname: {type: GraphQLString},
    middle_initial: {type: GraphQLString},
    lastname: {type: GraphQLString},
    email: {type: GraphQLString},
    password: {type: GraphQLString},
    available:{type: GraphQLString},
    birthday:{type:GraphQLString},
    first_users:{type:GraphQLBoolean},
    is_admin:{type:GraphQLBoolean},
    hire_date:{type:GraphQLString},
    

    token: { type: GraphQLString}
   
  })
})

export default UserType;