// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType, UserUpdateType } from './types'
import { create, remove, update } from './resolvers'

// Create
export const userSignup = {
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
  },
  resolve: create
}

// Remove
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

// User update
export const userUpdate = {
  type: UserUpdateType,
  args: {

    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    description: {
      name: 'description',
      type: GraphQLString
    },

    address: {
      name: 'address',
      type: GraphQLString
    },

    image: {
      name: 'image',
      type: GraphQLString
    }
  },
  resolve: update
}
