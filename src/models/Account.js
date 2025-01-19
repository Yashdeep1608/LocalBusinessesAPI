// class Business {
//     constructor({
//       id,
//       retailerId,
//       name,
//       businessKey,
//       categoryId,
//       typeId,
//       startMonth,
//       startYear,
//       currentRevenue,
//       address1,
//       address2,
//       city,
//       state,
//       country,
//       planId,
//       isActive,
//       isDeleted,
//       isActivePlan,
//       isPaidPlan,
//       subscribeAt,
//       unsubscribeAt,
//       planValidTill,
//       createdAt,
//       updatedAt,
//     }) {
//       this.id = id;
//       this.retailerId = retailerId; // Reference to the Retailer
//       this.name = name;
//       this.businessKey = businessKey; // Business name in lowercase without special characters or spaces
//       this.categoryId = categoryId; // Reference to BusinessCategory table
//       this.typeId = typeId; // Reference to BusinessType table
//       this.startMonth = startMonth;
//       this.startYear = startYear;
//       this.currentRevenue = currentRevenue;
//       this.address1 = address1;
//       this.address2 = address2;
//       this.city = city;
//       this.state = state;
//       this.country = country;
//       this.planId = planId; // Reference to BusinessPlan table
//       this.isActive = isActive; // Boolean flag for active status
//       this.isDeleted = isDeleted; // Boolean flag for deleted status
//       this.isActivePlan = isActivePlan; // Boolean flag for active plan status
//       this.isPaidPlan = isPaidPlan; // Boolean flag for paid plan status
//       this.subscribeAt = subscribeAt; // Subscription timestamp
//       this.unsubscribeAt = unsubscribeAt; // UnSubscription timestamp
//       this.planValidTill = planValidTill; // Plan validity timestamp
//       this.createdAt = createdAt; // Record creation timestamp
//       this.updatedAt = updatedAt; // Record last updated timestamp
//     }
// }
// const Retailer = sequelize.define('Retailer', {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true
//     },
//     isdCode: DataTypes.STRING,
//     phoneNumber: DataTypes.STRING,
//     isEmailVerified: DataTypes.BOOLEAN,
//     isPhoneVerified: DataTypes.BOOLEAN,
//     username: DataTypes.STRING,
//     password: DataTypes.STRING,
//     roleId: DataTypes.INTEGER,
//     createdAt: DataTypes.DATE,
//     updatedAt: DataTypes.DATE,
//     isActive: DataTypes.BOOLEAN,
//     isDeleted: DataTypes.BOOLEAN,
//     lastActiveAt: DataTypes.DATE
//   }, {
//     tableName: 'retailers', // Make sure this matches your table name
//     timestamps: true // This will automatically manage `createdAt` and `updatedAt` columns
//   });
  
// class Role{
//     constructor(id,name){
//         this.id = id;
//         this.name = name;
//     }
// }
// class BusinessType{
//     constructor(id,name,createdAt){
//         this.id = id;
//         this.name = name;
//         this.createdAt = createdAt;
//     }
// }
// class BusinessCategory{
//     constructor(id,name,createdAt){
//         this.id = id;
//         this.name = name;
//         this.createdAt = createdAt;
//     }
// }
// class BusinessPlan{
//     constructor(id,name,price,priceTrial,priceMonthly,price3Month,price6Month,priceYearly,currency,features,createdAt,updatedAt) {
//         this.id = id;
//         this.name = name;
//         this.price = price;
//         this.priceTrial = priceTrial;
//         this.priceMonthly = priceMonthly;
//         this.price3Month = price3Month;
//         this.price6Month = price6Month;
//         this.priceYearly = priceYearly;
//         this.currency = currency;
//         this.features = features;
//         this.createdAt = createdAt;
//         this.updatedAt = updatedAt;
//     }
// }
// class PaymentHistory {
//     constructor({
//         id,
//         paymentId,
//         orderId,
//         signature,
//         retailerId,
//         businessId,
//         amount,
//         currency,
//         paymentMethod,
//         paymentStatus,
//         transactionId,
//         paymentDate,
//         subscriptionId,
//         planId,
//         amountPaid,
//         taxAmount,
//         paymentReceiptUrl,
//         isRefunded,
//         refundAmount,
//         paymentMode,
//         failureReason,
//         isRecurring,
//         metadata,
//         cardType,
//         cardNetwork,
//         cardIssuer,
//         maskedCardNumber,
//         cardExpiryDate,
//         transactionSource,
//         isCardPayment,
//         createdAt,
//         updatedAt
//     }) {
//         this.id = id;
//         this.paymentId = paymentId;
//         this.orderId = orderId;
//         this.signature = signature;
//         this.retailerId = retailerId;  // Reference to Retailers table
//         this.businessId = businessId;  // Reference to Businesses table
//         this.amount = amount;
//         this.currency = currency;
//         this.paymentMethod = paymentMethod;
//         this.paymentStatus = paymentStatus;
//         this.transactionId = transactionId;
//         this.paymentDate = paymentDate;
//         this.subscriptionId = subscriptionId;
//         this.planId = planId;  // Reference to BusinessPlans table
//         this.amountPaid = amountPaid;
//         this.taxAmount = taxAmount;
//         this.paymentReceiptUrl = paymentReceiptUrl;
//         this.isRefunded = isRefunded || false;
//         this.refundAmount = refundAmount;
//         this.paymentMode = paymentMode;
//         this.failureReason = failureReason;
//         this.isRecurring = isRecurring || false;
//         this.metadata = metadata;
//         this.cardType = cardType;
//         this.cardNetwork = cardNetwork;
//         this.cardIssuer = cardIssuer;
//         this.maskedCardNumber = maskedCardNumber;
//         this.cardExpiryDate = cardExpiryDate;
//         this.transactionSource = transactionSource;
//         this.isCardPayment = isCardPayment || true;
//         this.createdAt = createdAt || new Date();
//         this.updatedAt = updatedAt || new Date();
//     }
// }
// class LoginHistory {
//     constructor(id, retailerId, businessId, loginAt, ipAddress, userAgent, city, country, latitude, longitude, status, loginSource, loginMethod, createdAt, updatedAt) {
//         this.id = id;
//         this.retailerId = retailerId;
//         this.businessId = businessId;
//         this.loginAt = loginAt;
//         this.ipAddress = ipAddress;
//         this.userAgent = userAgent;
//         this.city = city;
//         this.country = country;
//         this.latitude = latitude;
//         this.longitude = longitude;
//         this.status = status;
//         this.loginSource = loginSource;
//         this.loginMethod = loginMethod;
//         this.createdAt = createdAt;
//         this.updatedAt = updatedAt;
//     }
// }
// class OtpVerification {
//     constructor(id, retailerId, businessId, otp, otpType, isVerified, attemptCount, expirationTime, generatedAt, verifiedAt, createdAt, updatedAt) {
//         this.id = id;
//         this.retailerId = retailerId;
//         this.businessId = businessId;
//         this.otp = otp;
//         this.otpType = otpType;
//         this.isVerified = isVerified;
//         this.attemptCount = attemptCount;
//         this.expirationTime = expirationTime;
//         this.generatedAt = generatedAt;
//         this.verifiedAt = verifiedAt;
//         this.createdAt = createdAt;
//         this.updatedAt = updatedAt;
//     }
// }

// module.exports = { Business, Retailer, Role, BusinessType, BusinessCategory, BusinessPlan ,PaymentHistory,LoginHistory,OtpVerification};
