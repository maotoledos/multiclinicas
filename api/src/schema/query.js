// Imports
import {GraphQLObjectType} from 'graphql'

// App Imports
import * as user from './users/fields/query'



// Query
const query = new GraphQLObjectType({
  name: 'query',
  description: '...',

  fields: () => ({
    ...user,
    
   
    

  })
})

export default query