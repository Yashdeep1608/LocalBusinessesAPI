const { gql } = require('apollo-server-express');

const accountTypeDef = gql`
  type Retailer {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    isdCode: String
    phoneNumber: String
    isEmailVerified: Boolean
    isPhoneVerified: Boolean
    username: String
    createdAt: String!
    updatedAt: String!
    isActive: Boolean
    isDeleted: Boolean
    lastActiveAt: String
  }

  type Business {
    id: Int!
    retailerId: Int!
    name: String!
    businessKey: String!
    categoryId: Int!
    typeId: Int!
    startMonth: Int
    startYear: Int
    currentRevenue: Float
    address1: String
    address2: String
    city: String
    state: String
    country: String
    planId: Int
    isActive: Boolean
    isDeleted: Boolean
    isActivePlan: Boolean
    isPaidPlan: Boolean
    subscribeAt: String
    unsubscribeAt: String
    planValidTill: String
    createdAt: String!
    updatedAt: String!
  }

  input RetailerInput {
    firstName: String!
    lastName: String!
    email: String!
    isdCode: String
    phoneNumber: String
    username: String
    password: String!
  }

  input BusinessInput {
    name: String!
    businessKey: String!
    categoryId: Int!
    typeId: Int!
    startMonth: Int
    startYear: Int
    currentRevenue: Float
    address1: String
    address2: String
    city: String
    state: String
    country: String
    planId: Int
    isActive: Boolean
    isDeleted: Boolean
    isActivePlan: Boolean
    isPaidPlan: Boolean
    subscribeAt: String
    unsubscribeAt: String
    planValidTill: String
  }

  type SignupResponse {
    retailer: Retailer!
    business: Business!
    token: String!
  }

  type Mutation {
    signup(retailerInput: RetailerInput!, businessInput: BusinessInput!): SignupResponse!
  }

  type Query {
    getRetailer(id: Int!): Retailer
    getBusiness(id: Int!): Business
  }
`;

module.exports = accountTypeDef;
