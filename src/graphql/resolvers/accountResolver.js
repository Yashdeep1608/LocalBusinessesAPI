// src/graphql/resolvers.js
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

const resolvers = {
  Mutation: {
    signup: async (_, { retailerInput, businessInput }) => {
      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(retailerInput.password, 10);

      // Create the retailer
      const retailer = await prisma.retailer.create({
        data: {
          firstName: retailerInput.firstName,
          lastName: retailerInput.lastName,
          email: retailerInput.email,
          isdCode: retailerInput.isdCode,
          phoneNumber: retailerInput.phoneNumber,
          username: retailerInput.username,
          password: hashedPassword,
          isActive: true,
          isEmailVerified: false,
          isPhoneVerified: false,
        },
      });

      // Create the business associated with the retailer
      const business = await prisma.business.create({
        data: {
          retailerId: retailer.id,
          name: businessInput.name,
          businessKey: businessInput.businessKey,
          categoryId: businessInput.categoryId,
          typeId: businessInput.typeId,
          startMonth: businessInput.startMonth,
          startYear: businessInput.startYear,
          currentRevenue: businessInput.currentRevenue,
          address1: businessInput.address1,
          address2: businessInput.address2,
          city: businessInput.city,
          state: businessInput.state,
          country: businessInput.country,
          planId: businessInput.planId,
          isActive: true,
          isDeleted: false,
          isActivePlan: true,
          isPaidPlan: false,
          subscribeAt: new Date(),
          planValidTill: null,
        },
      });

      return { retailer, business };
    },
  },
};

module.exports = resolvers;