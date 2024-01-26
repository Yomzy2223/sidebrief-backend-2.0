interface Props {
  type: string;
  description: string;
  required?: boolean;
}

interface ResponseProps {
  description: string;
  contents: string;
}

//User interface
interface User {
  type: string;
  require: string[];
  properties: {
    fullName: Props;
    email: Props;
    password: Props;
    referral: Props;
    isPartner: Props;
    isStaff: Props;
  };
}

interface UserLogin {
  type: string;
  require: string[];
  properties: {
    email: Props;
    password: Props;
  };
}

interface UserForgot {
  type: string;
  require: string[];
  properties: {
    email: Props;
  };
}

interface UserReset {
  type: string;
  require: string[];
  properties: {
    token: Props;
    password: Props;
  };
}

//staff interface
interface Staffs {
  type: string;
  require: string[];
  properties: {
    firstName: Props;
    lastName: Props;
    email: Props;
    password: Props;
    phone: Props;
  };
}

interface StaffLogin {
  type: string;
  require: string[];
  properties: {
    email: Props;
    password: Props;
  };
}

// Product Service Interface
interface ProductServices {
  type: string;
  require: string[];
  properties: {
    name: Props;
    type: Props;
    code: Props;
    description: Props;
    country: Props;
    price: Props;
    timeline: Props;
    feature: Props;
    numberOfShares: Props;
  };
}

// Service Form Interface
interface ServiceForms {
  type: string;
  require: string[];
  properties: {
    question: Props;
    type: Props;
    options: Props;
    compulsory: Props;
  };
}
interface ProductServiceForms {
  type: string;
  require: string[];
  properties: {
    question: Props;
    type: Props;
    options: Props;
  };
}

//Banks
interface Banks {
  type: string;
  require: string[];
  properties: {
    name: Props;
    code: Props;
    url: Props;
    image: Props;
  };
}

interface Country {
  type: string;
  require: string[];
  properties: {
    name: Props;
    code: Props;
    flagUrl: Props;
    image: Props;
    currency: Props;
  };
}

//Diligence
interface DiligenceEnterprise {
  type: string;
  require: string[];
  properties: {
    name: Props;
    address: Props;
    adminEmail: Props;
    logo: Props;
    color: Props;
    backdrop: Props;
  };
}

interface DiligenceManager {
  type: string;
  require: string[];
  properties: {
    name: Props;
    location: Props;
    managerEmail: Props;
  };
}

interface DiligenceStaff {
  type: string;
  require: string[];
  properties: {
    email: Props;
  };
}

interface DiligenceUser {
  type: string;
  require: string[];
  properties: {
    firstName: Props;
    lastName: Props;
    email: Props;
    password: Props;
  };
}

interface DiligenceRequest {
  type: string;
  require: string[];
  properties: {
    name: Props;
    registrationNumber: Props;
    email: Props;
    enterpriseId: Props;
  };
}

interface DiligenceBranchRequest {
  type: string;
  require: string[];
  properties: {
    managerId: Props;
    managerEmail: Props;
  };
}

interface UpdateDiligenceRequest {
  type: string;
  require: string[];
  properties: {
    name: Props;
    registrationNumber: Props;
  };
}
interface DiligenceDocument {
  type: string;
  require: string[];
  properties: {
    name: Props;
    description: Props;
    link: Props;
    type: Props;
  };
}
interface CreateNigerianBank {
  type: string;
  require: string[];
  properties: {
    name: Props;
    slug: Props;
    logo: Props;
    color: Props;
  };
}
interface UpdateNigerianBank {
  type: string;
  require: string[];
  properties: {
    color: Props;
  };
}

interface UpdateManyRequest {
  type: string;
  require: string[];
  properties: {
    requestIds: Props;
  };
}

interface ServiceCategory {
  type: string;
  require: string[];
  properties: {
    name: Props;
    description: Props;
  };
}
interface ServiceCategoryForm {
  type: string;
  require: string[];
  properties: {
    question: Props;
    type: Props;
    compulsory: Props;
    options: Props;
  };
}

interface CreateProduct {
  type: string;
  require: string[];
  properties: {
    userId: Props;
    form: Props;
  };
}
interface AddProductQA {
  type: string;
  require: string[];
  properties: {
    question: Props;
    answer: Props;
  };
}

export interface PaymentInitialization {
  type: string;
  require: string[];
  properties: {
    email: Props;
    currency: Props;
    amount: Props;
    card_number: Props;
    card_pin: Props;
    cvv: Props;
    expiry_month: Props;
    expiry_year: Props;
    account_bank: Props;
    type: Props;
    productId: Props;
    serviceId: Props;
  };
}

export interface PaymentConfirmation {
  type: string;
  require: string[];
  properties: {
    email?: Props;
    productId?: Props;
  };
}

export interface ValidateOTP {
  type: string;
  require: string[];
  properties: {
    flw_ref?: Props;
    email?: Props;
    otp?: Props;
    amount?: Props;
    currency?: Props;
  };
}

interface Error {
  type: string;
  require: string[];
  properties: {
    error: Props;
  };
}

interface ServerDefinition {
  url: string;
  description: string;
}

interface ComponentDefinition {
  securitySchemes: {
    petstore_auth: {
      type: string;
      flows: {};
    };
    bearerAuth: {
      type: string;
      name: string;
      scheme: string;
      in: string;
      description: string;
      bearerFormat: string;
    };
  };
  schemas: {
    // Users
    Users: User;
    UserLogin: UserLogin;
    UserForgot: UserForgot;
    UserReset: UserReset;

    //Staffs
    Staffs: Staffs;
    StaffLogin: StaffLogin;

    //ProductServices
    ProductServices: ProductServices;
    ServiceForms: ServiceForms;

    //Banks
    Banks: Banks;
    Country: Country;
    //Diligence
    DiligenceEnterprise: DiligenceEnterprise;
    DiligenceManager: DiligenceManager;
    DiligenceStaff: DiligenceStaff;
    DiligenceUser: DiligenceUser;
    DiligenceRequest: DiligenceRequest;
    DiligenceBranchRequest: DiligenceBranchRequest;
    UpdateDiligenceRequest: UpdateDiligenceRequest;
    DiligenceDocument: DiligenceDocument;
    UpdateManyRequest: UpdateManyRequest;

    //Bank
    CreateNigerianBank: CreateNigerianBank;
    UpdateNigerianBank: UpdateNigerianBank;

    //Payment
    PaymentInitialization: PaymentInitialization;
    ValidateOTP: ValidateOTP;
    PaymentConfirmation: PaymentConfirmation;

    // Error
    Error: Error;

    //Service Category
    ServiceCategory: ServiceCategory;
    ServiceCategoryForm: ServiceCategoryForm;
    CreateProduct: CreateProduct;
    AddProductQA: AddProductQA;
  };
  responses: {
    401: ResponseProps;
    400: ResponseProps;
  };
}

interface TagDefinition {
  name: string;
  description: string;
}

interface PathDefinition {
  name: string;
  description: string;
}

export interface OpenAPIDefinition {
  definition: {
    openapi: string;
    info: {
      title: string;
      version: string;
      description: string;
    };
    schemas: string[];
    servers: ServerDefinition[];
    components: ComponentDefinition;
    security: {
      bearerAuth: any;
    };
    tags: TagDefinition[];
    paths: any;
  };
  apis: string[];
}
