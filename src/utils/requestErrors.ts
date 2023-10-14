// General custom error
class CustomError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

// General BadRequest error
class BadRequest extends CustomError {
  constructor(message = "Bad Request") {
    super(message, 400);
    Object.setPrototypeOf(this, BadRequest.prototype);
  }
}

// General Unauthorized error
class Unauthorized extends CustomError {
  constructor(message = "Unauthorized") {
    super(message, 401);
    Object.setPrototypeOf(this, Unauthorized.prototype);
  }
}

// General Forbidden error
class Forbidden extends CustomError {
  constructor(message = "Forbidden") {
    super(message, 403);
    Object.setPrototypeOf(this, Forbidden.prototype);
  }
}

// General not found error
class NotFound extends CustomError {
  constructor(message = "Not Found") {
    super(message, 404);
    Object.setPrototypeOf(this, NotFound.prototype);
  }
}

export { CustomError, BadRequest, Unauthorized, Forbidden, NotFound };
