// src/graphql/schemas/userSchema.js
const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');

// Define the User Type
const UserType = new GraphQLObjectType({
  name: 'Users',
  fields: {
    id: { type: GraphQLInt },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    // Add other fields as needed for your application
  },
});

// Define the Root Query Type
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve: (parent, args, context, info) => context.userResolver.getUsers(), // Resolves to the resolver function
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLInt } },
      resolve: (parent, args, context, info) => context.userResolver.getUserById(args.id), // Resolves to the resolver function
    },
  },
});

// Define the Mutation Type
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: {
      type: UserType,
      args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve: (parent, args, context, info) => context.userResolver.createUser(args.username, args.email,args.password), // Resolves to the resolver function
    },
  },
});

// Create the GraphQL Schema
const userSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

module.exports = userSchema;
