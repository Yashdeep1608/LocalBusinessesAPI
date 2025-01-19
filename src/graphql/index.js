const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');
const accountSchema = require('./schema/accountSchema');
const accountResolver = require('./resolvers/accountResolver');

const typeDefs = mergeTypeDefs([accountSchema]);
const resolvers = mergeResolvers([accountResolver]);

module.exports = { typeDefs, resolvers };
