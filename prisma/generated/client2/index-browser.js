
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.16.2
 * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
 */
Prisma.prismaVersion = {
  client: "4.16.2",
  engine: "4bc8b6e1b66cb932731fb1bdbbc550d1e010de81"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.StaffScalarFieldEnum = {
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  password: 'password',
  phone: 'phone',
  verified: 'verified',
  picture: 'picture',
  resetToken: 'resetToken',
  isDeprecated: 'isDeprecated',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CollaboratorScalarFieldEnum = {
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  password: 'password',
  phone: 'phone',
  picture: 'picture',
  verified: 'verified',
  isPartner: 'isPartner',
  resetToken: 'resetToken',
  isDeprecated: 'isDeprecated',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CollaboratorDocumentScalarFieldEnum = {
  id: 'id',
  name: 'name',
  type: 'type',
  description: 'description',
  isDeprecated: 'isDeprecated',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  collaboratorId: 'collaboratorId'
};

exports.Prisma.RewardScalarFieldEnum = {
  id: 'id',
  name: 'name',
  url: 'url',
  descrition: 'descrition',
  image: 'image',
  isDeprecated: 'isDeprecated',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CountryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  iso: 'iso',
  currency: 'currency',
  code: 'code',
  flagUrl: 'flagUrl',
  isDeprecated: 'isDeprecated',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BankScalarFieldEnum = {
  id: 'id',
  name: 'name',
  code: 'code',
  url: 'url',
  image: 'image',
  isDeprecated: 'isDeprecated',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  title: 'title',
  body: 'body',
  readStatus: 'readStatus',
  isDeprecated: 'isDeprecated',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  scope: 'scope'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  fullName: 'fullName',
  username: 'username',
  email: 'email',
  password: 'password',
  googleId: 'googleId',
  phone: 'phone',
  picture: 'picture',
  isVerified: 'isVerified',
  referral: 'referral',
  country: 'country',
  resetToken: 'resetToken',
  isPartner: 'isPartner',
  isStaff: 'isStaff',
  isPhoneRegistered: 'isPhoneRegistered',
  isPhoneVerified: 'isPhoneVerified',
  isIdentificationRegistered: 'isIdentificationRegistered',
  isIdentificationVerified: 'isIdentificationVerified',
  partnerPermission: 'partnerPermission',
  staffPermission: 'staffPermission',
  userPermission: 'userPermission',
  isDeprecated: 'isDeprecated',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserDocumentScalarFieldEnum = {
  id: 'id',
  name: 'name',
  type: 'type',
  description: 'description',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ServiceCategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  isDeprecated: 'isDeprecated',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ServiceCategoryFormScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  type: 'type',
  compulsory: 'compulsory',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  serviceCategoryId: 'serviceCategoryId'
};

exports.Prisma.ServiceCategorySubFormScalarFieldEnum = {
  id: 'id',
  question: 'question',
  type: 'type',
  options: 'options',
  fileName: 'fileName',
  fileDescription: 'fileDescription',
  fileType: 'fileType',
  fileLink: 'fileLink',
  dependsOn: 'dependsOn',
  compulsory: 'compulsory',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  formId: 'formId'
};

exports.Prisma.ServiceScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  country: 'country',
  currency: 'currency',
  amount: 'amount',
  timeline: 'timeline',
  feature: 'feature',
  hasShares: 'hasShares',
  hasAgent: 'hasAgent',
  hasOwner: 'hasOwner',
  hasController: 'hasController',
  controllerIsCalled: 'controllerIsCalled',
  OwnerIsCalled: 'OwnerIsCalled',
  agentIsCalled: 'agentIsCalled',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  serviceCategoryId: 'serviceCategoryId'
};

exports.Prisma.ServiceTemplateScalarFieldEnum = {
  id: 'id',
  name: 'name',
  type: 'type',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  serviceId: 'serviceId'
};

exports.Prisma.ServiceFormScalarFieldEnum = {
  id: 'id',
  title: 'title',
  type: 'type',
  description: 'description',
  compulsory: 'compulsory',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  serviceId: 'serviceId'
};

exports.Prisma.ServiceSubFormScalarFieldEnum = {
  id: 'id',
  question: 'question',
  options: 'options',
  type: 'type',
  fileName: 'fileName',
  fileDescription: 'fileDescription',
  fileType: 'fileType',
  fileLink: 'fileLink',
  compulsory: 'compulsory',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  serviceFormId: 'serviceFormId'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  email: 'email',
  address: 'address',
  paid: 'paid',
  completed: 'completed',
  status: 'status',
  currentState: 'currentState',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  serviceId: 'serviceId',
  userId: 'userId'
};

exports.Prisma.ProductQAScalarFieldEnum = {
  id: 'id',
  question: 'question',
  answer: 'answer',
  type: 'type',
  compulsory: 'compulsory',
  isGeneral: 'isGeneral',
  fileName: 'fileName',
  fileDescription: 'fileDescription',
  fileType: 'fileType',
  fileLink: 'fileLink',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  productId: 'productId'
};

exports.Prisma.ProductQASubFormScalarFieldEnum = {
  id: 'id',
  question: 'question',
  answer: 'answer',
  type: 'type',
  compulsory: 'compulsory',
  productQAId: 'productQAId'
};

exports.Prisma.ClaimScalarFieldEnum = {
  id: 'id',
  value: 'value',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TeamScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  productId: 'productId'
};

exports.Prisma.TeamMemberScalarFieldEnum = {
  id: 'id',
  isLaunchMember: 'isLaunchMember',
  isLaunchController: 'isLaunchController',
  isLaunchOwner: 'isLaunchOwner',
  launchOwnership: 'launchOwnership',
  teamId: 'teamId',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.InvitationScalarFieldEnum = {
  id: 'id',
  teamId: 'teamId',
  email: 'email',
  token: 'token',
  expireIn: 'expireIn',
  invitedBy: 'invitedBy',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  provider: 'provider',
  transactionId: 'transactionId',
  status: 'status',
  email: 'email',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  productId: 'productId'
};

exports.Prisma.ParterScalarFieldEnum = {
  id: 'id',
  isVerified: 'isVerified',
  verificationDocument: 'verificationDocument',
  serviceScore: 'serviceScore',
  paymentsMade: 'paymentsMade',
  paymentsDue: 'paymentsDue',
  paymentDetails: 'paymentDetails',
  countrySupported: 'countrySupported',
  serviceSupported: 'serviceSupported',
  servicesAssigned: 'servicesAssigned',
  servicesCompleted: 'servicesCompleted',
  servicesDeclined: 'servicesDeclined',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.ProductActivityStage = {
  START: 'START',
  PAYMENT: 'PAYMENT',
  PRORIETOR: 'PRORIETOR',
  REVIEW: 'REVIEW'
};

exports.Prisma.ModelName = {
  Staff: 'Staff',
  Collaborator: 'Collaborator',
  CollaboratorDocument: 'CollaboratorDocument',
  Reward: 'Reward',
  Country: 'Country',
  Bank: 'Bank',
  Notification: 'Notification',
  Account: 'Account',
  User: 'User',
  UserDocument: 'UserDocument',
  ServiceCategory: 'ServiceCategory',
  ServiceCategoryForm: 'ServiceCategoryForm',
  ServiceCategorySubForm: 'ServiceCategorySubForm',
  Service: 'Service',
  ServiceTemplate: 'ServiceTemplate',
  ServiceForm: 'ServiceForm',
  ServiceSubForm: 'ServiceSubForm',
  Product: 'Product',
  ProductQA: 'ProductQA',
  ProductQASubForm: 'ProductQASubForm',
  Claim: 'Claim',
  Team: 'Team',
  TeamMember: 'TeamMember',
  Invitation: 'Invitation',
  Payment: 'Payment',
  Parter: 'Parter'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
