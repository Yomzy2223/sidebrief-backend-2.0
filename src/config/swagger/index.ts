import { OpenAPIDefinition } from "./entities";

const options: OpenAPIDefinition = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Sidebrief Version 2 Application",
      version: "2.0.0",
      description: "This is Sidebrief version 2 application",
    },

    schemas: ["http", "https"],

    servers: [
      {
        url: "http://localhost:8000",
        description: "Local server",
      },
      {
        url: "https://h2rwx2fbhm.us-east-1.awsapprunner.com ",
        description: "Development server",
      },
      {
        url: "https://iapkmjspxh.us-east-1.awsapprunner.com ",
        description: "Production server",
      },
    ],
    components: {
      securitySchemes: {
        petstore_auth: {
          type: "oauth2",
          flows: {},
        },
        bearerAuth: {
          type: "apiKey",
          name: "Authorization",
          scheme: "bearer",
          in: "header",
          description: "Bearer token (Bearer + token)",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        //User
        Users: {
          type: "object",
          require: [
            "fullName",
            "email",
            "password",
            "referral",
            "isPartner",
            "isStaff",
          ],
          properties: {
            fullName: {
              type: "string",
              description: "The full name of the user",
            },
            email: {
              type: "string",
              description: "The email of the user",
            },
            password: {
              type: "string",
              description: "The password of the user",
            },
            referral: {
              type: "string",
              description: "The referral of the user",
            },
            isPartner: {
              type: "boolean",
              description: "user as a partner ",
            },
            isStaff: {
              type: "boolean",
              description: "user as a staff",
            },
          },
        },

        //user login
        UserLogin: {
          type: "object",
          require: ["email", "password"],
          properties: {
            email: {
              type: "string",
              description: "The email of the user",
            },
            password: {
              type: "string",
              description: "The password of the user",
            },
          },
        },

        //User with google
        UserWithGoogle: {
          type: "object",
          require: [
            "fullName",
            "email",
            "password",
            "referral",
            "isPartner",
            "isStaff",
          ],
          properties: {
            fullName: {
              type: "string",
              description: "The full name of the user",
            },
            email: {
              type: "string",
              description: "The email of the user",
            },
            phone: {
              type: "string",
              description: "The phone of the user",
            },
            picture: {
              type: "string",
              description: "The picture of the user",
            },
            googleId: {
              type: "string",
              description: "The id of the user",
            },
            isPartner: {
              type: "boolean",
              description: "user as a partner ",
            },
            isStaff: {
              type: "boolean",
              description: "user as a staff",
            },
          },
        },

        //user login with google
        UserLoginWithGoogle: {
          type: "object",
          require: ["email", "password"],
          properties: {
            email: {
              type: "string",
              description: "The email of the user",
            },
            googleId: {
              type: "string",
              description: "The id of the user",
            },
          },
        },

        //ForgotPassword
        UserForgot: {
          type: "object",
          require: ["email"],
          properties: {
            email: {
              type: "string",
              description: "The email of the user",
            },
          },
        },

        //resettPassword
        UserReset: {
          type: "object",
          require: ["email", "password"],
          properties: {
            token: {
              type: "string",
              description: "The token sent to the user email",
            },
            password: {
              type: "string",
              description: "The new password of the user",
            },
          },
        },

        //STAFF
        Staffs: {
          type: "object",
          require: ["firstName", "lastName", "email", "password", "phone"],
          properties: {
            firstName: {
              type: "string",
              description: "The first name of the staff",
              required: true,
            },
            lastName: {
              type: "string",
              description: "The last name of the staff",
              required: true,
            },
            email: {
              type: "string",
              description: "The email of the staff",
              required: true,
            },
            password: {
              type: "string",
              description: "The password of the staff",
              required: true,
            },
            phone: {
              type: "string",
              description: "The phone number of the staff",
              required: true,
            },
          },
        },

        StaffLogin: {
          type: "object",
          require: ["email", "password"],
          properties: {
            email: {
              type: "string",
              description: "The email of the staff",
              required: true,
            },
            password: {
              type: "string",
              description: "The password of the staff",
              required: true,
            },
          },
        },

        //PRODUCT SERVICES
        ProductServices: {
          type: "object",
          require: [
            "name",
            "description",
            "country",
            "currency",
            "amount",
            "timeline",
          ],
          properties: {
            name: {
              type: "string",
              description: "The name of the product service",
              required: true,
            },
            feature: {
              type: "array",
              description: "The features of the product service",
              required: true,
            },
            description: {
              type: "string",
              description: "The description of the product service",
              required: true,
            },
            country: {
              type: "string",
              description: "The country of the product service",
              required: true,
            },
            currency: {
              type: "string",
              description: "The currerncy of the product service",
              required: true,
            },
            amount: {
              type: "string",
              description: "The amount of the product service ",
              required: true,
            },
            timeline: {
              type: "string",
              description: "The timeline for the product service ",
              required: true,
            },
          },
        },

        // SERVICE FORMS

        ServiceForms: {
          type: "object",
          require: ["title", "type", "description", "compulsory"],
          properties: {
            title: {
              type: "string",
              description: "the title form question",
            },
            type: {
              type: "string",
              description: "type of the question",
            },
            description: {
              type: "string",
              description: "description of the question",
            },
            compulsory: {
              type: "boolean",
              description: "status of the question",
            },
          },
        },

        //BANK
        Banks: {
          type: "object",
          require: ["bankName", "bankCode", "bankUrl", "bankImage"],
          properties: {
            name: {
              type: "string",
              description: "The bank name of the bank",
            },
            code: {
              type: "string",
              description: "The bank code of the bank",
            },
            url: {
              type: "string",
              description: "The bank url of the bank",
            },
            image: {
              type: "string",
              description: "The bank image of the bank",
            },
          },
        },

        //COUNTRY
        Country: {
          type: "object",
          require: ["iso", "name", "flagUrl", "code", "currency"],
          properties: {
            name: {
              type: "string",
              description: "The country name of the country",
            },
            code: {
              type: "string",
              description: "The country code of the country",
            },
            iso: {
              type: "string",
              description: "The iso of the country",
            },
            currency: {
              type: "string",
              description: "The currency of the country",
            },
          },
        },

        //DILIGENCE ENTERPRISE
        DiligenceEnterprise: {
          type: "object",
          require: [
            "name",
            "address",
            "adminEmail",
            "logo",
            "color",
            "backDrop",
          ],
          properties: {
            name: {
              type: "string",
              description: "The name of the enterprise",
            },
            address: {
              type: "string",
              description: "The address of the enterprise",
            },
            adminEmail: {
              type: "string",
              description: "The email of the enterprise admin",
            },
            logo: {
              type: "string",
              description: "The logo of the enterprise",
            },
            color: {
              type: "string",
              description: "The primary color of the enterprise",
            },
            backdrop: {
              type: "string",
              description: "The backDrop of the enterprise",
            },
          },
        },

        //DILIGENCE MANAGER
        DiligenceManager: {
          type: "object",
          require: ["name", "location", "managerEmail"],
          properties: {
            name: {
              type: "string",
              description: "The name of the enterprise",
            },
            location: {
              type: "string",
              description: "The location of the enterprise",
            },
            managerEmail: {
              type: "string",
              description: "The email of the enterprise manager",
            },
          },
        },

        //DILIGENCE STAFF
        DiligenceStaff: {
          type: "object",
          require: ["email"],
          properties: {
            email: {
              type: "string",
              description: "The email of the staff",
            },
          },
        },

        //DILIGENCE USER
        DiligenceUser: {
          type: "object",
          require: ["firstName", "lastName", "email", "password"],
          properties: {
            firstName: {
              type: "string",
              description: "The first name of the user",
            },
            lastName: {
              type: "string",
              description: "The last name of the user",
            },
            email: {
              type: "string",
              description: "The email of the user",
            },
            password: {
              type: "string",
              description: "The password of the user",
            },
          },
        },

        //DILIGENCE REQUEST
        DiligenceRequest: {
          type: "object",
          require: ["name", "registrationNumber", "email"],
          properties: {
            name: {
              type: "string",
              description: "The name of the business",
            },
            registrationNumber: {
              type: "string",
              description: "The reistration number of the business",
            },
            email: {
              type: "string",
              description: "The email of the diligence User",
            },
            enterpriseId: {
              type: "string",
              description: "The ID of the enterprise",
            },
          },
        },

        //DILIGENCE BRANCH REQUEST
        DiligenceBranchRequest: {
          type: "object",
          require: ["managerId", "managerEmail"],
          properties: {
            managerId: {
              type: "string",
              description: "The ID of the manager",
            },
            managerEmail: {
              type: "string",
              description: "The email of the manager",
            },
          },
        },

        //UPDATE DILIGENCE REQUEST
        UpdateDiligenceRequest: {
          type: "object",
          require: ["name", "registrationNumber"],
          properties: {
            name: {
              type: "string",
              description: "The name of the business",
            },
            registrationNumber: {
              type: "string",
              description: "The reistration number of the business",
            },
          },
        },

        //DILIGENCE DOCUMENT
        DiligenceDocument: {
          type: "object",
          require: ["name", "description", "link", "type"],
          properties: {
            name: {
              type: "string",
              description: "The name of the request document",
            },
            description: {
              type: "string",
              description: "The description of the request document",
            },
            link: {
              type: "string",
              description: "The link of the request document",
            },
            type: {
              type: "string",
              description: "The type of the request document",
            },
          },
        },

        //NIGERIAN BANKS
        CreateNigerianBank: {
          type: "object",
          require: ["name", "slug", "logo", "color"],
          properties: {
            name: {
              type: "string",
              description: "The name of the bank",
            },
            slug: {
              type: "string",
              description: "The slug of the bank",
            },
            logo: {
              type: "string",
              description: "The logo of the bank",
            },
            color: {
              type: "string",
              description: "The color of the bank",
            },
          },
        },

        //UPDATE NIGERIAN BANKS
        UpdateNigerianBank: {
          type: "object",
          require: ["color"],
          properties: {
            color: {
              type: "string",
              description: "The color of the bank",
            },
          },
        },

        //UPDATE MANY REQUEST
        UpdateManyRequest: {
          type: "object",
          require: ["requestIds"],
          properties: {
            requestIds: {
              type: "array",
              description: "The request IDs of the request to be verified",
            },
          },
        },

        //ERRORS
        Error: {
          type: "object",
          require: ["error"],
          properties: {
            error: {
              type: "string",
              description: "Bad request",
            },
          },
        },

        //SERVICE CATEGORY
        ServiceCategory: {
          type: "object",
          require: ["name", "description"],
          properties: {
            name: {
              type: "string",
              description: "The name of the service",
            },
            description: {
              type: "string",
              description: "The description of the service",
            },
          },
        },

        GetProductQAByQuestion: {
          type: "object",
          require: ["question", "productId"],
          properties: {
            question: {
              type: "string",
              description: "The question of the product form",
            },
            requestId: {
              type: "string",
              description: "The user request id",
            },
          },
        },
        //SERVICE CATEGORY FORM
        ServiceCategoryForm: {
          type: "object",
          require: ["title", "type", "compulsory", "description"],
          properties: {
            title: {
              type: "string",
              description: "The title of the form",
            },
            description: {
              type: "string",
              description: "The description of the question",
            },
            type: {
              type: "string",
              description: "The type of the answer to be sent",
            },

            compulsory: {
              type: "boolean",
              description: "compulsory field",
            },
          },
        },

        ServiceCategorySubForm: {
          type: "object",
          require: ["question", "type", "compulsory", "options"],

          properties: {
            question: {
              type: "string",
              description: "the form question",
            },
            type: {
              type: "string",
              description: "type of the question",
            },
            options: {
              type: "array",
              description: "options of the question",
            },
            compulsory: {
              type: "boolean",
              description: "status of the question",
            },
            fileName: {
              type: "string",
              description: "name of the file",
            },
            allowOther: {
              type: "boolean",
              description: "allow other answer of the file",
            },
            fileLink: {
              type: "string",
              description: "link of the file",
            },
            fileType: {
              type: "string",
              description: "type of the file",
            },
            dependsOn: {
              type: "string",
              description: "depends on ?",
            },
          },
        },

        ServiceSubForm: {
          type: "object",
          require: ["question", "type", "compulsory", "options"],

          properties: {
            question: {
              type: "string",
              description: "the form question",
            },
            type: {
              type: "string",
              description: "type of the question",
            },
            options: {
              type: "array",
              description: "options of the question",
            },
            compulsory: {
              type: "boolean",
              description: "status of the question",
            },
            fileName: {
              type: "string",
              description: "name of the file",
            },
            allowOther: {
              type: "boolean",
              description: "allow other answer",
            },
            dependsOn: {
              type: "string",
              description: "depends on?",
            },
            fileLink: {
              type: "string",
              description: "link of the file",
            },
            fileType: {
              type: "string",
              description: "type of the file",
            },
          },
        },
        //PRODUCT
        CreateProduct: {
          type: "object",
          require: ["userId"],
          properties: {
            userId: {
              type: "string",
              description: "The id of the user",
            },
          },
        },

        AddProductQA: {
          type: "object",
          require: ["form"],
          properties: {
            form: {
              type: "array",
              description: "The question of the service selected",
              items: {
                type: "object",
                require: ["question", "answer", "type", "compulsory"],
                properties: {
                  question: {
                    type: "string",
                    description: "the form question",
                  },
                  answer: {
                    type: "array",
                    description: "answer to the question",
                  },
                  type: {
                    type: "string",
                    description: "type of the answer to be provided",
                  },
                  compulsory: {
                    type: "boolean",
                    description: "compulsory question",
                  },
                  isGeneral: {
                    type: "boolean",
                    description: "is a general question?",
                  },
                  subForm: {
                    type: "boolean",
                    description: "flag to add subform",
                  },
                  profile: {
                    type: "array",
                    description: "The question of the profile selected",
                    items: {
                      type: "object",
                      require: ["question", "answer", "type", "compulsory"],
                      properties: {
                        question: {
                          type: "string",
                          description: "the form question",
                        },
                        answer: {
                          type: "array",
                          description: "answer to the question",
                        },
                        type: {
                          type: "string",
                          description: "type of the answer to be provided",
                        },
                        compulsory: {
                          type: "boolean",
                          description: "compulsory question",
                        },
                      },
                    },
                  },
                  file: {
                    type: "object",
                    description: "The question of the profile selected",
                    properties: {
                      name: {
                        type: "string",
                        description: "Name of the file",
                      },
                      description: {
                        type: "string",
                        description: "Description of the file",
                      },
                      link: {
                        type: "string",
                        description: "Link to the file",
                      },
                      type: {
                        type: "string",
                        description: "Type of the file",
                      },
                    },
                    require: ["name", "description", "link", "type"],
                  },
                },
              },
            },
          },
        },

        //Payment
        PaymentInitialization: {
          type: "object",
          require: ["question", "answer"],
          properties: {
            email: {
              type: "string",
              description: "The question of the service selected",
            },
            currency: {
              type: "string",
              description: "The currency",
            },
            amount: {
              type: "string",
              description: "The amount",
            },
            card_number: {
              type: "string",
              description: "The number of the card",
            },
            card_pin: {
              type: "string",
              description: "The pin of the card",
            },
            cvv: {
              type: "string",
              description: "The cvv of the card",
            },
            expiry_month: {
              type: "string",
              description: "The expiry month of the card",
            },
            expiry_year: {
              type: "string",
              description: "The expiry date of the card",
            },

            account_bank: {
              type: "string",
              description: "The account bank",
            },
            type: {
              type: "string",
              description: "The type of the payment (Transfer, Card, USSD)",
            },
            productId: {
              type: "string",
              description: "The id of the product",
            },
            requestId: {
              type: "string",
              description: "The id of the request",
            },
          },
        },

        ProductServiceId: {
          type: "object",
          require: ["serviceId", "productId"],
          properties: {
            requestId: {
              type: "string",
              description: "The  id of the request",
            },
            productId: {
              type: "string",
              description: "The id of the product",
            },
          },
        },

        ValidateOTP: {
          type: "object",
          require: ["question", "answer"],
          properties: {
            flw_ref: {
              type: "string",
              description: "The flutterwave reference",
            },
            email: {
              type: "string",
              description: "The email of the user",
            },
            otp: {
              type: "string",
              description: "The otp sent to the user",
            },
            amount: {
              type: "string",
              description: "The amount of the payment",
            },
            currency: {
              type: "string",
              description: "The currency of the payment",
            },
          },
        },

        PaymentConfirmation: {
          type: "object",
          require: ["email", "productId"],
          properties: {
            email: {
              type: "string",
              description: "The question of the service selected",
            },
            requestId: {
              type: "string",
              description: "The id of the request",
            },
          },
        },
      },

      responses: {
        401: {
          description: "Unauthorized - User not authorized",
          contents: "application/json",
        },
        400: {
          description: "Not found",
          contents: "application/json",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    tags: [
      {
        name: "Users",
        description: "The users management API",
      },
      // {
      //   name: "Staffs",
      //   description: "The staffs management API",
      // },
      {
        name: "Banks",
        description: "The banks management API",
      },
      {
        name: "Country",
        description: "The Country management API",
      },
      {
        name: "Nigerian Banks",
        description: "The nigerian banks management API",
      },
      {
        name: "Diligence Enterprise",
        description: "The diligence enterprise management API",
      },
      {
        name: "Diligence Manager",
        description: "The diligence manager management API",
      },
      {
        name: "Diligence Staff",
        description: "The diligence staff management API",
      },
      {
        name: "Diligence Request",
        description: "The diligence request management API",
      },
      {
        name: "Diligence Document",
        description: "The diligence document management API",
      },
      {
        name: "Diligence User",
        description: "The diligence user management API",
      },
      {
        name: "Service",
        description: "The service management API",
      },
      {
        name: "Product",
        description: "The service product management API",
      },
      {
        name: "Product Request",
        description: "The product management API",
      },
      {
        name: "Payment",
        description: "The payment management API",
      },
    ],
    paths: {
      "/users": {
        post: {
          tags: ["Users"],
          summary: "Create new user in system",
          description: "Create new user in system",

          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Users", //
                },
              },
            },
          },
          produces: ["application/json"],
          responses: {
            200: {
              description: "New user is created",
              schema: {
                $ref: "#/components/schemas/Users",
              },
            },
          },
        },

        get: {
          tags: ["Users"],
          summary: "Get all users in system",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/components/schemas/Users",
              },
            },
          },
        },
      },

      "/users/google": {
        post: {
          tags: ["Users"],
          summary: "Create new user with google in system",
          description: "Create new with google user in system",

          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UserWithGoogle", //
                },
              },
            },
          },
          produces: ["application/json"],
          responses: {
            200: {
              description: "New user is created",
              schema: {
                $ref: "#/components/schemas/UserWithGoogle",
              },
            },
          },
        },
      },

      "/users/verification/{token}": {
        post: {
          tags: ["Users"],
          summary: "Verify new user",
          description: "Verify new user",
          parameters: [
            {
              name: "token",
              in: "path",
              required: true,
              description: "token sent to the user's email",
              type: "string",
            },
          ],

          produces: ["application/json"],
          responses: {
            200: {
              description: "New user is created",
              schema: {
                $ref: "#/components/schemas/Users",
              },
            },
          },
        },
      },

      "/users/{id}": {
        get: {
          summary: "Get a user with given ID",
          tags: ["Users"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of user to be found",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "User is fetched",
              schema: {
                $ref: "#/components/schemas/Users",
              },
            },
          },
        },

        delete: {
          summary: "Delete user with given ID",
          tags: ["Users"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of user to be deleted",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "User is deleted",
              schema: {
                $ref: "#/components/schemas/Users",
              },
            },
          },
        },

        put: {
          summary: "Update user with give ID",
          tags: ["Users"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of user to be updated",
              type: "string",
            },
            {
              name: "user",
              in: "body",
              description: "User with new values of properties",
              schema: {
                $ref: "#/components/schemas/Users",
              },
            },
          ],
          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Users", //
                },
              },
            },
          },
          responses: {
            200: {
              description: "User is updated",
              schema: {
                $ref: "#/components/schemas/Users",
              },
            },
          },
        },
      },

      "/users/login": {
        post: {
          tags: ["Users"],
          summary: "Sign in user into system",
          description: "Login into system",

          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UserLogin", //
                },
              },
            },
          },
          produces: ["application/json"],
          responses: {
            200: {
              description: "User successfully logged in",
              schema: {
                $ref: "#/components/schemas/Users",
              },
            },
          },
        },
      },

      "/users/forgotpassword": {
        post: {
          tags: ["Users"],
          summary: "Forgot password",
          description: "Forgot password ",

          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UserForgot", //
                },
              },
            },
          },

          produces: ["application/json"],
          responses: {
            200: {
              description: "Reset Link has been sent successfully",
              schema: {
                $ref: "#/components/schemas/UserForgot",
              },
            },
          },
        },
      },

      "/users/passwordreset": {
        post: {
          tags: ["Users"],
          summary: "Reset password",
          description: "reset password",
          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UserReset", //
                },
              },
            },
          },

          produces: ["application/json"],
          responses: {
            200: {
              description: "Password reset successfully",
              schema: {
                $ref: "#/components/schemas/UserReset",
              },
            },
          },
        },
      },

      // Product
      "/product/{serviceId}": {
        post: {
          tags: ["Product"],
          summary: "Create a new product service with service category ID",
          parameters: [
            {
              name: "serviceId",
              in: "path",
              required: true,
              description: "ID of service category for the product service",
              type: "string",
            },
          ],

          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ProductServices", //
                },
              },
            },
          },

          produces: ["application/json"],
          responses: {
            201: {
              description: "Product service created successfully",
              schema: {
                $ref: "#/components/schemas/ProductServices",
              },
            },
          },
        },
      },

      "/product/allByServiceCategory/{serviceId}": {
        get: {
          summary: "Get all product service with service category ID",
          tags: ["Product"],
          parameters: [
            {
              name: "serviceId",
              in: "path",
              required: true,
              description: "ID of service category of the product service",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Product service fetched successfully",
              schema: {
                $ref: "#/components/schemas/ProductServices",
              },
            },
          },
        },
      },

      "/product": {
        get: {
          tags: ["Product"],
          summary: "Get all product services ",
          responses: {
            200: {
              description: "Product services gotten successfully",
              schema: {
                $ref: "#/components/schemas/ProductServices",
              },
            },
          },
        },
      },

      "/product/{id}": {
        get: {
          summary: "Get a product service with given ID",
          tags: ["Product"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of the product service",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Product service fetched successfully",
              schema: {
                $ref: "#/components/schemas/ProductServices",
              },
            },
          },
        },

        delete: {
          summary: "Delete a product service with given ID",
          tags: ["Product"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of the product service to be deleted",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Product service deleted successfully",
              schema: {
                $ref: "#/components/schemas/ProductServices",
              },
            },
          },
        },

        put: {
          tags: ["Product"],
          summary: "Update an existing product service with given ID",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of product service",
              type: "string",
            },
            {
              name: "productServices",
              in: "body",
              description: " new properties of the product service",
              schema: {
                $ref: "#/components/schemas/ProductServices",
              },
            },
          ],

          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ProductServices", //
                },
              },
            },
          },

          produces: ["application/json"],
          responses: {
            200: {
              description: "Product service updated successfully",
              schema: {
                $ref: "#/components/schemas/ProductServices",
              },
            },
          },
        },
      },

      "/product/form/{productId}": {
        post: {
          tags: ["Product"],
          summary: "Create a new product service form with service ID",
          parameters: [
            {
              name: "productId",
              in: "path",
              required: true,
              description: "ID of product service for the service form",
              type: "string",
            },
          ],

          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ServiceForms", //
                },
              },
            },
          },

          produces: ["application/json"],
          responses: {
            201: {
              description: "Service form created successfully",
              schema: {
                $ref: "#/components/schemas/ServiceForms",
              },
            },
          },
        },
      },

      "/product/formByService/{productId}": {
        get: {
          summary: "Get all service forms with service ID",
          tags: ["Product"],
          parameters: [
            {
              name: "productId",
              in: "path",
              required: true,
              description: "ID of service of the service form",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Service form fetched successfully",
              schema: {
                $ref: "#/components/schemas/ServiceForms",
              },
            },
          },
        },
      },

      "/product/form/{id}": {
        get: {
          summary: "Get a product service with given ID",
          tags: ["Product"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of the service form",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Service form fetched successfully",
              schema: {
                $ref: "#/components/schemas/ServiceForms",
              },
            },
          },
        },
        delete: {
          summary: "Delete a service form with given ID",
          tags: ["Product"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of the service form to be deleted",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Service form deleted successfully",
              schema: {
                $ref: "#/components/schemas/ServiceForms",
              },
            },
          },
        },
        put: {
          tags: ["Product"],
          summary: "Update an existing service form with given ID",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of the service form",
              type: "string",
            },
          ],

          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ServiceForms", //
                },
              },
            },
          },

          produces: ["application/json"],
          responses: {
            200: {
              description: "Service form updated successfully!",
              schema: {
                $ref: "#/components/schemas/ServiceForms",
              },
            },
          },
        },
      },

      "/product/form/all": {
        get: {
          tags: ["Product"],
          summary: "Get all service forms ",
          responses: {
            200: {
              description: "Service forms gotten successfully",
              schema: {
                $ref: "#/components/schemas/ServiceForms",
              },
            },
          },
        },
      },

      "/product/subform/{formId}": {
        post: {
          tags: ["Product"],
          summary: "Create a new service sub form",
          description: "Create new service sub form in system",
          parameters: [
            {
              name: "formId",
              in: "path",
              required: true,
              description: "ID of form to be fetched",
              type: "string",
            },
          ],
          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ServiceSubForm", //
                },
              },
            },
          },
          produces: ["application/json"],
          responses: {
            200: {
              description: "New service sub form is created",
              schema: {
                $ref: "#/components/schemas/ServiceSubForm",
              },
            },
          },
        },
      },

      "/product/subforms/{formId}": {
        get: {
          summary: "Get all service sub forms under a service category",
          tags: ["Product"],
          parameters: [
            {
              name: "formId",
              in: "path",
              required: true,
              description: "form ID to be fetched",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Service sub form is fetched",
              schema: {
                $ref: "#/components/schemas/ServiceSubForm",
              },
            },
          },
        },
      },

      "/product/subform/{id}": {
        get: {
          summary: "Get a service sub form with given ID",
          tags: ["Product"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of service sub form to be fetched",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Service sub form is fetched",
              schema: {
                $ref: "#/components/schemas/ServiceSubForm",
              },
            },
          },
        },

        delete: {
          summary: "Delete a service sub form with given ID",
          tags: ["Product"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of service sub form to be deleted",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Service sub form is deleted",
              schema: {
                $ref: "#/components/schemas/ServiceSubForm",
              },
            },
          },
        },

        put: {
          summary: "Update a service sub form with give ID",
          tags: ["Product"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of service sub form to be updated",
              type: "string",
            },
          ],
          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ServiceSubForm", //
                },
              },
            },
          },
          responses: {
            200: {
              description: "Service sub form is updated",
              schema: {
                $ref: "#/components/schemas/ServiceSubForm",
              },
            },
          },
        },
      },

      //Services
      "/services": {
        post: {
          tags: ["Service"],
          summary: "Create a new service",
          description: "Create new service in system",

          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ServiceCategory", //
                },
              },
            },
          },
          produces: ["application/json"],
          responses: {
            200: {
              description: "New service is created",
              schema: {
                $ref: "#/components/schemas/ServiceCategory",
              },
            },
          },
        },

        get: {
          tags: ["Service"],
          summary: "Get all services in system",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/components/schemas/ServiceCategory",
              },
            },
          },
        },
      },

      "/services/{id}": {
        get: {
          summary: "Get a service with given ID",
          tags: ["Service"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of service to be fetched",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Service is fetched",
              schema: {
                $ref: "#/components/schemas/ServiceCategory",
              },
            },
          },
        },

        delete: {
          summary: "Delete service with given ID",
          tags: ["Service"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of service to be deleted",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Service is deleted",
              schema: {
                $ref: "#/components/schemas/ServiceCategory",
              },
            },
          },
        },

        put: {
          summary: "Update a service with give ID",
          tags: ["Service"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of service to be updated",
              type: "string",
            },
          ],
          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ServiceCategory", //
                },
              },
            },
          },
          responses: {
            200: {
              description: "Service is updated",
              schema: {
                $ref: "#/components/schemas/ServiceCategory",
              },
            },
          },
        },
      },

      "/services/form/{serviceId}": {
        post: {
          tags: ["Service"],
          summary: "Create a new service form",
          description: "Create new service form in system",
          parameters: [
            {
              name: "serviceId",
              in: "path",
              required: true,
              description: "ID of service form to be fetched",
              type: "string",
            },
          ],
          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ServiceCategoryForm", //
                },
              },
            },
          },
          produces: ["application/json"],
          responses: {
            200: {
              description: "New service form is created",
              schema: {
                $ref: "#/components/schemas/ServiceCategoryForm",
              },
            },
          },
        },
      },

      "/services/forms/{serviceId}": {
        get: {
          summary: "Get all service forms under a service category",
          tags: ["Service"],
          parameters: [
            {
              name: "serviceId",
              in: "path",
              required: true,
              description: "service category ID to be fetched",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Service form is fetched",
              schema: {
                $ref: "#/components/schemas/ServiceCategoryForm",
              },
            },
          },
        },
      },

      "/services/form/{id}": {
        get: {
          summary: "Get a service form with given ID",
          tags: ["Service"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of service form to be fetched",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Service form is fetched",
              schema: {
                $ref: "#/components/schemas/ServiceCategoryForm",
              },
            },
          },
        },

        delete: {
          summary: "Delete a service form with given ID",
          tags: ["Service"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of service form to be deleted",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Service form is deleted",
              schema: {
                $ref: "#/components/schemas/ServiceCategoryForm",
              },
            },
          },
        },

        put: {
          summary: "Update a service form with give ID",
          tags: ["Service"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of service form to be updated",
              type: "string",
            },
          ],
          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ServiceCategoryForm", //
                },
              },
            },
          },
          responses: {
            200: {
              description: "Service form is updated",
              schema: {
                $ref: "#/components/schemas/ServiceCategoryForm",
              },
            },
          },
        },
      },

      "/services/subform/{formId}": {
        post: {
          tags: ["Service"],
          summary: "Create a new service sub form",
          description: "Create new service sub form in system",
          parameters: [
            {
              name: "formId",
              in: "path",
              required: true,
              description: "ID of service sub form to be fetched",
              type: "string",
            },
          ],
          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ServiceCategorySubForm", //
                },
              },
            },
          },
          produces: ["application/json"],
          responses: {
            200: {
              description: "New service sub form is created",
              schema: {
                $ref: "#/components/schemas/ServiceCategorySubForm",
              },
            },
          },
        },
      },

      "/services/subforms/{formId}": {
        get: {
          summary: "Get all service sub forms under a service category",
          tags: ["Service"],
          parameters: [
            {
              name: "formId",
              in: "path",
              required: true,
              description: "service category ID to be fetched",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Service sub form is fetched",
              schema: {
                $ref: "#/components/schemas/ServiceCategorySubForm",
              },
            },
          },
        },
      },

      "/services/subform/{id}": {
        get: {
          summary: "Get a service sub form with given ID",
          tags: ["Service"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of service sub form to be fetched",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Service sub form is fetched",
              schema: {
                $ref: "#/components/schemas/ServiceCategorySubForm",
              },
            },
          },
        },

        delete: {
          summary: "Delete a service sub form with given ID",
          tags: ["Service"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of service sub form to be deleted",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Service sub form is deleted",
              schema: {
                $ref: "#/components/schemas/ServiceCategorySubForm",
              },
            },
          },
        },

        put: {
          summary: "Update a service sub form with give ID",
          tags: ["Service"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of service sub form to be updated",
              type: "string",
            },
          ],
          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ServiceCategorySubForm", //
                },
              },
            },
          },
          responses: {
            200: {
              description: "Service sub form is updated",
              schema: {
                $ref: "#/components/schemas/ServiceCategorySubForm",
              },
            },
          },
        },
      },

      //Product request
      "/productRequest": {
        post: {
          tags: ["Product Request"],
          summary: "Create a new product for a user",
          description: "Create new product in system",

          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreateProduct", //
                },
              },
            },
          },
          produces: ["application/json"],
          responses: {
            200: {
              description: "New user product is created",
              schema: {
                $ref: "#/components/schemas/CreateProduct",
              },
            },
          },
        },
      },

      "/productRequest/user/{userId}": {
        get: {
          tags: ["Product Request"],
          summary: "Get all users products in system",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of user to be fetched",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "user products list is fetched",
              schema: {
                $ref: "#/components/schemas/CreateProduct",
              },
            },
          },
        },
      },

      "/productRequest/{id}": {
        get: {
          tags: ["Product Request"],
          summary: "Get a product by product ID",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of product to be fetched",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Product is fetched",
              schema: {
                $ref: "#/components/schemas/CreateProduct",
              },
            },
          },
        },
      },

      "/productRequest/form/{requestId}": {
        post: {
          tags: ["Product Request"],
          summary: "Save a user product QA",
          description: "Save user product QA in system",
          parameters: [
            {
              name: "requestId",
              in: "path",
              required: true,
              description: "ID of product",
              type: "string",
            },
          ],
          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/AddProductQA", //
                },
              },
            },
          },
          produces: ["application/json"],
          responses: {
            200: {
              description: "New user product is created",
              schema: {
                $ref: "#/components/schemas/AddProductQA",
              },
            },
          },
        },

        get: {
          tags: ["Product Request"],
          summary: "Get all users products QA in system",
          parameters: [
            {
              name: "requestId",
              in: "path",
              required: true,
              description: "ID of product",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/components/schemas/AddProductQA",
              },
            },
          },
        },
      },

      "/productRequest/form/formByQuestion": {
        get: {
          tags: ["Product Request"],
          summary: "Get all users products QA in system",
          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GetProductQAByQuestion", //
                },
              },
            },
          },
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/components/schemas/GetProductQAByQuestion",
              },
            },
          },
        },
      },
      "/productRequest/productId": {
        post: {
          tags: ["Product Request"],
          summary: "Add service ID to the product",
          description: "Add service ID to the product",

          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ProductServiceId", //
                },
              },
            },
          },
          produces: ["application/json"],
          responses: {
            200: {
              description: "New user product is created",
              schema: {
                $ref: "#/components/schemas/ProductServiceId",
              },
            },
          },
        },
      },

      "/productRequest/submission/{requestId}": {
        post: {
          tags: ["Product Request"],
          summary: "Submit a new product",
          description: "Submit a new product",
          parameters: [
            {
              name: "requestId",
              in: "path",
              required: true,
              description: "ID of product",
              type: "string",
            },
          ],

          produces: ["application/json"],
          responses: {
            200: {
              description: "New user product is submitted successfully",
              schema: {
                $ref: "#/components/schemas/AddProductQA",
              },
            },
          },
        },
      },

      // "/productRequest/form/{id}": {
      //   get: {
      //     summary: "Get a user product QA with given ID",
      //     tags: ["Product"],
      //     parameters: [
      //       {
      //         name: "id",
      //         in: "path",
      //         required: true,
      //         description: "ID of product to be fetched",
      //         type: "string",
      //       },
      //     ],
      //     responses: {
      //       200: {
      //         description: "Product QA is fetched",
      //         schema: {
      //           $ref: "#/components/schemas/AddProductQA",
      //         },
      //       },
      //     },
      //   },

      //   // delete: {
      //   //   summary: "Delete bank with given ID",
      //   //   tags: ["Banks"],
      //   //   parameters: [
      //   //     {
      //   //       name: "id",
      //   //       in: "path",
      //   //       required: true,
      //   //       description: "ID of bank to be deleted",
      //   //       type: "string",
      //   //     },
      //   //   ],
      //   //   responses: {
      //   //     200: {
      //   //       description: "Bank is deleted",
      //   //       schema: {
      //   //         $ref: "#/components/schemas/Banks",
      //   //       },
      //   //     },
      //   //   },
      //   // },

      //   // put: {
      //   //   summary: "Update bank with give ID",
      //   //   tags: ["Banks"],
      //   //   parameters: [
      //   //     {
      //   //       name: "id",
      //   //       in: "path",
      //   //       required: true,
      //   //       description: "ID of bank to be updated",
      //   //       type: "string",
      //   //     },
      //   //   ],
      //   //   requestBody: {
      //   //     // expected request body
      //   //     content: {
      //   //       // content-type
      //   //       "application/json": {
      //   //         schema: {
      //   //           $ref: "#/components/schemas/Banks", //
      //   //         },
      //   //       },
      //   //     },
      //   //   },
      //   //   responses: {
      //   //     200: {
      //   //       description: "Bank is updated",
      //   //       schema: {
      //   //         $ref: "#/components/schemas/Banks",
      //   //       },
      //   //     },
      //   //   },
      //   // },
      // },

      "/products/service/qa/{id}": {
        // get: {
        //   summary: "Get a service QA of a user product with a given ID",
        //   tags: ["Banks"],
        //   parameters: [
        //     {
        //       name: "id",
        //       in: "path",
        //       required: true,
        //       description: "ID of product to be fetched",
        //       type: "string",
        //     },
        //   ],
        //   responses: {
        //     200: {
        //       description: "Product service QA is fetched",
        //       schema: {
        //         $ref: "#/components/schemas/AddProductQA",
        //       },
        //     },
        //   },
        // },
        // delete: {
        //   summary: "Delete product service with given ID",
        //   tags: ["Banks"],
        //   parameters: [
        //     {
        //       name: "id",
        //       in: "path",
        //       required: true,
        //       description: "ID of product ser to be deleted",
        //       type: "string",
        //     },
        //   ],
        //   responses: {
        //     200: {
        //       description: "Bank is deleted",
        //       schema: {
        //         $ref: "#/components/schemas/Banks",
        //       },
        //     },
        //   },
        // },
        // put: {
        //   summary: "Update bank with give ID",
        //   tags: ["Banks"],
        //   parameters: [
        //     {
        //       name: "id",
        //       in: "path",
        //       required: true,
        //       description: "ID of bank to be updated",
        //       type: "string",
        //     },
        //   ],
        //   requestBody: {
        //     // expected request body
        //     content: {
        //       // content-type
        //       "application/json": {
        //         schema: {
        //           $ref: "#/components/schemas/Banks", //
        //         },
        //       },
        //     },
        //   },
        //   responses: {
        //     200: {
        //       description: "Bank is updated",
        //       schema: {
        //         $ref: "#/components/schemas/Banks",
        //       },
        //     },
        //   },
        // },
      },

      //payments
      //make payment
      "/payment": {
        post: {
          tags: ["Payment"],
          summary: "Initialize payment",
          description: "Initialize payment",

          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/PaymentInitialization", //
                },
              },
            },
          },
          produces: ["application/json"],
          responses: {
            200: {
              description: "payment initialized successfully",
              schema: {
                $ref: "#/components/schemas/PaymentInitialization",
              },
            },
          },
        },
      },

      "/payment/otp-validation": {
        post: {
          tags: ["Payment"],
          summary: "Validate flutterwave OTP",
          description: "validate flutterwave OTP wneh making payment with card",

          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ValidateOTP", //
                },
              },
            },
          },
          produces: ["application/json"],
          responses: {
            200: {
              description: "otp validated successfully",
              schema: {
                $ref: "#/components/schemas/ValidateOTP",
              },
            },
          },
        },
      },

      "/payment/confirmation": {
        post: {
          tags: ["Payment"],
          summary: "Confirm flutterwave payment",
          description: "Confirm flutterwave payment",

          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/PaymentConfirmation", //
                },
              },
            },
          },
          produces: ["application/json"],
          responses: {
            200: {
              description: "payment successfully",
              schema: {
                $ref: "#/components/schemas/PaymentConfirmation",
              },
            },
          },
        },
      },

      //Banks
      "/banks": {
        post: {
          tags: ["Banks"],
          summary: "Create a new bank",
          description: "Create new bank in system",

          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Banks", //
                },
              },
            },
          },
          produces: ["application/json"],
          responses: {
            200: {
              description: "New bank is created",
              schema: {
                $ref: "#/components/schemas/Banks",
              },
            },
          },
        },

        get: {
          tags: ["Banks"],
          summary: "Get all banks in system",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/components/schemas/Banks",
              },
            },
          },
        },
      },

      "/banks/{id}": {
        get: {
          summary: "Get a bank with given ID",
          tags: ["Banks"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of bank to be fetched",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Bank is fetched",
              schema: {
                $ref: "#/components/schemas/Banks",
              },
            },
          },
        },

        delete: {
          summary: "Delete bank with given ID",
          tags: ["Banks"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of bank to be deleted",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Bank is deleted",
              schema: {
                $ref: "#/components/schemas/Banks",
              },
            },
          },
        },

        put: {
          summary: "Update bank with give ID",
          tags: ["Banks"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of bank to be updated",
              type: "string",
            },
          ],
          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Banks", //
                },
              },
            },
          },
          responses: {
            200: {
              description: "Bank is updated",
              schema: {
                $ref: "#/components/schemas/Banks",
              },
            },
          },
        },
      },

      //countries
      "/countries": {
        post: {
          tags: ["Country"],
          summary: "Create a new country",
          description: "Create new country in system",

          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Country", //
                },
              },
            },
          },
          produces: ["application/json"],
          responses: {
            200: {
              description: "New country is created",
              schema: {
                $ref: "#/components/schemas/Country",
              },
            },
          },
        },

        get: {
          tags: ["Country"],
          summary: "Get all country in system",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/components/schemas/Country",
              },
            },
          },
        },
      },

      "/countries/{id}": {
        get: {
          summary: "Get a country with given ID",
          tags: ["Country"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of country to be fetched",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Country is fetched",
              schema: {
                $ref: "#/components/schemas/Country",
              },
            },
          },
        },

        delete: {
          summary: "Delete country with given ID",
          tags: ["Country"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of country to be deleted",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Country is deleted",
              schema: {
                $ref: "#/components/schemas/Country",
              },
            },
          },
        },

        put: {
          summary: "Update country with give ID",
          tags: ["Country"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of country to be updated",
              type: "string",
            },
          ],
          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Country", //
                },
              },
            },
          },
          responses: {
            200: {
              description: "Country is updated",
              schema: {
                $ref: "#/components/schemas/Country",
              },
            },
          },
        },
      },

      //Nigerian Banks
      "/diligence/nigerianBank": {
        get: {
          tags: ["Nigerian Banks"],
          summary: "Get all Nigerian banks",
          responses: {
            200: {
              description: "OK",
              // schema: {
              //   $ref: "#/components/schemas/Banks",
              // },
            },
          },
        },

        //create Nigerian bank
        post: {
          tags: ["Nigerian Banks"],
          summary: "Create a nigerian bank ",
          description: "Create a nigerian bank ",
          security: [{ BearerAuth: [] }],

          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreateNigerianBank", //
                },
              },
            },
          },
          produces: ["application/json"],
          responses: {
            200: {
              description: "Success",
              schema: {
                $ref: "#/components/schemas/CreateNigerianBank",
              },
            },
            401: {
              description: "Unauthorized - User not authorized",
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
            400: {
              description: "Not found",
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
      },

      "/diligence/nigerianBank/{bankId}": {
        get: {
          summary: "Get a Nigerian bank with given ID",
          tags: ["Nigerian Banks"],
          parameters: [
            {
              name: "bankId",
              in: "path",
              required: true,
              description: "Nigerian bank Id to be fetched",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Nigerian bank is fetched",
              // schema: {
              //   $ref: "#/components/schemas/DiligenceEnterprise",
              // },
            },
          },
        },

        //update nigerianBanks
        put: {
          tags: ["Nigerian Banks"],
          summary: "Update a nigerian bank color",
          description: "Update bank color",

          security: [{ BearerAuth: [] }],
          parameters: [
            {
              name: "bankId",
              in: "path",
              required: true,
              description: "Nigerian bank Id to be updated",
              type: "string",
            },
          ],
          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UpdateNigerianBank", //
                },
              },
            },
          },
          produces: ["application/json"],
          responses: {
            200: {
              description: "Nigerian bank is udpated",
              schema: {
                $ref: "#/components/schemas/UpdateNigerianBank",
              },
            },
          },
        },

        //delete nigerianBanks
        delete: {
          tags: ["Nigerian Banks"],
          summary: "delete a nigerian bank color",
          description: "delete bank color",

          security: [{ BearerAuth: [] }],
          parameters: [
            {
              name: "bankId",
              in: "path",
              required: true,
              description: "Nigerian bank Id to be updated",
              type: "string",
            },
          ],

          produces: ["application/json"],
          responses: {
            200: {
              description: "Nigerian bank is udpated",
              schema: {
                $ref: "#/components/schemas/NigerianBank",
              },
            },
          },
        },
      },

      // DILIGENCE ENTERPRISE
      "/diligence/enterprise": {
        get: {
          tags: ["Diligence Enterprise"],
          summary: "Get all diligence enterprises",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/components/schemas/DiligenceEnterprise",
              },
            },
            401: {
              description: "Unauthorized - User not authorized",
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
            400: {
              description: "Not found",
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },

        //create diligence enterprise
        post: {
          tags: ["Diligence Enterprise"],
          summary: "Create a diligence enterprise",
          description: "Create a diligence enterprise",
          security: [{ BearerAuth: [] }],

          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/DiligenceEnterprise", //
                },
              },
            },
          },
          produces: ["application/json"],
          responses: {
            200: {
              description: "Success",
              schema: {
                $ref: "#/components/schemas/DiligenceEnterprise",
              },
            },
            401: {
              description: "Unauthorized - User not authorized",
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
            400: {
              description: "Not found",
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
      },

      "/diligence/enterprise/{enterpriseId}": {
        get: {
          summary: "Get an enterprise with given ID",
          tags: ["Diligence Enterprise"],
          parameters: [
            {
              name: "enterpriseId",
              in: "path",
              required: true,
              description: "ID of enterprise to be fetched",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Diligence Enterprise is fetched",
              schema: {
                $ref: "#/components/schemas/DiligenceEnterprise",
              },
            },
            401: {
              description: "Unauthorized - User not authorized",
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
            400: {
              description: "Not found",
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },

        delete: {
          summary: "Delete Diligence Enterprise with given ID",
          tags: ["Diligence Enterprise"],
          parameters: [
            {
              name: "enterpriseId",
              in: "path",
              required: true,
              description: "ID of enterprise to found",
              type: "string",
            },
          ],

          security: [{ BearerAuth: [] }],
          responses: {
            200: {
              description: "Diligence Enterprise is deleted",
              schema: {
                $ref: "#/components/schemas/DiligenceEnterprise",
              },
            },
            401: {
              description: "Unauthorized - User not authorized",
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
            400: {
              description: "Not found",
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },

        put: {
          summary: "Update Diligence Enterprise with give ID",
          tags: ["Diligence Enterprise"],
          security: [{ BearerAuth: [] }],
          parameters: [
            {
              name: "enterpriseId",
              in: "path",
              required: true,
              description: "ID of Diligence Enterpriseto be updated",
              type: "string",
            },
          ],
          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/DiligenceEnterprise", //
                },
              },
            },
          },
          responses: {
            200: {
              description: "Diligence Enterprise is updated",
              schema: {
                $ref: "#/components/schemas/DiligeceEnterprise",
              },
            },
            401: {
              description: "Unauthorized - User not authorized",
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
            400: {
              description: "Not found",
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
      },

      "/diligence/enterprise-details/{enterpriseId}": {
        get: {
          summary: "Get an enterprise details with given ID",
          tags: ["Diligence Enterprise"],
          parameters: [
            {
              name: "enterpriseId",
              in: "path",
              required: true,
              description: "ID of enterprise details to be fetched",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Diligence Enterprise is fetched",
              schema: {
                $ref: "#/components/schemas/DiligenceEnterprise",
              },
            },
            401: {
              description: "Unauthorized - User not authorized",
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
            400: {
              description: "Not found",
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
      },

      "/diligence/enterpriseByEmail/{adminEmail}": {
        get: {
          summary: "Get an enterprise with given enterprise admin email",
          tags: ["Diligence Enterprise"],
          parameters: [
            {
              name: "adminEmail",
              in: "path",
              required: true,
              description:
                "Enterprise admin email of the enterprise to be fetched",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Diligence Enterprise is fetched",
              schema: {
                $ref: "#/components/schemas/DiligenceManager",
              },
            },
          },
        },
      },

      // DILIGENCE MANAGER
      "/diligence/managers/{enterpriseId}": {
        get: {
          tags: ["Diligence Manager"],
          summary: "Get all diligence manager",
          parameters: [
            {
              name: "enterpriseId",
              in: "path",
              required: true,
              description: "ID of enterprise to be fetched",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/components/schemas/DiligenceManager",
              },
            },
          },
        },
      },

      "/diligence/manager/{adminId}": {
        //create diligence manager
        post: {
          tags: ["Diligence Manager"],
          summary: "Create a diligence manager",
          description: "Create diligence manager",
          parameters: [
            {
              name: "adminId",
              in: "path",
              required: true,
              description: "Enterprise admin ID",
              type: "string",
            },
          ],
          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/DiligenceManager", //
                },
              },
            },
          },
          produces: ["application/json"],
          responses: {
            200: {
              description: "Manager to be updated",
              schema: {
                $ref: "#/components/schemas/DiligenceManager",
              },
            },
          },
        },
      },

      "/diligence/manager/{managerId}": {
        get: {
          summary: "Get an manager with given ID",
          tags: ["Diligence Manager"],
          parameters: [
            {
              name: "managerId",
              in: "path",
              required: true,
              description: "ID of manager to be fetched",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Diligence manager is fetched",
              schema: {
                $ref: "#/components/schemas/DiligenceManager",
              },
            },
          },
        },

        delete: {
          summary: "Delete Diligence manager with given ID",
          tags: ["Diligence Manager"],
          parameters: [
            {
              name: "managerId",
              in: "path",
              required: true,
              description: "ID of manager to be deleted",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Diligence Enterprise is deleted",
              schema: {
                $ref: "#/components/schemas/DiligenceManager",
              },
            },
          },
        },

        put: {
          summary: "Update Diligence Enterprise with give ID",
          tags: ["Diligence Manager"],
          parameters: [
            {
              name: "managerId",
              in: "path",
              required: true,
              description: "ID of Diligence manager to be updated",
              type: "string",
            },
          ],
          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/DiligenceManager", //
                },
              },
            },
          },
          responses: {
            200: {
              description: "Diligence manager is updated",
              schema: {
                $ref: "#/components/schemas/DiligenceManager",
              },
            },
          },
        },
      },

      "/diligence/managerByEmail/{managerEmail}": {
        get: {
          summary: "Get an manager with given manager email",
          tags: ["Diligence Manager"],
          parameters: [
            {
              name: "managerEmail",
              in: "path",
              required: true,
              description: "Manager email of the manager to be fetced",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Diligence manager is fetched",
              schema: {
                $ref: "#/components/schemas/DiligenceManager",
              },
            },
          },
        },
      },

      // DILIGENCE STAFF
      "/diligence/staffs/{managerId}": {
        get: {
          tags: ["Diligence Staff"],
          summary: "Get all diligence manager's staffs",
          parameters: [
            {
              name: "managerId",
              in: "path",
              required: true,
              description: "Manager ID",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/components/schemas/DiligenceStaff",
              },
            },
          },
        },
      },

      "/diligence/staffRequest/{managerId}": {
        get: {
          tags: ["Diligence Staff"],
          summary: "Get all requests by all staffs",
          parameters: [
            {
              name: "managerId",
              in: "path",
              required: true,
              description: "Manager ID",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/components/schemas/DiligenceStaff",
              },
            },
          },
        },
      },

      "/diligence/staff/{managerId}": {
        //create diligence manager
        post: {
          tags: ["Diligence Staff"],
          description: "Update diligence manager",
          parameters: [
            {
              name: "managerId",
              in: "path",
              required: true,
              description: "Manager ID",
              type: "string",
            },
          ],
          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/DiligenceStaff", //
                },
              },
            },
          },
          produces: ["application/json"],
          responses: {
            200: {
              description: "Manager to be updated",
              schema: {
                $ref: "#/components/schemas/DiligenceStaff",
              },
            },
          },
        },
      },

      "/diligence/staff/{staffId}": {
        get: {
          summary: "Get a staff with given ID",
          tags: ["Diligence Staff"],
          parameters: [
            {
              name: "staffId",
              in: "path",
              required: true,
              description: "ID of staff to be fetched",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Diligence staff is fetched",
              schema: {
                $ref: "#/components/schemas/DiligenceStaff",
              },
            },
          },
        },

        delete: {
          summary: "Delete Diligence staff with given ID",
          tags: ["Diligence Staff"],
          parameters: [
            {
              name: "staffId",
              in: "path",
              required: true,
              description: "ID of staff to be deleted",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Diligence Enterprise is deleted",
              schema: {
                $ref: "#/components/schemas/DiligenceStaff",
              },
            },
          },
        },
      },

      // DILIGENCE USER
      "/diligence/user": {
        //create diligence user
        post: {
          tags: ["Diligence User"],
          summary: "Create a diligence user",
          description: "Update diligence enterprise",

          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/DiligenceUser", //
                },
              },
            },
          },
          produces: ["application/json"],
          responses: {
            200: {
              description: "Diligence User to be created",
              schema: {
                $ref: "#/components/schemas/DiligenceUser",
              },
            },
          },
        },
      },

      "/diligence/user/login": {
        //sign diligence user
        post: {
          tags: ["Diligence User"],
          summary: "Sign in as a diligence user",
          description: "Update diligence enterprise",

          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UserLogin", //
                },
              },
            },
          },
          produces: ["application/json"],
          responses: {
            200: {
              description: "Diligence User logged in successfully",
              schema: {
                $ref: "#/components/schemas/UserLogin",
              },
            },
          },
        },
      },

      "/diligence/user/forgotpassword": {
        post: {
          tags: ["Diligence User"],
          summary: "Forgot password",
          description: "Forgot password ",

          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UserForgot", //
                },
              },
            },
          },
          produces: ["application/json"],
          responses: {
            200: {
              description: "Reset Link has been sent successfully",
              schema: {
                $ref: "#/components/schemas/UserForgot",
              },
            },
          },
        },
      },

      "/diligence/user/resetPassword": {
        post: {
          tags: ["Diligence User"],
          summary: "Reset password",
          description: "reset password",

          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UserReset", //
                },
              },
            },
          },
          produces: ["application/json"],
          responses: {
            200: {
              description: "Password reset successfully",
              schema: {
                $ref: "#/components/schemas/UserReset",
              },
            },
          },
        },
      },

      // DILIGENCE REQUEST DOCUMENT
      "/diligence/document/{requestId}": {
        get: {
          tags: ["Diligence Document"],
          summary: "Get all diligence request documents",
          parameters: [
            {
              name: "requestId",
              in: "path",
              required: true,
              description: "Request ID",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/components/schemas/DiligenceDocument",
              },
            },
          },
        },

        //create diligence request document
        post: {
          tags: ["Diligence Document"],
          summary: "Create a diligence request documents",
          description: "Update diligence manager",

          security: [{ BearerAuth: [] }],
          parameters: [
            {
              name: "requestId",
              in: "path",
              required: true,
              description: "Request ID",
              type: "string",
            },
          ],
          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/DiligenceDocument", //
                },
              },
            },
          },
          produces: ["application/json"],
          responses: {
            200: {
              description: "Manager to be updated",
              schema: {
                $ref: "#/components/schemas/DiligenceDocument",
              },
            },
          },
        },
      },

      "/diligence/document/{documentId}": {
        get: {
          summary: "Get a request document with given ID",
          tags: ["Diligence Document"],
          parameters: [
            {
              name: "documentId",
              in: "path",
              required: true,
              description: "ID of request document to be found",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Diligence request document is fetched",
              schema: {
                $ref: "#/components/schemas/DiligenceDocument",
              },
            },
          },
        },

        put: {
          summary: "Update Diligence request document with give ID",
          tags: ["Diligence Document"],
          security: [{ BearerAuth: [] }],
          parameters: [
            {
              name: "documentId",
              in: "path",
              required: true,
              description: "ID of Diligence request document to be found",
              type: "string",
            },
            {
              name: "request document",
              in: "body",
              description:
                "Diligence request document with new values of properties",
              schema: {
                $ref: "#/components/schemas/DiligenceDocument",
              },
            },
          ],
          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/DiligenceDocument", //
                },
              },
            },
          },
          responses: {
            200: {
              description: "Diligence request document is updated",
              schema: {
                $ref: "#/components/schemas/DiligenceDocument",
              },
            },
          },
        },

        delete: {
          summary: "Delete Diligence request document with given ID",
          tags: ["Diligence Document"],
          security: [{ BearerAuth: [] }],
          parameters: [
            {
              name: "documentId",
              in: "path",
              required: true,
              description: "ID of request document to be deleted",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Diligence request document is deleted",
              schema: {
                $ref: "#/components/schemas/DiligenceDocument",
              },
            },
          },
        },
      },

      // DILIGENCE REQUEST
      "/diligence/request": {
        get: {
          tags: ["Diligence Request"],
          summary: "Get all diligence request",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/components/schemas/DiligenceRequest",
              },
            },
          },
        },

        //create diligence request
        post: {
          tags: ["Diligence Request"],
          description: "Update diligence manager",
          summary: "Create a diligence request ",

          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/DiligenceRequest", //
                },
              },
            },
          },
          produces: ["application/json"],
          responses: {
            200: {
              description: "Request to be updated",
              schema: {
                $ref: "#/components/schemas/DiligenceRequest",
              },
            },
          },
        },
      },

      "/diligence/managerRequest/{managerId}": {
        //get diligence requests of a branch
        get: {
          summary: "Get all diligence requests of a branch",
          tags: ["Diligence Request"],
          parameters: [
            {
              name: "managerId",
              in: "path",
              required: true,
              description: "ID of branch to be fetched",
              type: "string",
            },
          ],
          produces: ["application/json"],
          responses: {
            200: {
              description: "Request to be updated",
              schema: {
                $ref: "#/components/schemas/DiligenceBranchRequest",
              },
            },
          },
        },
      },

      "/diligence/request/{requestId}": {
        get: {
          summary: "Get a request with given ID",
          tags: ["Diligence Request"],
          parameters: [
            {
              name: "requestId",
              in: "path",
              required: true,
              description: "ID of request to be found",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Diligence request is fetched",
              schema: {
                $ref: "#/components/schemas/DiligenceRequest",
              },
            },
          },
        },

        put: {
          summary: "Update diligence request with give ID",
          tags: ["Diligence Request"],
          parameters: [
            {
              name: "requestId",
              in: "path",
              required: true,
              description: "ID of Diligence request  to be found",
              type: "string",
            },
          ],

          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UpdateDiligenceRequest", //
                },
              },
            },
          },

          responses: {
            200: {
              description: "Diligence request  is updated",
              schema: {
                $ref: "#/components/schemas/UpdateDiligenceRequest",
              },
            },
          },
        },

        delete: {
          summary: "Delete Diligence request  with given ID",
          tags: ["Diligence Request"],
          parameters: [
            {
              name: "requestId",
              in: "path",
              required: true,
              description: "ID of request  to be deleted",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Diligence request  is deleted",
              schema: {
                $ref: "#/components/schemas/DiligenceRequest",
              },
            },
          },
        },
      },

      "/diligence/request/verify/{requestId}": {
        put: {
          summary: "Update diligence request with give ID",
          tags: ["Diligence Request"],
          parameters: [
            {
              name: "requestId",
              in: "path",
              required: true,
              description: "ID of Diligence request  to be found",
              type: "string",
            },
          ],

          responses: {
            200: {
              description: "Diligence request  is updated",
              schema: {
                $ref: "#/components/schemas/DiligenceRequest",
              },
            },
          },
        },
      },

      "/diligence/request/update/{requestId}": {
        put: {
          summary: "Update diligence request with give ID",
          tags: ["Diligence Request"],
          parameters: [
            {
              name: "requestId",
              in: "path",
              required: true,
              description: "ID of Diligence request  to be found",
              type: "string",
            },
          ],

          responses: {
            200: {
              description: "Diligence request  is updated",
              schema: {
                $ref: "#/components/schemas/DiligenceRequest",
              },
            },
          },
        },
      },

      "/diligence/requests/update": {
        put: {
          summary: "Update all diligence request with give IDs",
          tags: ["Diligence Request"],

          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UpdateManyRequest", //
                },
              },
            },
          },
          produces: ["application/json"],
          responses: {
            200: {
              description: "Diligence request  is updated",
              schema: {
                $ref: "#/components/schemas/UpdateManyRequest",
              },
            },
          },
        },
      },
    },
  },
  apis: [
    "../modules/user/routes.js",
    "../modules/bank/routes.js",
    "../modules/country/routes.js",
    "../modules/diligence/routes.js",
    "../modules/productRequest/routes.js",
    "../modules/serviceCategory/routes.js",
    "../modules/payment/routes.js",
    "../modules/product/routes.js",
  ],
};

export default options;
