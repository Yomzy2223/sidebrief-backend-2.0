const options = {
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
        Bearer: {
          type: "apiKey",
          name: "Authorization",
          in: "header",
          description: "Bearer token (Bearer + token)",
        },
      },

      schemas: {
        //User
        Users: {
          type: "object",
          require: [
            "firstName",
            "lastName",
            "username",
            "email",
            "password",
            "phone",
            "referral",
          ],
          properties: {
            firstName: {
              type: "string",
              description: "The first name of the user",
            },
            lastName: {
              type: "string",
              description: "The last name of the user",
            },
            username: {
              type: "string",
              description: "The username of the user",
            },
            email: {
              type: "string",
              description: "The email of the user",
            },
            password: {
              type: "string",
              description: "The password of the user",
            },
            phone: {
              type: "string",
              description: "The phone number of the user",
            },
            referral: {
              type: "string",
              description: "The referral of the user",
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
            email: {
              type: "string",
              description: "The email of the user",
            },
            email: {
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

        //BANK
        Banks: {
          type: "object",
          require: ["bankName", "bankCode", "bankUrl", "bankImage"],
          properties: {
            bankName: {
              type: "string",
              description: "The bank name of the bank",
            },
            bankCode: {
              type: "string",
              description: "The bank code of the bank",
            },
            bankUrl: {
              type: "string",
              description: "The bank url of the bank",
            },
            bankImgage: {
              type: "string",
              description: "The bank image of the bank",
            },
          },
        },

        //DILIGENCE ENTERPRISE
        DiligenceEnterprise: {
          type: "object",
          require: ["name", "address", "adminEmail", "logo", "color"],
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
        NigerianBank: {
          type: "object",
          require: ["color"],
          properties: {
            color: {
              type: "string",
              description: "The color of the bank",
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
    tags: [
      {
        name: "Users",
        description: "The users management API",
      },
      {
        name: "Staffs",
        description: "The staffs management API",
      },
      {
        name: "Banks",
        description: "The banks management API",
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
    ],
    paths: {
      "/users": {
        post: {
          tags: ["Users"],
          summary: "Create new user in system",
          description: "Create new user in system",
          parameters: [
            {
              name: "user",
              in: "body",
              description: "User to be created",
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
          parameters: [
            {
              name: "user",
              in: "body",
              description: "Sign in with email and password",
              schema: {
                $ref: "#/components/schemas/UserLogin",
              },
            },
          ],
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
          parameters: [
            {
              name: "user",
              in: "body",
              description: "Forgot password",
              schema: {
                $ref: "#/components/schemas/UserForgot",
              },
            },
          ],
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
          parameters: [
            {
              name: "user",
              in: "body",
              description: "reset password",
              schema: {
                $ref: "#/components/schemas/UserReset",
              },
            },
          ],
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

      //SIDEBRIEF STAFF
      "/staffs": {
        post: {
          tags: ["Staffs"],
          summary: "Create a new staff",
          description: "Create new staff in system",
          parameters: [
            {
              name: "requestBody",
              in: "body",
              description: "Staff to be created",
              schema: {
                $ref: "#/components/schemas/Staffs",
              },
            },
          ],

          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Staffs", //
                },
              },
            },
          },

          produces: ["application/json"],
          responses: {
            200: {
              description: "New staff is created",
              schema: {
                $ref: "#/components/schemas/Staffs",
              },
            },
          },
        },

        get: {
          tags: ["Staffs"],
          summary: "Get all staffs in system",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/components/schemas/Staffs",
              },
            },
          },
        },
      },

      "/staffs/login": {
        post: {
          tags: ["Staffs"],
          summary: "Sign in staff",
          description: "Allow registered staff into system",
          parameters: [
            {
              name: "requestBody",
              in: "body",
              description: "Staff to be signed in",
              schema: {
                $ref: "#/components/schemas/StaffLogin",
              },
            },
          ],

          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/StaffLogin", //
                },
              },
            },
          },

          produces: ["application/json"],
          responses: {
            200: {
              description: " staff signed in successfully",
              schema: {
                $ref: "#/components/schemas/StaffLogin",
              },
            },
          },
        },
      },

      "/staffs/{id}": {
        get: {
          summary: "Get a staff with given ID",
          tags: ["Staffs"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of staff to be fetched",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Staff is fetched",
              schema: {
                $ref: "#/components/schemas/Staffs",
              },
            },
          },
        },

        delete: {
          summary: "Delete staff with given ID",
          tags: ["Staffs"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of staff to be deleted",
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "Staff is deleted",
              schema: {
                $ref: "#/components/schemas/Staffs",
              },
            },
          },
        },

        put: {
          summary: "Update staff with give ID",
          tags: ["Staffs"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID of staff to be updated",
              type: "string",
            },
            {
              name: "staff",
              in: "body",
              description: "Staff with new values of properties",
              schema: {
                $ref: "#/components/schemas/Staffs",
              },
            },
          ],
          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Staffs", //
                },
              },
            },
          },
          responses: {
            200: {
              description: "Staff is updated",
              schema: {
                $ref: "#/components/schemas/Staffs",
              },
            },
          },
        },
      },

      "/banks": {
        post: {
          tags: ["Banks"],
          summary: "Create a new bank",
          description: "Create new bank in system",
          parameters: [
            {
              name: "bank",
              in: "body",
              description: "Bank to be created",
              schema: {
                $ref: "#/components/schemas/Banks",
              },
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
            {
              name: "bank",
              in: "body",
              description: "Bank with new values of properties",
              schema: {
                $ref: "#/components/schemas/Banks",
              },
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
          parameters: [
            {
              name: "bankId",
              in: "path",
              required: true,
              description: "Nigerian bank Id to be updated",
              type: "string",
            },
            {
              name: "Nigerian Bank",
              in: "body",
              description: "Bank to be updated",
              schema: {
                $ref: "#/components/schemas/NigerianBank",
              },
            },
          ],
          requestBody: {
            // expected request body
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/NigerianBank", //
                },
              },
            },
          },
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
          },
        },

        //update diligence enterprise
        post: {
          tags: ["Diligence Enterprise"],
          summary: "Create a diligence enterprise",
          description: "Update diligence enterprise",
          parameters: [
            {
              name: "Diligence Enterprise",
              in: "body",
              description: "Enterprise to be updated",
              schema: {
                $ref: "#/components/schemas/DiligenceEnterprise",
              },
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
          produces: ["application/json"],
          responses: {
            200: {
              description: "Enterprise to be updated",
              schema: {
                $ref: "#/components/schemas/DiligenceEnterprise",
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
              name: "id",
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
          responses: {
            200: {
              description: "Diligence Enterprise is deleted",
              schema: {
                $ref: "#/components/schemas/DiligenceEnterprise",
              },
            },
          },
        },

        put: {
          summary: "Update Diligence Enterprise with give ID",
          tags: ["Diligence Enterprise"],
          parameters: [
            {
              name: "enterpriseId",
              in: "path",
              required: true,
              description: "ID of Diligence Enterpriseto be updated",
              type: "string",
            },
            {
              name: "enterprise",
              in: "body",
              description: "Diligence Enterprise with new values of properties",
              schema: {
                $ref: "#/components/schemas/DiligenceEnterprise",
              },
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
      "/diligence/manager/enterpriseId": {
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

        //create diligence manager
        post: {
          tags: ["Diligence Manager"],
          summary: "Create a diligence manager",
          description: "Update diligence manager",
          parameters: [
            {
              name: "enterpriseId",
              in: "path",
              required: true,
              description: "Enterprise ID",
              type: "string",
            },
            {
              name: "Diligence Manager",
              in: "body",
              description: "Manager to be updated",
              schema: {
                $ref: "#/components/schemas/DiligenceManager",
              },
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
            {
              name: "manager",
              in: "body",
              description: "Diligence manager with new values of properties",
              schema: {
                $ref: "#/components/schemas/DiligenceManager",
              },
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
      "/diligence/staff/managerId": {
        get: {
          tags: ["Diligence Staff"],
          summary: "Create a diligence staff",
          summary: "Get all diligence manager",
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
            {
              name: "Diligence Staff",
              in: "body",
              description: "staff to be created",
              schema: {
                $ref: "#/components/schemas/DiligenceStaff",
              },
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
          parameters: [
            {
              name: "Diligence User",
              in: "body",
              description: "Enterprise to be updated",
              schema: {
                $ref: "#/components/schemas/DiligenceUser",
              },
            },
          ],
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
          parameters: [
            {
              name: "Diligence User",
              in: "body",
              description: "Sign in diligene user",
              schema: {
                $ref: "#/components/schemas/UserLogin",
              },
            },
          ],
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
          parameters: [
            {
              name: "user",
              in: "body",
              description: "Forgot password",
              schema: {
                $ref: "#/components/schemas/UserForgot",
              },
            },
          ],
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
          parameters: [
            {
              name: "user",
              in: "body",
              description: "reset password",
              schema: {
                $ref: "#/components/schemas/UserReset",
              },
            },
          ],
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
      "/diligence/document/requestId": {
        get: {
          tags: ["Diligence Document"],
          summary: "Get all diligence request documents",
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
          parameters: [
            {
              name: "managerId",
              in: "path",
              required: true,
              description: "Manager ID",
              type: "string",
            },
            {
              name: "Diligence Document",
              in: "body",
              description: "Document to be created",
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
          parameters: [
            {
              name: "Diligence Request",
              in: "body",
              description: "Request to be created",
              schema: {
                $ref: "#/components/schemas/DiligenceRequest",
              },
            },
          ],
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
            {
              name: "Diligence request ",
              in: "body",
              description: "Diligence request  with new values of properties",
              schema: {
                $ref: "#/components/schemas/DiligenceRequest",
              },
            },
          ],
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
            {
              name: "Diligence request ",
              in: "body",
              description: "Diligence request  with new values of properties",
              schema: {
                $ref: "#/components/schemas/DiligenceRequest",
              },
            },
          ],
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
    },
  },
  apis: [
    "../modules/user/routes.js",
    "../modules/bank/routes.js",
    "../modules/staff/routes.js",
    "../modules/diligence/routes.js",
  ],
};

module.exports = options;
