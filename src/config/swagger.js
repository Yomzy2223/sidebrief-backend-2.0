const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Sidebrief Version 2 Application",
      version: "2.0.0",
      description: "This is Sidebrief version 2 application",
    },
    servers: [
      {
        url: "http://localhost:8000",
        description: "Development server",
      },
    ],
    components: {
      schemas: {
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
    ],
    paths: {
      "/users": {
        post: {
          tags: ["Users"],
          description: "Create new user in system",
          parameters: [
            {
              name: "user",
              in: "body",
              description: "User that we want to create",
              schema: {
                $ref: "#/components/schemas/Users",
              },
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
              description: "ID of user that we want to find",
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
              description: "ID of user that we want to find",
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
              description: "ID of user that we want to find",
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

      "/banks": {
        post: {
          tags: ["Banks"],
          description: "Create new bank in system",
          parameters: [
            {
              name: "bank",
              in: "body",
              description: "Bank that we want to create",
              schema: {
                $ref: "#/components/schemas/Banks",
              },
            },
          ],
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
              description: "ID of bank that we want to find",
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
              description: "ID of bank that we want to find",
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
              description: "ID of bank that we want to find",
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
    },
  },
  apis: ["../modules/user/routes.js", "../modules/bank/routes.js"],
};

module.exports = options;