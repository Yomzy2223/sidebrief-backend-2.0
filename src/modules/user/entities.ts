export interface UserPayload {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  phone: string;
  verified: boolean;
  referral: string;
}
export interface UserResponseProps {
  message: string;
  statusCode: number;
  data: UserResponse;
}

export interface UserResponse {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  picture: string;
  phone: string;
  token?: string;
  verified: boolean;
  referral: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface ForgotPassword {
  email: string;
}
